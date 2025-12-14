import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import packet from "/models/packet1.gltf?url";
import uvText from "/assets/uvtexture.png";
import mog from "/assets/kingofthepond.jpg";

//i had to use chatGPT for this omg nothing would load this 3d model or the material
export default function Packet({packetTier}) {
    const mountRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        camera.position.set(0, 0, 5);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Lights
        scene.add(new THREE.AmbientLight(0xffffff, 1));
        const dl = new THREE.DirectionalLight(0xffffff, 1);
        dl.position.set(5, 5, 5);
        scene.add(dl);

        // Load Texture
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(mog, 
            // onLoad callback
            () => {
                console.log('Texture loaded successfully');
            },
            // onProgress callback
            undefined,
            // onError callback
            (error) => {
                console.error('Error loading texture:', error);
            }
        );

        texture.flipY = false; // GLTF models usually need this
        texture.colorSpace = THREE.SRGBColorSpace; // For correct color representation
        texture.wrapS = THREE.RepeatWrapping; // Uncomment if you need wrapping
        texture.wrapT = THREE.RepeatWrapping;

        // Load GLTF
        const loader = new GLTFLoader();
        loader.load(packet, (gltf) => {
            const model = gltf.scene;
            modelRef.current = model;
            scene.add(model);

            model.scale.set(1, 1, 1);

            model.traverse((obj) => {
                if (obj.isMesh) {
                    obj.material.side = THREE.DoubleSide;
                }
            });

            // Apply texture to all meshes
            model.traverse((obj) => {
                if (obj.isMesh) {
                    obj.material.side = THREE.DoubleSide;
                    
                    // Apply the UV texture
                    obj.material.map = texture;
                    obj.material.needsUpdate = true; // Important: tell Three.js to update the material
                }
            });

            // Auto-fit camera
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            camera.position.copy(center);
            camera.position.z += size.length();
            camera.lookAt(center);

        });

        const animate = () => {
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01;
            }
            
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [packetTier]);

    return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}