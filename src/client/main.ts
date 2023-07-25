import * as THREE from 'three'
import { sizes, camera } from './camera'
import addLight from './lights'
import { addMeshes, addShader } from './addMeshes'
import { orbit, PARAMS } from './controls'
import { resize } from './eventListeners'
import './style.css'

// let renderer, scene
const renderer = new THREE.WebGLRenderer()
const scene = new THREE.Scene()

const meshes: { [key: string]: any } = {}
const lights: { [key: string]: any } = {}

init()
function init(): void {
	renderer.setSize(sizes.width, sizes.height)
	document.body.appendChild(renderer.domElement)
	meshes.default = addMeshes()
	meshes.shader = addShader()
	lights.default = addLight()
	scene.add(meshes.default)
	scene.add(meshes.shader)
	scene.add(lights.default)
	resize(camera, renderer, sizes)
	orbit(camera, renderer)
	animate()
}

function animate(): void {
	requestAnimationFrame(animate)
	meshes.shader.material.uniforms.uTime.value += 0.1
	meshes.shader.material.uniforms.displacementStrength.value =
		PARAMS.displacementStrength
	meshes.shader.rotation.y -= 0.01
	meshes.shader.rotation.z += 0.01
	// meshes.default.
	// console.log(PARAMS.size)
	meshes.default.scale.set(PARAMS.size.x, PARAMS.size.y, PARAMS.size.z)
	meshes.default.rotation.x += 0.01
	meshes.default.rotation.y += 0.01
	renderer.render(scene, camera)
}
