<script setup>
const word1 = 'aLigaTOR'
const word2 = 'CHAMOIS'
const word3 = 'ElEpHaNt'
const word4 = 'wombaT'

const correctTheWord = (word) => {
  return alert(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
}
</script>

<template>
  <section>
    <button @click="correctTheWord(word1)">{{ word1 }}</button>
    <button @click="correctTheWord(word2)">{{ word2 }}</button>
    <button @click="correctTheWord(word3)">{{ word3 }}</button>
    <button @click="correctTheWord(word4)">{{ word4 }}</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

button {
  border: none;
  background-color: #37f3bb;
  color: black;
  padding: 10px;
  font-weight: bold;
  border-radius: 7px;
}
</style>
