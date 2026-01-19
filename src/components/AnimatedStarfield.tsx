import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AnimatedStarfieldProps {
  color?: string;
  starCount?: number;
  speed?: number;
  className?: string;
}

const AnimatedStarfield = ({ 
  color = '#f97316', // accent color (orange)
  starCount = 150000,
  speed = 0.0005,
  className = ''
}: AnimatedStarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create scene and camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      canvas.offsetWidth / canvas.offsetHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;

    // Create starfield
    const starGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Convert hex color to number
    const starColor = parseInt(color.replace('#', ''), 16);
    const starMaterial = new THREE.PointsMaterial({ 
      size: 0.008, 
      color: starColor,
      transparent: true,
      opacity: 1.0,
      sizeAttenuation: true
    });
    
    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);

    // Handle resize
    const handleResize = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      starMesh.rotation.y += speed;
      renderer.render(scene, camera);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, [color, starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedStarfield;
