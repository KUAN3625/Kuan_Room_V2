import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import LogoMode from "../assets/3d/Logo.glb";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

type Vector3D = [number, number, number];

interface LogoProps {
  modelPath: string; // 新增：可由外部指定 .glb 路徑
  scale?: number | Vector3D;
  position?: Vector3D;
  rotation?: Vector3D;
}

const Logo = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [-0.3, 0, 3],
}: LogoProps) => {
  const logoRef = useRef<THREE.Group>(null);

  // 動態載入傳入的 modelPath
  const { scene, animations } = useGLTF(modelPath);

  // 複製 Scene 防止多個 Canvas 搶奪同一物件
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { actions } = useAnimations(animations, logoRef);

  useEffect(() => {
    // 若新模型帶有動畫，預設播放第一個動畫
    if (actions && Object.keys(actions).length > 0) {
      const firstActionName = Object.keys(actions)[0];
      actions[firstActionName]?.reset().fadeIn(0.3).play();
    }
  }, [actions]);

  return (
    <group ref={logoRef} scale={scale} position={position} rotation={rotation}>
      <primitive object={clonedScene} />
    </group>
  );
};

interface LogoCanvasProps {
  modelPath?: string; // 可選，不傳則預設使用 LogoMode
  scale?: Vector3D;
  position?: Vector3D;
  className?: string;
  autoRotateSpeed?: number;
}

const LogoCanvas = ({
  modelPath = LogoMode, // 預設使用原本的 Logo.glb
  scale = [2.5, 2.5, 2.5],
  position = [0, 0, 0],
  className = "w-full h-full",
  autoRotateSpeed = 5,
}: LogoCanvasProps) => {
  return (
    <Canvas
      className={className}
      camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        enableRotate={false}
        autoRotateSpeed={autoRotateSpeed}
      />

      <Suspense fallback={null}>
        <Logo modelPath={modelPath} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default LogoCanvas;
