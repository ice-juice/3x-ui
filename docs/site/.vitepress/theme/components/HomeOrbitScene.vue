<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let cleanupScene: (() => void) | undefined

onMounted(async () => {
  const canvas = canvasRef.value
  const host = canvas?.parentElement
  if (!canvas || !host) return

  const THREE = await import('three')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance'
  })

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
  camera.position.set(0, 0.25, 7)

  const group = new THREE.Group()
  scene.add(group)

  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0x22d3ee,
    emissive: 0x063747,
    emissiveIntensity: 0.6,
    metalness: 0.72,
    roughness: 0.2
  })
  const core = new THREE.Mesh(new THREE.TorusKnotGeometry(1.04, 0.2, 180, 14), coreMaterial)
  group.add(core)

  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.35, 1),
    new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    })
  )
  group.add(shell)

  const rings = [
    { radius: 2.72, tube: 0.008, color: 0x14b8a6, rotation: [0.7, 0.2, 0.1] },
    { radius: 3.15, tube: 0.006, color: 0xf59e0b, rotation: [1.28, 0.4, 0.75] },
    { radius: 3.58, tube: 0.005, color: 0x60a5fa, rotation: [0.28, 1.28, 0.28] }
  ] as const

  for (const ring of rings) {
    const mesh = new THREE.Mesh(
      new THREE.TorusGeometry(ring.radius, ring.tube, 8, 180),
      new THREE.MeshBasicMaterial({
        color: ring.color,
        transparent: true,
        opacity: 0.48
      })
    )
    mesh.rotation.set(ring.rotation[0], ring.rotation[1], ring.rotation[2])
    group.add(mesh)
  }

  const pointCount = 360
  const positions = new Float32Array(pointCount * 3)
  for (let i = 0; i < pointCount; i += 1) {
    const angle = i * 0.27
    const band = (i % 18) / 18
    const radius = 1.9 + band * 2.05
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = Math.sin(i * 0.19) * 1.12
    positions[i * 3 + 2] = Math.sin(angle) * radius
  }

  const pointGeometry = new THREE.BufferGeometry()
  pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const points = new THREE.Points(
    pointGeometry,
    new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.035,
      transparent: true,
      opacity: 0.78
    })
  )
  group.add(points)

  const lightA = new THREE.PointLight(0x67e8f9, 12, 11)
  lightA.position.set(-3.6, 3.2, 4)
  scene.add(lightA)

  const lightB = new THREE.PointLight(0xfbbf24, 5, 10)
  lightB.position.set(4, -1.2, 3.5)
  scene.add(lightB)

  const ambient = new THREE.AmbientLight(0xffffff, 1.4)
  scene.add(ambient)

  let frameId = 0

  function resize() {
    const { width, height } = host.getBoundingClientRect()
    const nextWidth = Math.max(320, Math.floor(width))
    const nextHeight = Math.max(260, Math.floor(height))
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setSize(nextWidth, nextHeight, false)
    camera.aspect = nextWidth / nextHeight
    camera.updateProjectionMatrix()
  }

  function render(time = 0) {
    const tick = time * 0.001
    group.rotation.y = tick * 0.26
    group.rotation.x = Math.sin(tick * 0.48) * 0.12
    core.rotation.y = tick * 0.72
    core.rotation.z = tick * 0.18
    shell.rotation.x = tick * 0.16
    shell.rotation.z = -tick * 0.12
    points.rotation.y = -tick * 0.13
    points.rotation.x = Math.sin(tick * 0.36) * 0.08
    renderer.render(scene, camera)

    if (!reducedMotion) {
      frameId = window.requestAnimationFrame(render)
    }
  }

  resize()
  render()

  if (!reducedMotion) {
    frameId = window.requestAnimationFrame(render)
  }
  window.addEventListener('resize', resize)

  cleanupScene = () => {
    window.cancelAnimationFrame(frameId)
    window.removeEventListener('resize', resize)
    renderer.dispose()
    core.geometry.dispose()
    coreMaterial.dispose()
    shell.geometry.dispose()
    shell.material.dispose()
    pointGeometry.dispose()
    points.material.dispose()
    scene.clear()
  }
})

onBeforeUnmount(() => {
  cleanupScene?.()
})
</script>

<template>
  <section class="home-orbit-scene" aria-label="Animated 3D control plane visualization">
    <div class="scene-hud scene-hud-left">
      <strong>REALITY</strong>
      <span>VLESS / TCP / Vision</span>
    </div>
    <canvas ref="canvasRef" class="home-orbit-canvas"></canvas>
    <div class="scene-hud scene-hud-right">
      <strong>XRAY</strong>
      <span>Route / DNS / API</span>
    </div>
  </section>
</template>
