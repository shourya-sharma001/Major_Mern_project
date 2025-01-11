import * as THREE from 'three';

// 1. Create the scene.
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');


// 2. Add the camera. 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000); 
camera.position.z=5;

// 3. Create and add a cube object. 
const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'})

const cube =new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add lighting.
const light = new THREE.SpotLight(0x9CDBA6, 10 );
light.position.set(1,1,1);
scene.add(light);



// 5. Set up the Renderer.
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement)


// 6. Animate the scene 
function animate()
{
    requestAnimationFrame(animate);

    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    
    render.render(scene, camera);
}
animate();
