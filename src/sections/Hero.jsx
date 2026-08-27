import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import HeroText from "../components/HeroText"
import ParallxBackground from "../components/ParallxBackground"
import { ITModel } from "../components/ITModel"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"


const Hero = () => {
const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        <ParallxBackground/>
        <figure className="absolute inset-y-0 right-0 w-full md:w-[70vw]"
        style={{
          height: "100vh"
        }}>

          <Canvas camera={{position:[3,1,3]}}>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={1.5} />
              <Environment preset="city" />
              <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
                <ITModel
                  scale={isMobile ? 0.02 : 0.025} 
                  position={isMobile ? [0, -0.5, 0] : [1.5, -0.2, 0]}                   
                  rotation={[0.1, -Math.PI / 20.5, 0]}                 />
              </Float>
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>

        </figure>
    </section>

  )
}

export default Hero
