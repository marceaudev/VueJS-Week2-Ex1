<script setup>
const showRandomNumber = () => {
  alert(Math.floor(Math.random() * 100))
}
</script>

<template>
  <section>
    <button @click="showRandomNumber()">Chiffre surprise</button>
  </section>
</template>

<style scoped>
button {
  background-color: orange;
  width: 150px;
  height: 150px;
  color: white;
  border-radius: 50%;
  border: thick double pink;
  font-size: 15px;
}
</style>
