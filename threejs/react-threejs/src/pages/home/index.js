import React, { useEffect } from "react";
import * as THREE from "three";
// import { MeshLine, MeshLineMaterial } from "three.meshline";
import { Geometry } from "three/examples/jsm/deprecated/Geometry.js";

const {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry,
    AxesHelper,
} = THREE;

function Home() {
    useEffect(() => {
        let geometries = [];
        let geometry = new Geometry();
        // const geometry = new THREE.BufferGeometry();
        const points = [];
        for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 100) {
            const v = new THREE.Vector3(Math.cos(j), Math.sin(j), 0);
            geometry.vertices.push(v);
        }
        // geometry.setFromPoints(points);

        console.log(geometry);
        // let line = new MeshLine();
        // // line.setPoints(points);
        // line.setGeometry(geometry);
        // geometries.push(line.geometry);
        console.log(geometries);
    }, []);

    useEffect(() => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("home-gl").appendChild(renderer.domElement);

        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0xffff00 });
        const cube = new Mesh(geometry, material);
        scene.add(cube);

        var axes = new AxesHelper(50);
        scene.add(axes);
        camera.position.x = -30;
        camera.position.y = 45;
        camera.position.z = 35;
        camera.lookAt(scene.position);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();

    }, []);

    return (
        <div style={{ padding: 20 }} id="home">
            <h2>Home View</h2>
            <p>在React中使用React Router v6 的指南</p>
            <div id="home-gl"></div>
        </div>
    );
}

export default Home;
