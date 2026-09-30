import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import LogoMode from "../assets/3d/Logo.glb";
import * as THREE from "three";

//型別宣告
type Vector3D = [number, number, number];

interface LogoProps {
  scale?: number | Vector3D;
  position?: Vector3D;
  rotation?: Vector3D;
}

//LOGO組件
const Logo = ({ scale, position }: LogoProps) => {
  const logoRef = useRef<THREE.Group>(null);

  const { scene, animations } = useGLTF(LogoMode);
  const { actions } = useAnimations(animations, logoRef);

  useEffect(() => {
    actions["Idle"]?.reset().fadeIn(0.3).play();
  }, [actions]);

  return (
    <group
      ref={logoRef}
      scale={scale}
      position={position}
      rotation={[-0.3, 0, 3]}
    >
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(LogoMode);

// ==下方畫布==
const LogoCanvas = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState<Vector3D>([2, 2, 2]);
  const [position, setPosition] = useState<Vector3D>([0.2, -0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setRotationX(scrollTop * -0.0006);
      setRotationY(scrollTop * -0.00075);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([3, 3, 3]);
        setPosition([0, -0.5, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([3.2, 3.2, 3.2]);
        setPosition([0, -0.7, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([3.8, 3.8, 3.8]);
        setPosition([0, -0.8, 0]);
      } else {
        setScale([4.5, 4.5, 4.5]);
        setPosition([0, -1, 0]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      className=" w-full h-screen z-10 "
      camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <OrbitControls
        enableZoom={false} // 禁止滾輪縮放
        enablePan={false} // 禁止平移
        autoRotate={true} // 啟用自動緩慢旋轉
        autoRotateSpeed={1.7} // 自動旋轉速度
      />

      <Suspense fallback={null}>
        <Logo
          scale={scale}
          position={position}
          rotation={[-0.3 + rotationX, rotationY, 3]}
        />
      </Suspense>
    </Canvas>
  );
};

export default LogoCanvas;
