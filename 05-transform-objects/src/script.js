import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material)
const mesh3 = new THREE.Mesh(geometry, material)

//Position
// mesh.position.x = 0.7
// mesh.position.y = - 0.6
// mesh.position.z = 1
// ====
mesh.position.set(0.7, -0.6, 1)

//Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

//Rotation
//Half a rotation is PI
mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.z = 0.5
mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.25, 0)


const group = new THREE.Group();
scene.add(group)

group.add(mesh)
group.add(mesh2)
group.add(mesh3)

/**
 * Sizes
 */
const sizes = {
	width: 800,
	height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


console.log(mesh.position)
console.log(mesh.position.length())
console.log(mesh.position.distanceTo(camera.position));

//Take the vector length and reduce the vector until the length is 1
// mesh.position.normalize()
// console.log(mesh.position.length())

// camera.lookAt(new THREE.Vector3(0, -1, 0))
camera.lookAt(mesh.position)


//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
