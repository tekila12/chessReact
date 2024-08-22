import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import WhitePawnSix from './WhitePieces/WhitePawnSix';

type ChessBoardProps = JSX.IntrinsicElements['group']

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    BlackHorse1: THREE.Mesh
    BlackHorse2: THREE.Mesh
    defaultMaterial021: THREE.Mesh
    defaultMaterial021_1: THREE.Mesh
    BlackKnight1: THREE.Mesh
    BlackKnight2: THREE.Mesh
    BlackPawn1: THREE.Mesh
    BlackPawn2: THREE.Mesh
    BlackPawn3: THREE.Mesh
    BlackPawn4: THREE.Mesh
    BlackPawn5: THREE.Mesh
    BlackPawn6: THREE.Mesh
    BlackPawn7: THREE.Mesh
    BlackPawn8: THREE.Mesh
    BlackQueen: THREE.Mesh
    BlackRock1: THREE.Mesh
    BlackRock2: THREE.Mesh
    defaultMaterial011: THREE.Mesh
    defaultMaterial012: THREE.Mesh
    defaultMaterial035: THREE.Mesh
    defaultMaterial009: THREE.Mesh
    WhiteHorse1: THREE.Mesh
    WhiteHorse2: THREE.Mesh
    WhiteKing: THREE.Mesh
    WhiteKnight1: THREE.Mesh
    WhiteKnight2: THREE.Mesh
    WhitePawn1: THREE.Mesh
    WhitePawn2: THREE.Mesh
    WhitePawn3: THREE.Mesh
    WhitePawn4: THREE.Mesh
    WhitePawn5: THREE.Mesh
    WhitePawn6: THREE.Mesh
    WhitePawn7: THREE.Mesh
    WhitePawn8: THREE.Mesh
    WhiteQueen: THREE.Mesh
    WhiteRock1: THREE.Mesh
    WhiteRock2: THREE.Mesh
    defaultMaterial042_cell031: THREE.Mesh
    defaultMaterial042_cell031_1: THREE.Mesh
    defaultMaterial042_cell013_1: THREE.Mesh
    defaultMaterial042_cell013_2: THREE.Mesh
    defaultMaterial042_cell014: THREE.Mesh
    defaultMaterial042_cell014_1: THREE.Mesh
    defaultMaterial042_cell019: THREE.Mesh
    defaultMaterial042_cell016_1: THREE.Mesh
    defaultMaterial042_cell016_2: THREE.Mesh
    defaultMaterial042_cell022: THREE.Mesh
    defaultMaterial042_cell026: THREE.Mesh
    defaultMaterial042_cell019_1: THREE.Mesh
    defaultMaterial042_cell019_2: THREE.Mesh
    defaultMaterial042_cell020_1: THREE.Mesh
    defaultMaterial042_cell020_2: THREE.Mesh
    defaultMaterial042_cell021_1: THREE.Mesh
    defaultMaterial042_cell021_2: THREE.Mesh
    defaultMaterial042_cell017: THREE.Mesh
    defaultMaterial042_cell023_1: THREE.Mesh
    defaultMaterial042_cell023_2: THREE.Mesh
    defaultMaterial042_cell024_1: THREE.Mesh
    defaultMaterial042_cell024_2: THREE.Mesh
    defaultMaterial042_cell024: THREE.Mesh
    defaultMaterial042_cell025: THREE.Mesh
    defaultMaterial042_cell027: THREE.Mesh
    defaultMaterial041_cell127: THREE.Mesh
    defaultMaterial041_cell127_1: THREE.Mesh
    defaultMaterial041_cell128: THREE.Mesh
    defaultMaterial041_cell128_1: THREE.Mesh
    defaultMaterial041_cell100: THREE.Mesh
    defaultMaterial041_cell100_1: THREE.Mesh
    defaultMaterial041_cell101: THREE.Mesh
    defaultMaterial041_cell101_1: THREE.Mesh
    defaultMaterial041_cell077: THREE.Mesh
    defaultMaterial041_cell078: THREE.Mesh
    defaultMaterial041_cell105: THREE.Mesh
    defaultMaterial041_cell105_1: THREE.Mesh
    defaultMaterial041_cell090: THREE.Mesh
    defaultMaterial041_cell107_1: THREE.Mesh
    defaultMaterial041_cell107_2: THREE.Mesh
    defaultMaterial041_cell108: THREE.Mesh
    defaultMaterial041_cell108_1: THREE.Mesh
    defaultMaterial041_cell109_1: THREE.Mesh
    defaultMaterial041_cell109_2: THREE.Mesh
    defaultMaterial041_cell109: THREE.Mesh
    defaultMaterial041_cell111: THREE.Mesh
    defaultMaterial041_cell112: THREE.Mesh
    defaultMaterial041_cell112_1: THREE.Mesh
    defaultMaterial041_cell113: THREE.Mesh
    defaultMaterial041_cell113_1: THREE.Mesh
    defaultMaterial041_cell114: THREE.Mesh
    defaultMaterial041_cell114_1: THREE.Mesh
    defaultMaterial041_cell115: THREE.Mesh
    defaultMaterial041_cell115_1: THREE.Mesh
    defaultMaterial041_cell116: THREE.Mesh
    defaultMaterial041_cell116_1: THREE.Mesh
  }
  materials: {
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    initialShadingGroup: THREE.MeshStandardMaterial
    blinn3SG: THREE.MeshStandardMaterial
  }
  animations:GLTFAction[]
}

type ActionName =
  | 'Sketchfab_model_Sketchfab_model'
  | 'Collada visual scene group'
  | 'blackpieces_mesh'
  | 'defaultMaterial.005'
  | 'defaultMaterial.044'
  | 'defaultMaterial.018'
  | 'defaultMaterial.050'
  | 'defaultMaterial.049'
  | 'defaultMaterial.014'
  | 'defaultMaterial.013'
  | 'defaultMaterial.003'
  | 'defaultMaterial.002'
  | 'defaultMaterial.001'
  | 'defaultMaterial.015'
  | 'defaultMaterial.016'
  | 'defaultMaterial.017'
  | 'defaultMaterial.051'
  | 'defaultMaterial.033'
  | 'defaultMaterial.052'
  | 'chessboard_mesh'
  | 'defaultMaterial.011'
  | 'defaultMaterial.012'
  | 'whitepieces_mesh'
  | 'defaultMaterial.035Action.001'
  | 'defaultMaterial.009Action'
  | 'defaultMaterial.038'
  | 'defaultMaterial.020'
  | 'defaultMaterial.007'
  | 'defaultMaterial.006'
  | 'defaultMaterial.008'
  | 'defaultMaterial.046'
  | 'defaultMaterial.045'
  | 'defaultMaterial.043'
  | 'defaultMaterial.042'
  | 'defaultMaterial.041'
  | 'defaultMaterial.034'
  | 'defaultMaterial.040'
  | 'defaultMaterial.036'
  | 'defaultMaterial.047'
  | 'defaultMaterial.010'
  | 'defaultMaterial.042_cell.012Action'
  | 'Action'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function ChessBoard(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Mesh>(null);
  const { nodes, materials, animations } = useGLTF('/chess.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group  {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
            <group name="blackpieces_mesh">
              <mesh name="BlackHorse1" geometry={nodes.BlackHorse1.geometry} material={materials['Material.011']} rotation={[-Math.PI, 0, -Math.PI]} />
              <mesh name="BlackHorse2" geometry={nodes.BlackHorse2.geometry} material={materials['Material.016']} position={[10.02, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
              <group name="BlackKing">
                <mesh name="defaultMaterial021" geometry={nodes.defaultMaterial021.geometry} material={materials['Material.014']} />
                <mesh name="defaultMaterial021_1" geometry={nodes.defaultMaterial021_1.geometry} material={materials['Material.015']} />
              </group>
              <mesh name="BlackKnight1" geometry={nodes.BlackKnight1.geometry} material={materials['Material.012']} position={[-5.99, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
              <mesh name="BlackKnight2" geometry={nodes.BlackKnight2.geometry} material={materials['Material.015']} rotation={[Math.PI, 0, Math.PI]} />
              <mesh name="BlackPawn1" geometry={nodes.BlackPawn1.geometry} material={materials['Material.007']} position={[-7.98, 0, -3.99]} />
              <mesh name="BlackPawn2" geometry={nodes.BlackPawn2.geometry} material={materials['Material.006']} position={[-6.01, 0, -3.99]} />
              <mesh name="BlackPawn3" geometry={nodes.BlackPawn3.geometry} material={materials['Material.001']} position={[-4, 0, -3.99]} />
              <mesh name="BlackPawn4" geometry={nodes.BlackPawn4.geometry} material={materials['Material.009']} position={[-1.98, 0, -4.01]} />
              <mesh name="BlackPawn5" geometry={nodes.BlackPawn5.geometry} material={materials['Material.002']} position={[0, 0, -3.99]} />
              <mesh name="BlackPawn6" geometry={nodes.BlackPawn6.geometry} material={materials['Material.003']} position={[2, 0, -3.99]} />
              <mesh name="BlackPawn7" geometry={nodes.BlackPawn7.geometry} material={materials['Material.004']} position={[4.01, 0, -3.99]} />
              <mesh name="BlackPawn8" geometry={nodes.BlackPawn8.geometry} material={materials['Material.005']} position={[5.97, 0, -3.99]} />
              <mesh name="BlackQueen" geometry={nodes.BlackQueen.geometry} material={materials['Material.013']} position={[-2.03, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
              <mesh name="BlackRock1" geometry={nodes.BlackRock1.geometry} material={materials['Material.010']} position={[-13.96, -0.05, 0.05]} />
              <mesh name="BlackRock2" geometry={nodes.BlackRock2.geometry} material={materials['Material.008']} position={[0.04, -0.05, 0.05]} />
            </group>
            <group name="chessboard_mesh">
              <mesh name="defaultMaterial011" geometry={nodes.defaultMaterial011.geometry} material={materials.initialShadingGroup} />
              <mesh name="defaultMaterial012" geometry={nodes.defaultMaterial012.geometry} material={materials.blinn3SG} />
            </group>
            <group name="whitepieces_mesh">
              <mesh name="defaultMaterial035" geometry={nodes.defaultMaterial035.geometry} material={nodes.defaultMaterial035.material} position={[0, 0, 1.97]}>
                <mesh name="defaultMaterial009" geometry={nodes.defaultMaterial009.geometry} material={nodes.defaultMaterial009.material} position={[-6.19, 0, 0.03]} />
              </mesh>
              <mesh name="WhiteHorse1" geometry={nodes.WhiteHorse1.geometry} material={nodes.WhiteHorse1.material} position={[-9.98, 0, 0]} />
              <mesh name="WhiteHorse2" geometry={nodes.WhiteHorse2.geometry} material={nodes.WhiteHorse2.material} />
              <mesh name="WhiteKing" geometry={nodes.WhiteKing.geometry} material={nodes.WhiteKing.material} />
              <mesh name="WhiteKnight1" geometry={nodes.WhiteKnight1.geometry} material={nodes.WhiteKnight1.material} />
              <mesh name="WhiteKnight2" geometry={nodes.WhiteKnight2.geometry} material={nodes.WhiteKnight2.material} position={[-3.97, 0, 4.02]} />
              <mesh name="WhitePawn1" geometry={nodes.WhitePawn1.geometry} material={nodes.WhitePawn1.material} position={[-11.98, 0, 3.97]} />
              <mesh name="WhitePawn2" geometry={nodes.WhitePawn2.geometry} material={nodes.WhitePawn2.material} position={[-9.97, 0, 3.97]} />
              <mesh name="WhitePawn3" geometry={nodes.WhitePawn3.geometry} material={nodes.WhitePawn3.material} position={[-7.99, 0, 3.97]} />
              <mesh name="WhitePawn4" geometry={nodes.WhitePawn4.geometry} material={nodes.WhitePawn4.material} position={[-5.98, 0, 3.97]} />
              <mesh name="WhitePawn5" geometry={nodes.WhitePawn5.geometry} material={nodes.WhitePawn5.material} position={[-3.99, 0, 3.99]} />
              <WhitePawnSix actions={actions}  geometry={nodes.WhitePawn6.geometry} material={nodes.WhitePawn6.material} position={[-1.97, 0, 3.99]}>
                <React.Fragment>
                      <mesh name="WhitePawn6"  />
                </React.Fragment>
</WhitePawnSix>
              
              <mesh name="WhitePawn7" geometry={nodes.WhitePawn7.geometry} material={nodes.WhitePawn7.material} position={[0.01, 0, 3.99]} />
              <mesh name="WhitePawn8" geometry={nodes.WhitePawn8.geometry} material={nodes.WhitePawn8.material} position={[1.99, 0, 3.99]} />
              <mesh name="WhiteQueen" geometry={nodes.WhiteQueen.geometry} material={nodes.WhiteQueen.material} />
              <mesh name="WhiteRock1" geometry={nodes.WhiteRock1.geometry} material={nodes.WhiteRock1.material} position={[0.03, -0.04, 0.02]} rotation={[Math.PI, 0, Math.PI]} />
              <mesh name="WhiteRock2" geometry={nodes.WhiteRock2.geometry} material={nodes.WhiteRock2.material} position={[14, -0.04, 0.02]} rotation={[Math.PI, 0, Math.PI]} />
            </group>
          </group>
        </group>
        <group name="defaultMaterial042_cell012" position={[0.76, 1.51, 5.13]} rotation={[-0.21, -0.17, 1.79]}>
          <mesh name="defaultMaterial042_cell031" geometry={nodes.defaultMaterial042_cell031.geometry} material={nodes.defaultMaterial042_cell031.material} />
          <mesh name="defaultMaterial042_cell031_1" geometry={nodes.defaultMaterial042_cell031_1.geometry} material={nodes.defaultMaterial042_cell031_1.material} />
        </group>
        <group name="defaultMaterial042_cell015" position={[0.76, 1.51, 5.13]} rotation={[0.53, -0.01, 0.99]}>
          <mesh name="defaultMaterial042_cell013_1" geometry={nodes.defaultMaterial042_cell013_1.geometry} material={nodes.defaultMaterial042_cell013_1.material} />
          <mesh name="defaultMaterial042_cell013_2" geometry={nodes.defaultMaterial042_cell013_2.geometry} material={nodes.defaultMaterial042_cell013_2.material} />
        </group>
        <group name="defaultMaterial042_cell018" position={[0.76, 1.51, 5.13]} rotation={[0.9, -1.25, 0.15]}>
          <mesh name="defaultMaterial042_cell014" geometry={nodes.defaultMaterial042_cell014.geometry} material={nodes.defaultMaterial042_cell014.material} />
          <mesh name="defaultMaterial042_cell014_1" geometry={nodes.defaultMaterial042_cell014_1.geometry} material={nodes.defaultMaterial042_cell014_1.material} />
        </group>
        <mesh name="defaultMaterial042_cell019" geometry={nodes.defaultMaterial042_cell019.geometry} material={nodes.defaultMaterial042_cell019.material} position={[0.76, 1.51, 5.13]} rotation={[-1.34, 0.52, -0.22]} />
        <group name="defaultMaterial042_cell021" position={[0.76, 1.51, 5.13]} rotation={[1.18, 0.22, 1.67]}>
          <mesh name="defaultMaterial042_cell016_1" geometry={nodes.defaultMaterial042_cell016_1.geometry} material={nodes.defaultMaterial042_cell016_1.material} />
          <mesh name="defaultMaterial042_cell016_2" geometry={nodes.defaultMaterial042_cell016_2.geometry} material={nodes.defaultMaterial042_cell016_2.material} />
        </group>
        <mesh name="defaultMaterial042_cell022" geometry={nodes.defaultMaterial042_cell022.geometry} material={nodes.defaultMaterial042_cell022.material} position={[0.76, 1.51, 5.13]} rotation={[-1.85, -0.11, -1.19]} />
        <mesh name="defaultMaterial042_cell026" geometry={nodes.defaultMaterial042_cell026.geometry} material={nodes.defaultMaterial042_cell026.material} position={[0.76, 1.51, 5.13]} rotation={[-1.07, 1.07, -0.68]} />
        <group name="defaultMaterial042_cell029" position={[0.76, 1.51, 5.13]} rotation={[2.3, -0.09, -2.07]}>
          <mesh name="defaultMaterial042_cell019_1" geometry={nodes.defaultMaterial042_cell019_1.geometry} material={nodes.defaultMaterial042_cell019_1.material} />
          <mesh name="defaultMaterial042_cell019_2" geometry={nodes.defaultMaterial042_cell019_2.geometry} material={nodes.defaultMaterial042_cell019_2.material} />
        </group>
        <group name="defaultMaterial042_cell013" position={[0.76, 1.51, 5.13]} rotation={[-1.13, -1.07, -2.12]}>
          <mesh name="defaultMaterial042_cell020_1" geometry={nodes.defaultMaterial042_cell020_1.geometry} material={nodes.defaultMaterial042_cell020_1.material} />
          <mesh name="defaultMaterial042_cell020_2" geometry={nodes.defaultMaterial042_cell020_2.geometry} material={nodes.defaultMaterial042_cell020_2.material} />
        </group>
        <group name="defaultMaterial042_cell016" position={[0.76, 1.51, 5.13]} rotation={[-2.6, 1.39, 0.33]}>
          <mesh name="defaultMaterial042_cell021_1" geometry={nodes.defaultMaterial042_cell021_1.geometry} material={nodes.defaultMaterial042_cell021_1.material} />
          <mesh name="defaultMaterial042_cell021_2" geometry={nodes.defaultMaterial042_cell021_2.geometry} material={nodes.defaultMaterial042_cell021_2.material} />
        </group>
        <mesh name="defaultMaterial042_cell017" geometry={nodes.defaultMaterial042_cell017.geometry} material={nodes.defaultMaterial042_cell017.material} position={[0.76, 1.51, 5.13]} rotation={[-0.69, -0.22, -0.18]} />
        <group name="defaultMaterial042_cell020" position={[0.76, 1.51, 5.13]} rotation={[2.03, -0.45, 2.38]}>
          <mesh name="defaultMaterial042_cell023_1" geometry={nodes.defaultMaterial042_cell023_1.geometry} material={nodes.defaultMaterial042_cell023_1.material} />
          <mesh name="defaultMaterial042_cell023_2" geometry={nodes.defaultMaterial042_cell023_2.geometry} material={nodes.defaultMaterial042_cell023_2.material} />
        </group>
        <group name="defaultMaterial042_cell023" position={[0.76, 1.51, 5.13]} rotation={[-0.43, -1.1, 1]}>
          <mesh name="defaultMaterial042_cell024_1" geometry={nodes.defaultMaterial042_cell024_1.geometry} material={nodes.defaultMaterial042_cell024_1.material} />
          <mesh name="defaultMaterial042_cell024_2" geometry={nodes.defaultMaterial042_cell024_2.geometry} material={nodes.defaultMaterial042_cell024_2.material} />
        </group>
        <mesh name="defaultMaterial042_cell024" geometry={nodes.defaultMaterial042_cell024.geometry} material={nodes.defaultMaterial042_cell024.material} position={[0.76, 1.51, 5.13]} rotation={[-0.03, -0.54, -2.68]} />
        <mesh name="defaultMaterial042_cell025" geometry={nodes.defaultMaterial042_cell025.geometry} material={nodes.defaultMaterial042_cell025.material} position={[0.76, 1.51, 5.13]} rotation={[-2.95, 0.17, 2.14]} />
        <mesh name="defaultMaterial042_cell027" geometry={nodes.defaultMaterial042_cell027.geometry} material={nodes.defaultMaterial042_cell027.material} position={[0.76, 1.51, 5.13]} rotation={[-2.73, -1.41, -2.89]} />
        <group name="defaultMaterial041_cell064" position={[3.09, 0.17, 5.85]} rotation={[-1.03, -0.79, -2.53]}>
          <mesh name="defaultMaterial041_cell127" geometry={nodes.defaultMaterial041_cell127.geometry} material={nodes.defaultMaterial041_cell127.material} />
          <mesh name="defaultMaterial041_cell127_1" geometry={nodes.defaultMaterial041_cell127_1.geometry} material={nodes.defaultMaterial041_cell127_1.material} />
        </group>
        <group name="defaultMaterial041_cell065" position={[3.09, 0.17, 5.85]} rotation={[0.93, -1.22, -1.78]}>
          <mesh name="defaultMaterial041_cell128" geometry={nodes.defaultMaterial041_cell128.geometry} material={nodes.defaultMaterial041_cell128.material} />
          <mesh name="defaultMaterial041_cell128_1" geometry={nodes.defaultMaterial041_cell128_1.geometry} material={nodes.defaultMaterial041_cell128_1.material} />
        </group>
        <group name="defaultMaterial041_cell069" position={[3.09, 0.17, 5.85]} rotation={[-2, 0.43, -0.16]}>
          <mesh name="defaultMaterial041_cell100" geometry={nodes.defaultMaterial041_cell100.geometry} material={nodes.defaultMaterial041_cell100.material} />
          <mesh name="defaultMaterial041_cell100_1" geometry={nodes.defaultMaterial041_cell100_1.geometry} material={nodes.defaultMaterial041_cell100_1.material} />
        </group>
        <group name="defaultMaterial041_cell076" position={[3.09, 0.17, 5.85]} rotation={[-1.92, -1.03, 2.05]}>
          <mesh name="defaultMaterial041_cell101" geometry={nodes.defaultMaterial041_cell101.geometry} material={nodes.defaultMaterial041_cell101.material} />
          <mesh name="defaultMaterial041_cell101_1" geometry={nodes.defaultMaterial041_cell101_1.geometry} material={nodes.defaultMaterial041_cell101_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell077" geometry={nodes.defaultMaterial041_cell077.geometry} material={nodes.defaultMaterial041_cell077.material} position={[3.09, 0.17, 5.85]} rotation={[-2.53, 0.28, -1.08]} />
        <mesh name="defaultMaterial041_cell078" geometry={nodes.defaultMaterial041_cell078.geometry} material={nodes.defaultMaterial041_cell078.material} position={[3.09, 0.17, 5.85]} rotation={[-1.49, -0.73, 2.48]} />
        <group name="defaultMaterial041_cell082" position={[3.09, 0.17, 5.85]} rotation={[-2.39, -0.87, 2.64]}>
          <mesh name="defaultMaterial041_cell105" geometry={nodes.defaultMaterial041_cell105.geometry} material={nodes.defaultMaterial041_cell105.material} />
          <mesh name="defaultMaterial041_cell105_1" geometry={nodes.defaultMaterial041_cell105_1.geometry} material={nodes.defaultMaterial041_cell105_1.material} />
        </group>
        <mesh name="defaultMaterial041_cell090" geometry={nodes.defaultMaterial041_cell090.geometry} material={nodes.defaultMaterial041_cell090.material} position={[3.09, 0.17, 5.85]} rotation={[1.57, 0.86, 1.99]} />
        <group name="defaultMaterial041_cell099" position={[3.09, 0.17, 5.85]} rotation={[-0.73, 1.24, 0.37]}>
          <mesh name="defaultMaterial041_cell107_1" geometry={nodes.defaultMaterial041_cell107_1.geometry} material={nodes.defaultMaterial041_cell107_1.material} />
          <mesh name="defaultMaterial041_cell107_2" geometry={nodes.defaultMaterial041_cell107_2.geometry} material={nodes.defaultMaterial041_cell107_2.material} />
        </group>
        <group name="defaultMaterial041_cell106" position={[3.09, 0.17, 5.85]} rotation={[-2.44, 0.04, -2.75]}>
          <mesh name="defaultMaterial041_cell108" geometry={nodes.defaultMaterial041_cell108.geometry} material={nodes.defaultMaterial041_cell108.material} />
          <mesh name="defaultMaterial041_cell108_1" geometry={nodes.defaultMaterial041_cell108_1.geometry} material={nodes.defaultMaterial041_cell108_1.material} />
        </group>
        <group name="defaultMaterial041_cell107" position={[3.09, 0.17, 5.85]} rotation={[0.77, 0.12, 0.12]}>
          <mesh name="defaultMaterial041_cell109_1" geometry={nodes.defaultMaterial041_cell109_1.geometry} material={nodes.defaultMaterial041_cell109_1.material} />
          <mesh name="defaultMaterial041_cell109_2" geometry={nodes.defaultMaterial041_cell109_2.geometry} material={nodes.defaultMaterial041_cell109_2.material} />
        </group>
        <mesh name="defaultMaterial041_cell109" geometry={nodes.defaultMaterial041_cell109.geometry} material={nodes.defaultMaterial041_cell109.material} position={[3.09, 0.17, 5.85]} rotation={[1.9, 1.34, -1.01]} />
        <mesh name="defaultMaterial041_cell111" geometry={nodes.defaultMaterial041_cell111.geometry} material={nodes.defaultMaterial041_cell111.material} position={[3.09, 0.17, 5.85]} rotation={[1.57, 0.59, -1.35]} />
        <group name="defaultMaterial041_cell071" position={[3.09, 0.17, 5.85]} rotation={[0.81, 1.13, 2.56]}>
          <mesh name="defaultMaterial041_cell112" geometry={nodes.defaultMaterial041_cell112.geometry} material={nodes.defaultMaterial041_cell112.material} />
          <mesh name="defaultMaterial041_cell112_1" geometry={nodes.defaultMaterial041_cell112_1.geometry} material={nodes.defaultMaterial041_cell112_1.material} />
        </group>
        <group name="defaultMaterial041_cell074" position={[3.09, 0.17, 5.85]} rotation={[-0.94, -1, 0.32]}>
          <mesh name="defaultMaterial041_cell113" geometry={nodes.defaultMaterial041_cell113.geometry} material={nodes.defaultMaterial041_cell113.material} />
          <mesh name="defaultMaterial041_cell113_1" geometry={nodes.defaultMaterial041_cell113_1.geometry} material={nodes.defaultMaterial041_cell113_1.material} />
        </group>
        <group name="defaultMaterial041_cell081" position={[3.09, 0.17, 5.85]} rotation={[-2.05, -0.1, 1.3]}>
          <mesh name="defaultMaterial041_cell114" geometry={nodes.defaultMaterial041_cell114.geometry} material={nodes.defaultMaterial041_cell114.material} />
          <mesh name="defaultMaterial041_cell114_1" geometry={nodes.defaultMaterial041_cell114_1.geometry} material={nodes.defaultMaterial041_cell114_1.material} />
        </group>
        <group name="defaultMaterial041_cell083" position={[3.09, 0.17, 5.85]} rotation={[-2.29, -0.4, -0.4]}>
          <mesh name="defaultMaterial041_cell115" geometry={nodes.defaultMaterial041_cell115.geometry} material={nodes.defaultMaterial041_cell115.material} />
          <mesh name="defaultMaterial041_cell115_1" geometry={nodes.defaultMaterial041_cell115_1.geometry} material={nodes.defaultMaterial041_cell115_1.material} />
        </group>
        <group name="defaultMaterial041_cell084" position={[3.09, 0.17, 5.85]} rotation={[-3.14, 0.28, -0.52]}>
          <mesh name="defaultMaterial041_cell116" geometry={nodes.defaultMaterial041_cell116.geometry} material={nodes.defaultMaterial041_cell116.material} />
          <mesh name="defaultMaterial041_cell116_1" geometry={nodes.defaultMaterial041_cell116_1.geometry} material={nodes.defaultMaterial041_cell116_1.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/chess.glb')