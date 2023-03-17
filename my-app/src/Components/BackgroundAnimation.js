import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function BackgroundAnimation() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create a buffer geometry for the paper plane
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0,
      0,
      0, // vertex 0
      1,
      0,
      0, // vertex 1
      0,
      0.5,
      0, // vertex 2
      0,
      0,
      -1, // vertex 3
      0,
      -0.5,
      0, // vertex 4
      -1,
      0,
      0, // vertex 5
    ]);
    const indices = new Uint16Array([
      0,
      1,
      2, // front
      0,
      2,
      3, // right
      0,
      3,
      4, // bottom
      0,
      4,
      5, // back
      0,
      5,
      1, // left
      1,
      2,
      5, // top left
      2,
      3,
      5, // top right
      3,
      4,
      5, // bottom right
      4,
      1,
      5, // bottom left
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.computeVertexNormals();

    // Create a material for the paper plane
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

    // Create a mesh from the geometry and material
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Animate the paper plane
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the paper plane
      plane.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    // Clean up
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="canvas-container" ref={containerRef} />;
}

export default BackgroundAnimation;
