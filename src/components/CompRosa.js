/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Tobalation (https://sketchfab.com/tobalation)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/retro-computer-3a496376915846459d77fc14fdd6c1e0
title: Retro computer
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/compRosa.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.36}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -0.03]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.TextureGrid}
            />
          </group>
          <group position={[0, 0.5, 0.03]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.TextureGrid}
            />
          </group>
          <group position={[0.88, 0.06, 0.75]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.TextureGrid}
            />
          </group>
          <group position={[0, 0.06, 0.81]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.TextureGrid}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/compRosa.gltf");
