// Model.tsx
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "leva";
import * as THREE from "three";

export default function Model() {
  const { nodes } = useGLTF("/models/torus.glb");
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.01;
    }
  });

  return (
    <group scale={viewport.width / 3}>
      <Text
        font={"/fonts/Poppins-Regular.ttf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {"Talk is cheap.\nSee the code"}
      </Text>
      <mesh ref={torus} geometry={(nodes.Torus002 as THREE.Mesh).geometry}>
        <MeshTransmissionMaterial thickness={0.2}
        roughness={0}
        transmission={1}
        ior={1.2}
        chromaticAberration={0.02} />
      </mesh>
    </group>
  );
}
