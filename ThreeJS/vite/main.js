import * as THREE from 'three'

const canvas = document.getElementById('canvas');

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//2. Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000);
camera.position.z = 5;

//3. Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial('#2067e4')
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxmaterial = new THREE.MeshBasicMaterial('#B4B4B3');
const box = new THREE.Mesh(boxGeometry, material);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

//4. Light

const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

//5. Renderer
const renderer = new THREE.WebGLRenderer(canvas);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene,camera);