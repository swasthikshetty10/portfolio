/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Waving from '../../threejs/Waving';
import { DarkLightContext } from '../../context/darkContext';
import useBreakpoints from '../../hooks/useBreakpoint';
export default function Home({ setLoading }) {
    const { isXs, isSm, isMd, isLg, active } = useBreakpoints();


    return (
        <>
            <Canvas
                camera={{ position: [0.1, 0, 4.75], fov: 15 }}
                style={{
                    height: isXs || isSm ? '50vh' : '100vh',

                }}

            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                    <Waving setLoading={setLoading} position={[0.025, -1.6, 0]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </>
    );
}