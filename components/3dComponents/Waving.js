

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Waving from '../../threejs/Waving';

export default function Home() {
    return (
        <Canvas
            camera={{ position: [2, 0, 12.25], fov: 15 }}
            style={{

                width: '100vw',
                height: '100vh',
            }}
        >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
                <Waving position={[0.025, -1.6, 0]} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}