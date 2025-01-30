import { useGLTF, useTexture } from '@react-three/drei';

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');
  const monitortxt = useTexture('/textures/desk/screen.png');
  const screenTxt = useTexture('/textures/desk/screen.png');

  // Helper function to safely render a mesh
  const renderMesh = (geometry, material, children = null) => {
    if (!geometry || !material) {
      console.warn('Missing geometry or material:', { geometry, material });
      return null;
    }

    return (
      <mesh geometry={geometry} material={material}>
        {children}
      </mesh>
    );
  };

  return (
    <group {...props} dispose={null}>
      {renderMesh(nodes?.screen_screens_0?.geometry, materials?.screens, (
        <meshMatcapMaterial map={screenTxt} />
      ))}
      {renderMesh(nodes?.screen_glass_glass_0?.geometry, materials?.glass)}
      {renderMesh(nodes?.table_table_mat_0_1?.geometry, materials?.table_mat)}
      {renderMesh(nodes?.table_table_mat_0_2?.geometry, materials?.computer_mat, (
        <meshMatcapMaterial map={monitortxt} />
      ))}
      {renderMesh(nodes?.table_table_mat_0_3?.geometry, materials?.server_mat)}
      {renderMesh(nodes?.table_table_mat_0_4?.geometry, materials?.vhsPlayer_mat)}
      {renderMesh(nodes?.table_table_mat_0_5?.geometry, materials?.stand_mat)}
      {renderMesh(nodes?.table_table_mat_0_6?.geometry, materials?.mat_mat)}
      {renderMesh(nodes?.table_table_mat_0_7?.geometry, materials?.arm_mat)}
      {renderMesh(nodes?.table_table_mat_0_8?.geometry, materials?.tv_mat, (
        <meshMatcapMaterial map={monitortxt} />
      ))}
      {renderMesh(nodes?.table_table_mat_0_9?.geometry, materials?.cables_mat)}
      {renderMesh(nodes?.table_table_mat_0_10?.geometry, materials?.props_mat)}
      {renderMesh(nodes?.table_table_mat_0_11?.geometry, materials?.ground_mat)}
      {renderMesh(nodes?.table_table_mat_0_12?.geometry, materials?.key_mat)}
    </group>
  );
}

// Preload the GLTF file
useGLTF.preload('/models/hacker-room.glb');
