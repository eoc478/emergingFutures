import React , { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import uvText from "/assets/uvtexture.png";


export default function Card( {tier} ){
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

        //---------------------color---------------------
        const tierColors = [
            0xff5555, // tier 0 = red-ish
            0xffaa00, // tier 1 = orange/gold
            0xffff00, // tier 2 = yellow
            0x55ff55, // tier 3 = green
            0x5555ff, // tier 4 = blue
            0xaa00ff, // tier 5 = purple
        ];

        //---------------------geometry
        const uvTexture = new THREE.TextureLoader().load(uvText);
        const geometry = new RoundedBoxGeometry(20, 30, .5, 2, 5);
        const material = new THREE.MeshStandardMaterial( { map: uvTexture } );
        const cube = new THREE.Mesh( geometry, material );
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
    }, [tier]);
    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
}