
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../threejs/Model';
import Hi from '../../threejs/Hi'
import Setup from '../../threejs/Setup'
export default function Home() {
    const [angel, setAngle] = useState()
    useEffect(() => {

    })
    return (
        <div className={`flex justify-end `}>

            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    backgroundColor: '',
                    width: '100vw',
                    height: '100vh',
                }}
            >
                {/* <ambientLight intensity={0.35} /> */}
                <pointLight color={"ffff00"} position={[0, 4, 3]} intensity={0.4} />

                <directionalLight intensity={0.2} />
                <Suspense fallback={null}>
                    <Setup
                        position={[0, -4 / 6, 0]} scale={1 / 6} rotation={[0.15, -90.3, -0.05]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div >
    );
}