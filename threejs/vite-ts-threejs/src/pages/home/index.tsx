import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    BoxGeometry,
    Mesh,
    MeshNormalMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";

function Home() {
    let navigate = useNavigate();
    const canvasRef = useRef(null);
    const [renderer, setRenderer] = useState<WebGLRenderer>();

    const gotoBlog = () => {
        navigate("/about");
    };

    useEffect(() => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log("canvas::", canvas);
        const renderer: WebGLRenderer = new WebGLRenderer({ canvas });
        // setRenderer(rendererNew);

        const geometry = new BoxGeometry();
        const material = new MeshNormalMaterial();
        const cube = new Mesh(geometry, material);
        scene.add(cube);

        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();

        camera.position.z = 5;
        console.log("useEffect::");
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Home;
