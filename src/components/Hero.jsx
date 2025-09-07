import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { CommunityModel } from "./CommunityModel"

export default function Hero() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <OrbitControls enableZoom={true} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Earth Model */}
        <CommunityModel />
      </Canvas>
    </div>
  )
}
