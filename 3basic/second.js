//canvas
const canvas = document.querySelector(".second")
// scene
const scene = new THREE.Scene()

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "red" })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// window size
const sizes = {
  width: 400,
  height: 300,
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
camera.position.x = 1
scene.add(camera)

// renderer

const renderer = new THREE.WebGLRenderer({
  canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)