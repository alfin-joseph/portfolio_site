import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Scene = () => {
  const starsRef = useRef();

  // Animate the stars to slowly rotate over time
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta / 10;
      starsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Stars 
        ref={starsRef}
        radius={100}      /* Radius of the inner sphere (default=100) */
        depth={50}        /* Depth of area where stars should fit (default=50) */
        count={5000}      /* Amount of stars (default=5000) */
        factor={4}        /* Size factor (default=4) */
        saturation={0}    /* Saturation 0-1 (default=0) */
        fade={true}       /* Faded dots (default=false) */
        speed={1}         /* Background speed inside the frame */
      />
    </group>
  );
};

const SpaceBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none', // Prevents the canvas from swallowing clicks
      backgroundColor: '#0b1121' // Fallback to our theme's dark navy blue
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
