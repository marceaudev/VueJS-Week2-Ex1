<script setup>
const colorsList = [
  { name: 'bleu', hexa: '#0B71BA' },
  { name: 'vert', hexa: '#39B639' },
  { name: 'orange', hexa: '#EA8512' },
  { name: 'violet', hexa: '#721D7D' },
  { name: 'marron', hexa: '#713928' },
  { name: 'jaune', hexa: '#DED94B' },
  { name: 'noir', hexa: '#1C1C18' },
  { name: 'rouge', hexa: '#F11919' },
  { name: 'gris', hexa: '#9C9696' },
]

const randomColorBis = () => {
  const index = Math.floor(Math.random() * colorsList.length)
  alert(
    'Vous obtenez du ' +
      colorsList[index].name +
      " dont le code hexadécimal est '" +
      colorsList[index].hexa +
      "'.",
  )
}
</script>

<template>
  <section>
    <button @click="randomColorBis()">Couleur surprise version bis</button>
  </section>
</template>

<style scoped>
button {
  background: transparent;
  color: black;
  border: 2px solid;
  border-image: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%
    )
    1;
  padding: 10px 14px;
  font-size: 18px;
}
</style>
