/* eslint-disable react/no-unknown-property */
import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Setup from '../../threejs/Setup'
import { DarkLightContext } from '../../context/darkContext';
import useBreakpoints from '../../hooks/useBreakpoint';

export default function PcRoom({ setLoading }) {
    const [dark, _] = useContext(DarkLightContext)
    const { isXs, isSm, isMd, isLg, active } = useBreakpoints();
    return (
        <Canvas
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
                    <ambientLight intensity={0.1} />
                    <pointLight
                        color={[0.7, 0.7, 0.7]}
                        position={[-2, 4, 4]}
                        intensity={0.3} />
                    <spotLight
                        castShadow
                        position={[-0.3, 0.8, 0.31]}
                        intensity={0.6}

                    />
                </>
            }

            <Suspense fallback={null}>
                <Setup
                    setLoading={setLoading}
                    shadowMap
                    position={[0, -4 / 6, 0]}
                    scale={1 / 6}
                    rotation={[0.15, -90.3, -0.05]} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}