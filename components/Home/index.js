
import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../threejs/Model';
import Hi from '../../threejs/Hi'
import Setup from '../../threejs/Setup'
import { DarkLightContext } from '../../context/darkContext';
import useBreakpoints from '../../hooks/useBreakpoint';
export default function Home() {

    const [dark, _] = useContext(DarkLightContext)
    const { isXs, isSm, isMd, isLg, active } = useBreakpoints();
    return (
        <div className={`flex justify-end `}>

            <Canvas
                shadowMap
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    height: isXs || isSm || isMd ? '50vh' : '100vh',
                }}
            >
                {!dark ? <>
                    <ambientLight intensity={0.5} />
                    <directionalLight intensity={0.4}
                        shadow-mapSize-height={512}
                        shadow-mapSize-width={512}
                        castShadow
                    />
                </>
                    : <>
                        <ambientLight intensity={0.02} />
                        <pointLight
                            color={[0.7, 0.7, 1.5]}
                            position={[-2, 4, 4]}
                            intensity={0.3} />
                        <spotLight
                            castShadow
                            intensity={0.6}

                        />
                    </>
                }

                <Suspense fallback={null}>
                    <Setup
                        castShadow
                        position={[0, -4 / 6, 0]}
                        scale={1 / 6}
                        rotation={[0.15, -90.3, -0.05]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div >
    );
}