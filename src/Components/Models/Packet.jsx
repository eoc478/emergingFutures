import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import packet from "/models/scene.gltf?url";

//i had to use chatGPT for this omg nothing would load this 3d model
export default function Packet() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 1, 5);

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

        // Load GLTF
        const loader = new GLTFLoader();
        loader.load(packet, (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            model.scale.set(1, 1, 1);

            model.traverse((obj) => {
                if (obj.isMesh) {
                    obj.material.side = THREE.DoubleSide;
                }
            });

            // Auto-fit camera
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            camera.position.copy(center);
            camera.position.z += size.length();
            camera.lookAt(center);

            // const helper = new THREE.Box3Helper(box, 0xff0000);
            // scene.add(helper);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}