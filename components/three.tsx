// Example component using Three.js
import React, { useEffect } from 'react';
import * as THREE from 'three'; 

const ThreeCanvasComponent = () => {
  useEffect(() => {
    // Set up a scene
    const scene = new THREE.Scene();

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    // Add the cube to the scene
    scene.add(cube);

    // Set up a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up a renderer
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
    renderer.setSize(1280, 800);

    // Handle window resize
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Animate the cube
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="w-[100%] canvas bg-white" >

        <canvas
        className='overflow-hidden'
          data-engine="three.js r158"
          style={{ display: 'block', width: '100%', height: '500px', backgroundColor: "white", touchAction: 'none', overflow: "hidden" }}
        ></canvas>
    </div>
  );
};

export default ThreeCanvasComponent;
