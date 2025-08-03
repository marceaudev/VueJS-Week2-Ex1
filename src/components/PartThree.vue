<script setup>
const colors = {
  bleue: '#23b8d3',
  violette: '#a519a5',
  orange: '#ffa500',
  verte: '#44f178',
}

const displayColor = (color) => {
  alert(
    "Il s'agit de la couleur " + color + " dont le code hexadécimal est '" + colors[color] + "'.",
  )
}
</script>

<template>
  <section>
    <h2>De quelle couleur s'agit-il ?</h2>
    <div>
      <div @click="displayColor('bleue')" :style="{ backgroundColor: colors.bleue }"></div>
      <div @click="displayColor('violette')" :style="{ backgroundColor: colors.violette }"></div>
      <div @click="displayColor('orange')" :style="{ backgroundColor: colors.orange }"></div>
      <div @click="displayColor('verte')" :style="{ backgroundColor: colors.verte }"></div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

section > div {
  display: flex;
}

section > div > div {
  width: 150px;
  height: 150px;
  border-radius: 150px 10px 150px 30px;
}

section > div > div:hover {
  transform: scale(1.02);
  cursor: pointer;
}
</style>
