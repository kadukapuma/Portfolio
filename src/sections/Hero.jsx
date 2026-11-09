import { Canvas } from "@react-three/fiber"
import { Suspense, Component } from "react"
import HeroText from "../components/HeroText"
import ParallxBackground from "../components/ParallxBackground"
import { ITModel } from "../components/ITModel"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"

// If the 3D scene fails (WebGL lost, model/HDR fails to load), hide it instead of crashing the page
class CanvasErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() { return this.state.hasError ? null : this.props.children }
}

const Hero = () => {
const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText/>
        {/* Parallax background is desktop-only */}
        {!isMobile && <ParallxBackground/>}
        <figure className={`absolute inset-y-0 right-0 w-full md:w-[70vw] ${isMobile ? "pointer-events-none" : ""}`}
        style={{
          height: "100vh"
        }}>
          <CanvasErrorBoundary>
            <Canvas
              camera={{position:[3,1,8], fov: 40}}
              dpr={isMobile ? [1, 1.5] : [1, 2]}
              gl={{ antialias: !isMobile, powerPreference: isMobile ? "low-power" : "high-performance" }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={isMobile ? 1.5 : 1} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                {isMobile ? (
                  <hemisphereLight args={["#ffffff", "#444466", 1]} />
                ) : (
                  <Environment preset="city" />
                )}
                <Float speed={1} rotationIntensity={1.5} floatIntensity={1.5}>
                  <ITModel
                    scale={isMobile ? 0.02 : 0.025}
                    position={isMobile ? [0, -0.5, 0] : [1.5, -0.2, 0]}
                    rotation={[0.1, -Math.PI / 20.5, 0]}                 />
                </Float>
                {/* On mobile, OrbitControls would swallow touch and block page scrolling */}
                {!isMobile && <OrbitControls enableZoom={false} />}
              </Suspense>
            </Canvas>
          </CanvasErrorBoundary>
        </figure>
    </section>

  )
}

export default Hero
