import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { Material, BufferGeometry } from 'three';
import io from 'socket.io-client';

type WhitePawnSixProps = {
  material: Material | Material[];
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  actions: any;
};

const WhitePawnSix = ({ material, position, geometry, actions, ...props }: WhitePawnSixProps & any) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [isSelected, setSelected] = useState(false);
  const [socketRef, setSocketRef] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    const socket = io.connect('http://localhost:5000');
    setSocketRef(socket);

    socket.on('setHeaders', (headers: any) => {
      const transport = socket.io as any;
      if (transport && transport.engine && transport.engine.transport) {
        transport.engine.transport.opts.headers = headers;
      }
    });
    return () => {
      socket.disconnect();
    }
  }, []);

  const handlePointerMove = (event: ThreeEvent<MouseEvent>) => {
    if (socketRef) {
      const intersection = event.intersections[0];
      if (intersection) {
        // Move the mesh along the x-axis by 50px
        intersection.object.position.z += -2;

        // Emit a "move" event with the new position
        const { x, y, z } = intersection.object.position;
        const newPosition = new THREE.Vector3(x, y, z);
        socketRef.emit('move', newPosition.toArray());

        // Play the animation once and stop
      
      }
    }
  };

  useEffect(() => {
    if (socketRef) {
      socketRef.on('move', (data: any) => {
        console.log('Received move event:', data);

        // Update the position of the mesh
        const [x, y, z] = data;
        const newPosition = new THREE.Vector3(x, y, z);
        mesh.current?.position.copy(newPosition);
      });
    }
  }, [socketRef]);

  return (
    <group onClick={handlePointerMove}>
      <mesh ref={mesh} position={props.position} material={props.material} geometry={geometry} />
    </group>
  );
};

export default WhitePawnSix;