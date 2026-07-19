<template>
  <div>
    <h2>Landing</h2>
    <p>Interactive 4D visualization placeholder. Click the shape to enter the knowledge base.</p>
    <div id="viz" @click="enterKB" style="width:600px;height:400px;border:1px solid #ccc;display:flex;align-items:center;justify-content:center">
      <canvas ref="canvas" width="600" height="400"></canvas>
      <div style="position:absolute;pointer-events:none;color:#666">[4D shape placeholder]</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
    enterKB() { location.hash = '#/kb' }
  }
}
</script>
