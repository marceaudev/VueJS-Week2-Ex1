<script setup>
const convertToCm = (number) => {
  const result = number * 100000
  return alert(number + ' km correspond à ' + result + ' cm.')
}
</script>

<template>
  <section>
    <h2>Convertir des km en cm :</h2>
    <div>
      <button @click="convertToCm(10)">10 km</button>
      <button @click="convertToCm(50)">50 km</button>
      <button @click="convertToCm(145)">145 km</button>
      <button @click="convertToCm(456)">456 km</button>
      <button @click="convertToCm(623)">623 km</button>
      <button @click="convertToCm(1238)">1238 km</button>
      <button @click="convertToCm(7142)">7142 km</button>
      <button @click="convertToCm(10881)">10881 km</button>
      <button @click="convertToCm(15821)">15821 km</button>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #9ff0e2;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h2 {
  color: #7b25e0;
}

section > div {
  display: flex;
  flex-wrap: wrap;
  width: 650px;
  gap: 10px;
}

button {
  border: none;
  background-color: transparent;
  border: 2px solid #7b25e0;
  color: #7b25e0;
  width: calc((100% - 20px) / 3);
  height: 70px;
}
</style>
