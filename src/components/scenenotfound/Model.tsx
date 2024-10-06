import {
  useGLTF,
  Text,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import React from "react";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/shards.glb");

  return (
    <group scale={viewport.width / 1.5}>
      {nodes.Scene.children
        .filter((child) => child instanceof THREE.Mesh)
        .map((mesh, i) => {
          return <Mesh data={mesh as THREE.Mesh} key={i} />;
        })}
      <Font />
    </group>
  );
}

function Font() {
  const src = "/fonts/Poppins-Regular.ttf";
  const textOption = {
    color: "white",
    anchorX: "center" as const, // explicitly specify 'center' as a valid string
    anchorY: "middle" as const, // 'middle' may need to be replaced with a valid value like 'center', 'top', 'bottom', or a number
  };
  return (
    <group>
      <Text font={src} position={[0, 0, -0.1]} fontSize={0.4} {...textOption}>
        404
      </Text>
      <Text
        font={src}
        position={[0, -0.15, -0.1]}
        fontSize={0.03}
        {...textOption}
      >
        The link is broken
      </Text>
    </group>
  );
}

function Mesh({ data }: { data: THREE.Mesh }) {
  // const materialProps = useControls({
  //   thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
  //   ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.75, min: 0, max: 1 },
  //   resolution: { value: 300 },
  // });

  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          thickness={0.275}
          ior={1.8}
          chromaticAberration={0.75}
          resolution={300}
        />
      </mesh>
    </Float>
  );
}
