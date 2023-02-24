import React from "react";
import * as THREE from "three";

export default class ThreeComponent extends React.Component {
    mount;
    camera;
    scene;
    renderer;

    componentDidMount() {
        this.init();
        this.renders();
    }

    init = () => {
        // 相机
        this.camera = new THREE.PerspectiveCamera(
            30,
            this.mount.clientWidth / this.mount.clientHeight,
            1,
            2500
        );
        this.camera.position.set(500, 800, 1300);
        this.camera.lookAt(30, 0, 0);
        // 场景
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setClearColor(0xeeeeee, 0.0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
        this.mount.appendChild(this.renderer.domElement);
        window.addEventListener("resize", () => this.onWindowResize.bind(this));
    };

    onWindowResize = () => {
        this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);

        this.renders();
    };

    renders = () => {
        this.renderer.render(this.scene, this.camera);
    };

    render() {
        return (
            <div
                id="canvas-webgl"
                style={{ width: "100%", height: "100%" }}
                ref={(mount) => {
                    this.mount = mount;
                }}
            />
        );
    }
}
