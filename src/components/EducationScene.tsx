
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface EducationSceneProps {
  className?: string;
}

const EducationScene: React.FC<EducationSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf6f9fc);

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 15;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create educational objects
    // 1. Books
    const createBook = (x: number, y: number, z: number, color: string) => {
      const bookGeometry = new THREE.BoxGeometry(2, 3, 0.5);
      const bookMaterial = new THREE.MeshStandardMaterial({ 
        color: color,
        roughness: 0.7,
        metalness: 0.1
      });
      const book = new THREE.Mesh(bookGeometry, bookMaterial);
      book.position.set(x, y, z);
      book.rotation.z = Math.random() * 0.3 - 0.15;
      scene.add(book);
      objectsRef.current.push(book);
      return book;
    };

    // Create a stack of books
    createBook(-5, -1, 0, '#1A1F2C'); // dark blue
    createBook(-5, -0.4, 0.2, '#7E69AB'); // purple
    createBook(-5, 0.2, 0.3, '#F97316'); // orange

    // 2. Globe
    const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
    const globeMaterial = new THREE.MeshStandardMaterial({ 
      color: '#0EA5E9',
      roughness: 0.8,
      metalness: 0.1
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.position.set(0, 0, 0);
    scene.add(globe);
    objectsRef.current.push(globe);

    // Add grid lines to the globe to simulate latitude/longitude
    const gridHelper = new THREE.GridHelper(4, 10);
    gridHelper.rotation.x = Math.PI / 2;
    globe.add(gridHelper);

    // 3. Graduation Cap
    const capBaseGeometry = new THREE.BoxGeometry(2.5, 0.2, 2.5);
    const capBaseMaterial = new THREE.MeshStandardMaterial({ color: '#000000' });
    const capBase = new THREE.Mesh(capBaseGeometry, capBaseMaterial);
    capBase.position.set(5, 0, 0);
    scene.add(capBase);
    objectsRef.current.push(capBase);

    // Add the tassel
    const tasselGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
    const tasselMaterial = new THREE.MeshStandardMaterial({ color: '#D946EF' });
    const tassel = new THREE.Mesh(tasselGeometry, tasselMaterial);
    tassel.position.set(0.8, -0.6, 0);
    tassel.rotation.z = Math.PI / 4;
    capBase.add(tassel);

    // Add the cap top
    const capTopGeometry = new THREE.BoxGeometry(2.8, 0.1, 2.8);
    const capTop = new THREE.Mesh(capTopGeometry, capBaseMaterial);
    capTop.position.set(0, 0.2, 0);
    capBase.add(capTop);

    // Animation function
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      requestAnimationFrame(animate);

      // Animate the objects
      objectsRef.current.forEach((object, index) => {
        if (index === 0 || index === 1 || index === 2) {
          // Books slightly floating
          object.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
          object.rotation.z = Math.sin(Date.now() * 0.0005 + index) * 0.1;
        } else if (index === 3) {
          // Globe rotation
          object.rotation.y += 0.002;
        } else if (index === 4) {
          // Cap bobbing
          object.position.y = Math.sin(Date.now() * 0.001) * 0.2;
          object.rotation.z = Math.sin(Date.now() * 0.0005) * 0.05;
        }
      });

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !sceneRef.current) return;
      
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      objectsRef.current.forEach((object) => {
        object.rotation.y += deltaMove.x * 0.005;
        object.rotation.x += deltaMove.y * 0.005;
      });

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    containerRef.current.addEventListener('mousedown', handleMouseDown);
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseup', handleMouseUp);
    containerRef.current.addEventListener('mouseleave', handleMouseUp);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousedown', handleMouseDown);
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseup', handleMouseUp);
        containerRef.current.removeEventListener('mouseleave', handleMouseUp);
        
        if (rendererRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      
      // Dispose resources
      objectsRef.current.forEach(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-96 rounded-lg overflow-hidden shadow-xl ${className}`}
      style={{ touchAction: 'none' }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg max-w-xs">
          <h3 className="font-bold text-lg text-school-primary">Interactive 3D Scene</h3>
          <p className="text-sm text-gray-600">Click and drag to explore our educational universe!</p>
        </div>
      </div>
    </div>
  );
};

export default EducationScene;
