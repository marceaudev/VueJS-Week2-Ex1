<script setup>
const displayName = () => {
  console.log("Je m'appelle Marceau")
}

const displayName2 = (name) => {
  alert("Je m'appelle " + name)
}
</script>

<template>
  <section>
    <button @click="displayName()">Comment t'appelles-tu ?</button>
    <button @click="displayName2('Marceau')">Comment t'appelles-tu ?</button>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

button {
  background: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  padding: 13px;
  border-radius: 20px;
  border: none;
  color: white;
}
</style>
