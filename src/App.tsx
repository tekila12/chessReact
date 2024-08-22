import React, { Suspense } from 'react';
import styles from "@/styles/Home.module.css";
import { Canvas, } from '@react-three/fiber'
import { Center, OrbitControls, Text3D, useProgress } from '@react-three/drei';
import ChessBoard from './components/ChessBoard';
import { LinearFilter, NearestFilter, TextureLoader } from 'three';





const texture = new TextureLoader().load('./chessbackground.jpg',)
const Loader = () => {
  const {progress} = useProgress()
  return <Center >
   
  </Center>
}

const App: React.FunctionComponent = () => {
  return (
    <Suspense>
        <div  style={{
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, white 50%, black 50%)",
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    margin: 0,
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
  }} >     
       
 <Canvas  camera={{ position: [0, 13, 7], }} dpr={[2, 5]}  >
 <Text3D
            font="/helvetiker_regular.typeface.json" // Replace with your font path
            size={0.6} // Adjust size
            height={0.2} // Thickness of the text
            curveSegments={12} // Smoothness of the text curves
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.05}
            position={[-15.5, 5, -4]} // Position of the text in the scene
            rotation={[0, Math.PI / 4, -0.5]}
          >
            3D Chess in Progress!
            <meshStandardMaterial attach="material" color="green"  />
          </Text3D>
        
        <directionalLight castShadow intensity={2} position={[20, 6, 6]} shadow-mapSize={[1024, 1024]}/>
      <ChessBoard receiveShadow castShadow/>
      <directionalLight castShadow intensity={-0.5} position={[-30, 0, 20]} shadow-mapSize={[1024, 1024]}/>
      <directionalLight castShadow intensity={1} position={[-30, 0, -15]} shadow-mapSize={[1024, 1024]}/>

        <OrbitControls  />
        </Canvas>
  
     
         </div>
    </Suspense>
  
  );
};

export default App;
