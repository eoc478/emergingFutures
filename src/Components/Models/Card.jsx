import React , { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import uvText from "/assets/cards/packet1/cards_03.png";


export default function Card( ){
    const mountRef = useRef(null); //will be used to place 3js scene

    useEffect(() => {
        const mount = mountRef.current;

        const scene = new THREE.Scene();

        //-----------------------camera
        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 80;

        //----------------------render----------------------
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement); //add 3js canvas to mount div

        //----------------------lighting----------------------
        const ambientLight = new THREE.AmbientLight(0xffffff, .5); //color, intensity
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        // White directional light at half intensity shining from the top.
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
        directionalLight.position.set(0, 50, 50);
        directionalLight.castShadow = true;
        scene.add( directionalLight );


        //---------------------geometry
        const uvTexture = new THREE.TextureLoader().load(uvText);
        const geometry = new RoundedBoxGeometry(20, 30, .5, 2, 5);
        const material = new THREE.MeshStandardMaterial( { map: uvTexture } );
        const cube = new THREE.Mesh( geometry, material );
        uvTexture.colorSpace = THREE.SRGBColorSpace;
        scene.add( cube );

        const animate = () => {
            // cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera); //take renderer, call in render function to render scene and camera
            requestAnimationFrame(animate); //fixed function, takes scene and run it every single frame
        };
        animate();

        // --- Handle Resize ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // window.addEventListener("click", () => {
        //     cube.material.color.set(Math.random() * 0xffffff);
        // });

        // --- Cleanup ---
        return () => {
            window.removeEventListener('resize', handleResize);
            mount.removeChild(renderer.domElement);
            // Dispose geometries/materials for memory cleanup
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);
    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
}