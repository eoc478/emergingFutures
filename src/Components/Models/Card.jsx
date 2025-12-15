import React , { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
// import card1 from "/assets/cards/packet1/EFcard_p1c1.png";
// import card2 from "/assets/cards/packet1/EFcard_p1c2.png";
// import card3 from "/assets/cards/packet1/EFcard_p1c3.png";
// import card4 from "/assets/cards/packet1/EFcard_p1c4.png";
// import card5 from "/assets/cards/packet1/EFcard_p1c5.png";
// import card6 from "/assets/cards/packet1/EFcard_p1c6.png";
// import card7 from "/assets/cards/packet1/EFcard_p1c7.png";
import cardData from '../../data/cards.json';


export default function Card({packetTier} ){
    const mountRef = useRef(null); //will be used to place 3js scene

    useEffect(() => {
        const mount = mountRef.current;

        //--------------------load textures--------------------
        // const cardTextures = [
        //     card1,
        //     card2,
        //     card3,
        //     card4,
        //     card5,
        //     card6,
        //     card7,
        // ];

        const packet = cardData.packets.find(
        (p) => p.tier === packetTier
        );

        // fallback safety, brings back to existential packet
        const cards = packet?.cards ?? cardData.packets[5].cards;

        const randomCard =
            // cardTextures[Math.floor(Math.random() * cardTextures.length)];
            cards[Math.floor(Math.random() * cards.length)];
        
        const jsonTexture = randomCard.image;

        const scene = new THREE.Scene();

        //-----------------------camera
        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.z = 60;

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


        //---------------------geometry and materials---------------------
        const uvTexture = new THREE.TextureLoader().load(jsonTexture);
        const geometry = new RoundedBoxGeometry(20, 30, .5, 2, 5);
        const material = new THREE.MeshStandardMaterial( { map: uvTexture } );
        const cube = new THREE.Mesh( geometry, material );

        uvTexture.colorSpace = THREE.SRGBColorSpace;
        scene.background = new THREE.Color(0, 0, 0);
        scene.add( cube );

        //---------------------animation---------------------
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
    }, [packetTier]);
    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
}