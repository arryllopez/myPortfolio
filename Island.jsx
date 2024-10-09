/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: TST1818 (https://sketchfab.com/TST1818)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hobbit-house-low-poly-5ce32873e252416aa7164aba2d84298b
Title: Hobbit House - Low poly
*/

import { useRef , useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame, useThree } from '@react-three/fiber'
import {a} from '@react-spring/three'

import islandScene from '../assets/3d/hobbit_house_-_low_poly.glb';


const Island = (props) => {
    const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene)
  return (
    <a.group ref = {islandRef} {...props} > 
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.014}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}> 
            <mesh
              geometry={nodes.Doors_and_Windows_Texture_Material_0.geometry}
              material={materials.Texture_Material}
            />
            <mesh
              geometry={nodes.Doors_and_Windows_Glow_0.geometry}
              material={materials.Glow}
            />
          </group>
          <group
            position={[11.677, 110.352, -49.61]}
            rotation={[-1.415, 0.068, -0.095]}
            scale={4.175}>
            <mesh
              geometry={nodes.Terrain_Terrain_top_mat_0.geometry}
              material={materials.Terrain_top_mat}
            />
            <mesh
              geometry={nodes.Terrain_Terrain_bottom_mat_0.geometry}
              material={materials.Terrain_bottom_mat}
            />
          </group>
          <group
            position={[-412.77, 136.939, -72.832]}
            rotation={[1.158, 0.574, 2.292]}
            scale={13.303}>
            <mesh
              geometry={nodes.Trees_Texture_Material_0.geometry}
              material={materials.Texture_Material}
            />
            <mesh
              geometry={nodes.Trees_bush_1_0.geometry}
              material={materials.bush_1}
            />
          </group>
          <mesh
            geometry={nodes.Fences_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[-23.045, 150.109, -216.8]}
            rotation={[-1.525, 0.081, 2.844]}
            scale={[2.901, 2.901, 2.88]}
          />
          <mesh
            geometry={nodes.Roof_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[11.677, 110.352, -49.61]}
            rotation={[-1.415, 0.068, -0.095]}
            scale={4.175}
          />
          <mesh
            geometry={nodes.Stairs_Bricks_0.geometry}
            material={materials.Bricks}
            position={[-128.335, 73.174, -154.82]}
            rotation={[-Math.PI / 2, 0, -0.967]}
            scale={100}
          />
          <mesh
            geometry={nodes.Walls_Bricks_0.geometry}
            material={materials.Bricks}
            position={[298.898, 14.957, -32.494]}
            rotation={[-Math.PI / 2, 0, -0.967]}
            scale={100}
          />
          <mesh
            geometry={nodes.Well_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[162.027, 12.176, -25.63]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={31.143}
          />
          <mesh
            geometry={nodes.Flat_Grass_Final_Grass_0.geometry}
            material={materials.Final_Grass}
            position={[334.479, 9.345, -118.476]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Flowers_Final_Grass_0.geometry}
            material={materials.Final_Grass}
            position={[-95.88, 12.207, -39.938]}
            rotation={[-1.496, 0.143, 0.681]}
            scale={2.204}
          />
          <mesh
            geometry={nodes.Rocks_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[20.577, -3.536, -44.211]}
            rotation={[-1.462, 0.096, -1.241]}
            scale={9.811}
          />
          <mesh
            geometry={nodes.Small_Grass_Final_Grass_0.geometry}
            material={materials.Final_Grass}
            position={[-35.316, 40.398, 70.605]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      </a.group>
  )
}


export default Island;
