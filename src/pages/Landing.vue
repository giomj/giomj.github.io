<template>
  <div class="landing">
    <h2>Landing</h2>
    <p>Interactive 4D tesseract — click the shape to enter the knowledge base.</p>
    <div id="viz" @click="enterKB" style="position:relative;width:800px;height:500px;border-radius:10px;overflow:hidden;box-shadow:0 8px 30px rgba(2,6,23,0.4);">
      <canvas ref="canvas"></canvas>
      <button @click.stop="resetView" style="position:absolute;left:12px;top:12px;z-index:10">Reset view</button>
      <div style="position:absolute;right:12px;top:12px;z-index:10;color:#fff;font-size:13px;text-shadow:0 1px 3px rgba(0,0,0,0.6)">Click shape to enter KB</div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'

// Helper: generate 4D hypercube vertices and edges
function hypercube4Vertices() {
  const verts = []
  for (let i = 0; i < 16; i++) {
    const v = [ (i & 1) ? 1 : -1, (i & 2) ? 1 : -1, (i & 4) ? 1 : -1, (i & 8) ? 1 : -1 ]
    verts.push(v)
  }
  return verts
}

function hypercube4Edges() {
  const edges = []
  for (let i = 0; i < 16; i++) {
    for (let j = i+1; j < 16; j++) {
      // connect if Hamming distance == 1
      let diff = 0
      for (let k=0;k<4;k++) if (((i>>k)&1) !== ((j>>k)&1)) diff++
      if (diff === 1) edges.push([i,j])
    }
  }
  return edges
}

export default {
  name: 'Landing',
  methods: {
    enterKB() { location.hash = '#/kb' }
  },
  mounted() {
    const canvas = this.$refs.canvas
    const width = canvas.parentElement.clientWidth
    const height = canvas.parentElement.clientHeight
    canvas.width = width
    canvas.height = height

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x071028)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 6)

    // light
    const light = new THREE.DirectionalLight(0xffffff, 0.9)
    light.position.set(5,5,5)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0x404050, 0.6))

    // build hypercube geometry by projecting 4D -> 3D
    const verts4 = hypercube4Vertices()
    const edges = hypercube4Edges()

    // create buffer geometry lines
    const positions = new Float32Array(edges.length * 2 * 3)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.LineBasicMaterial({ color: 0x9be3ff, linewidth: 2 })
    const lines = new THREE.LineSegments(geometry, material)
    scene.add(lines)

    // rotation angles
    let aXY = 0.2, aZW = 0.4

    // mouse interaction for rotation
    let isDragging = false, lastX = 0, lastY = 0
    canvas.addEventListener('pointerdown', (e)=>{ isDragging=true; lastX=e.clientX; lastY=e.clientY })
    window.addEventListener('pointerup', ()=> isDragging=false)
    window.addEventListener('pointermove', (e)=>{
      if (!isDragging) return
      const dx = (e.clientX - lastX) * 0.01
      const dy = (e.clientY - lastY) * 0.01
      aXY += dy
      aZW += dx
      lastX = e.clientX; lastY = e.clientY
    })

    const project4to3 = (v4, rot) => {
      // apply simple 4D rotations: rotate xy and zw
      const [x,y,z,w] = v4
      const c1 = Math.cos(rot.aXY), s1 = Math.sin(rot.aXY)
      const c2 = Math.cos(rot.aZW), s2 = Math.sin(rot.aZW)
      const xr = x*c1 - y*s1
      const yr = x*s1 + y*c1
      const zr = z*c2 - w*s2
      const wr = z*s2 + w*c2
      // perspective project from 4D -> 3D using w as depth
      const wcam = 3 // virtual distance of 4th dim camera
      const scale = wcam / (wcam - wr)
      return [xr*scale*0.8, yr*scale*0.8, zr*scale*0.8]
    }

    const updatePositions = (rot) => {
      for (let i=0;i<edges.length;i++){
        const [a,b]=edges[i]
        const p = project4to3(verts4[a], rot)
        const q = project4to3(verts4[b], rot)
        positions[i*6+0]=p[0]; positions[i*6+1]=p[1]; positions[i*6+2]=p[2]
        positions[i*6+3]=q[0]; positions[i*6+4]=q[1]; positions[i*6+5]=q[2]
      }
      geometry.attributes.position.needsUpdate = true
    }

    // initial update
    updatePositions({ aXY, aZW })

    // animate
    let rafId
    const animate = () => {
      aXY += 0.005
      aZW += 0.007
      updatePositions({ aXY, aZW })
      lines.rotation.y += 0.005
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }
    animate()

    this._teardown = () => {
      cancelAnimationFrame(rafId)
      renderer.dispose()
    }

    // expose reset
    this.resetView = () => { aXY=0.2; aZW=0.4 }

    // enter KB when clicking the shape area (not the button)
    canvas.addEventListener('click', ()=> this.enterKB())

    // resize
    const onResize = ()=>{
      const w = canvas.parentElement.clientWidth
      const h = canvas.parentElement.clientHeight
      canvas.width = w; canvas.height = h
      renderer.setSize(w,h)
      camera.aspect = w/h; camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)
    this._resize = onResize
  },
  beforeUnmount() {
    if (this._teardown) this._teardown()
    if (this._resize) window.removeEventListener('resize', this._resize)
  }
}
</script>

<style scoped>
.landing { color:#e6f7ff }
.landing h2 { margin: 0 0 8px 0 }
.landing p { margin:0 0 12px 0;color:#cfeefb }
canvas { display:block; width:100%; height:100% }
button { background:#0b84ff;color:#fff;border:none;padding:6px 10px;border-radius:6px }
</style>
