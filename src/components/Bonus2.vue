<script setup>
const colorsList = [
  'bleu',
  'vert',
  'rose',
  'orange',
  'violet',
  'marron',
  'jaune',
  'noir',
  'rouge',
  'gris',
]

const randomColor = () => {
  const index = Math.floor(Math.random() * colorsList.length)
  return alert(colorsList[index])
}
</script>

<template>
  <section>
    <button @click="randomColor()">Couleur surprise</button>
  </section>
</template>

<style scoped>
button {
  font-size: 18px;
  padding: 10px 14px;
  border: none;
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
  border-radius: 145px;
}
</style>
