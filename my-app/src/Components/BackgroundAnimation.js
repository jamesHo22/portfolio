import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import planeModel from "../Media/SR-71_Blackbird.STL";

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

    scene.add(camera);
    camera.position.z = 20;
    // camera.rotateY((90 * Math.PI) / 180);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create a buffer geometry for the paper plane
    const sphereGeometry = new THREE.BoxGeometry(1, 5, 1);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      wireframe: false,
    });

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const loader = new STLLoader();

    loader.load(
      planeModel,
      function (geometry) {
        const mesh = new THREE.Mesh(geometry, sphereMaterial);
        mesh.geometry.scale(0.05, 0.05, 0.05);
        mesh.rotation.y = (90 * Math.PI) / 180;
        mesh.rotation.x = (90 * Math.PI) / 180;
        mesh.rotation.z = (180 * Math.PI) / 180;
        sphere = mesh;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    let xPrev = 0;
    let yPrev = 0;
    let xNext = 0;
    let yNext = 0;

    const pointer = new THREE.Vector2();

    function onDocumentMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      pointer.x = (mouseX / window.innerWidth) * 2 - 1;
      pointer.y = -(mouseY / window.innerHeight) * 2 + 1;
    }

    function getDeltaXY(mouseX, mouseY, xPrev, yPrev) {
      const sphereX = sphere.position.x;
      const sphereY = sphere.position.y;
      const gain = 15;
      const cgX = gain * mouseX;
      const cgY = gain * mouseY;

      const xDist = cgX - sphereX;
      const yDist = cgY - sphereY;

      const m = 1; // mass
      const b = 50; // damping
      const k = 1; // spring
      const dt = 1; // time interval

      const Fx = k * xDist;
      const Fy = k * yDist;

      //   solved equation here: http://hplgit.github.io/num-methods-for-PDEs/doc/pub/vib/html/._vib003.html
      const xNext =
        (2 * m * sphereX + ((b * dt) / 2 - m) * xPrev + dt ** 2 * Fx) *
        ((m + b * dt) / 2) ** -1;

      const yNext =
        (2 * m * sphereY + ((b * dt) / 2 - m) * yPrev + dt ** 2 * Fy) *
        ((m + b * dt) / 2) ** -1;

      xPrev = sphereX;
      yPrev = sphereY;

      return [xNext, yNext, xPrev, yPrev];
    }

    document.addEventListener("mousemove", onDocumentMouseMove);
    let t = 0;
    // Animate the paper plane
    function animate() {
      requestAnimationFrame(animate);
      t += 0.03;

      // Rotate the paper plane
      sphere.position.z = Math.sin(t);
      sphere.rotation.y += 0.01;

      [xNext, yNext, xPrev, yPrev] = getDeltaXY(
        pointer.x,
        pointer.y,
        xPrev,
        yPrev
      );
      //   console.log(xNext);

      sphere.position.x = xNext;
      sphere.position.y = yNext;

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
