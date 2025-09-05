import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidEtherProps {
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  dt?: number;
  BFECC?: boolean;
  resolution?: number;
  isBounce?: boolean;
  colors?: string[];
  style?: React.CSSProperties;
  className?: string;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = ['#8B4513', '#D2691E', '#F5E6D3'], // Coffee colors
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}: LiquidEtherProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    container.style.position = container.style.position || 'relative';
    container.style.overflow = container.style.overflow || 'hidden';

    // Initialize basic Three.js scene for demo
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create a simple animated geometry to simulate liquid effect
    const geometry = new THREE.PlaneGeometry(2, 2, 32, 32);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(colors[0]) },
        color2: { value: new THREE.Color(colors[1]) },
        color3: { value: new THREE.Color(colors[2]) }
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.z += sin(pos.x * 4.0 + time) * 0.1;
          pos.z += sin(pos.y * 6.0 + time * 0.5) * 0.05;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2; 
        uniform vec3 color3;
        varying vec2 vUv;
        void main() {
          float wave1 = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
          float wave2 = sin(vUv.y * 8.0 + time * 0.7) * 0.5 + 0.5;
          vec3 color = mix(color1, color2, wave1);
          color = mix(color, color3, wave2);
          float alpha = 0.3 + wave1 * wave2 * 0.4;
          gl_FragColor = vec4(color, alpha);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 1;

    function animate() {
      if (material.uniforms.time) {
        material.uniforms.time.value += 0.01;
      }
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [colors]);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full relative overflow-hidden pointer-events-none ${className || ''}`}
      style={style}
    />
  );
}