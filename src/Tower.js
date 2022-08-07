/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model_Tower({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tower.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Bone} />
      <primitive object={nodes.Bone003} />
      <skinnedMesh geometry={nodes.Cube.geometry} material={materials.Material} skeleton={nodes.Cube.skeleton} />
    </group>
  )
}

useGLTF.preload('/tower.glb')
