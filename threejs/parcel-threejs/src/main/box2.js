import * as THREE from "three";
import { Vector2 } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

console.log("THREE", THREE);

// 创建场景
const scene = new THREE.Scene();
// 创建摄像机(透视摄像机)
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// 将渲染器添加到dom节点中
document.getElementById('main-canvas').appendChild(renderer.domElement);
// // 创建一个立方几何体对象
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// // 给上材质(颜色)
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// // 创建一个网格(立方几何体)并添加到场景中
// const cube = new THREE.Mesh(geometry, material);
const box2 = new THREE.Box2(new Vector2(), new Vector2());
box2.setFromCenterAndSize({x: 10, y: 10}, {x: 200, y: 400})
console.log(box2)
scene.add(box2);

// 添加轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 给摄像机一个空间位置
camera.position.z = 5;

// 给上动画效果
function animate() {
    controls.update();
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// 监听画面变化（放置代码末尾）
window.addEventListener("resize", () => {
    const iwidth = window.innerWidth;
    const iheigt = window.innerHeight;
    //更新摄像头
    camera.aspect = iwidth / iheigt;
    // 更新摄像机投影矩阵
    camera.updateProjectionMatrix();
    // 更新渲染器
    renderer.setSize(iwidth, iheigt);
    // 设置渲染器像素比
    renderer.setPixelRatio(window.devicePixelRatio);
  });
