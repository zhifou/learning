import React, { useEffect } from "react";
import * as THREE from "three";
import { MeshLine, MeshLineMaterial } from "three.meshline";
// import { Geometry } from "three/examples/jsm/deprecated/Geometry.js";

function Home() {
    useEffect(() => {
        let geometries = [];
        let geometry = new THREE.Geometry();
        // const geometry = new THREE.BufferGeometry();
        const points = []
        for (let j = 0; j < Math.PI; j += 2 * Math.PI / 100) {
          const v = new THREE.Vector3(Math.cos(j), Math.sin(j), 0);
          geometry.vertices.push(v);
        }
        // geometry.setFromPoints(points);

        console.log(geometry);
        let line = new MeshLine();
        // // line.setPoints(points);
        line.setGeometry(geometry);
        geometries.push(line.geometry);
        console.log(geometries);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Home View</h2>
            <p>在React中使用React Router v6 的指南</p>
        </div>
    );
}

export default Home;
