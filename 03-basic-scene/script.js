console.log(THREE);

const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);


const sizes = {
	width: 800,
	height: 600,
}

//Vertical vison angle (in degree) => fov
// Aspect ratio
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3
scene.add(camera);


// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas
})
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera)
