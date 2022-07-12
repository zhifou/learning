import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import './style.css';

const {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry,
    MeshNormalMaterial,
    AxesHelper,
} = THREE;

console.log('当前使用的three.js版本：', window.__THREE__);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <div id="info">Description</div>
  <div id="three-webgl"></div>
`;

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
renderer.setSize(960, 800);
document.getElementById('three-webgl').appendChild(renderer.domElement);

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({
    color: 0xff2299,
});
const cube = new Mesh(geometry, material);
// scene.add(cube);

const axes = new AxesHelper(50);
scene.add(axes);
camera.position.x = -30;
camera.position.y = 45;
camera.position.z = 35;
camera.lookAt(scene.position);

cube.rotation.x += 0.8;
cube.rotation.y += 0.8;

// const controls = new OrbitControls(camera, renderer.domElement);

const points = [];
points.push(new THREE.Vector3(-100, 0, 0));
points.push(new THREE.Vector3(0, 100, 0));
points.push(new THREE.Vector3(100, 0, 0));
//create a blue LineBasicMaterial
const material1 = new THREE.LineBasicMaterial({ color: 0x0000ff });
const geometry1 = new THREE.BufferGeometry().setFromPoints(points);
const line1 = new THREE.Line(geometry1, material1);
// scene.add(line1);

const textLoad = new FontLoader().load('fonts/helvetiker_regular.typeface.json', function (font) {
    console.log('hello world', font);
    const txtGeo = new TextGeometry('hello world', {
        font: font,
        size: 0.8,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelSegments: 3,
    });
    const txtMater = new MeshNormalMaterial({
        flatShading: THREE.FlatShading,
        transparent: true,
        opacity: 0.9,
    });
    const txtMesh = new Mesh(txtGeo, txtMater);
    txtMesh.position.set(200, 200, 200);
    // scene.add(txtMesh);
});

const loader = new GLTFLoader();

loader.load(
    'models/glbxz.com-stlbd0006/glbxz.com-stlbd0006.gltf',
    function (gltf) {
        console.log('gltf::', gltf);
        // scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

const MAX_POINTS = 500;

// geometry
const geometry2 = new THREE.BufferGeometry();

// attributes
const positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
geometry2.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

// draw range
const drawCount = 2; // draw the first 2 points, only
geometry2.setDrawRange( 0, drawCount );

// material
const material2 = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// line
const line2 = new THREE.Line( geometry2, material2 );
scene.add( line2 );

renderer.render(scene, camera);
