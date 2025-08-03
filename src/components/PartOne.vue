<template>
  <section>
    <button @click="console.log('Hello world !')">Affiche un message dans la console</button>
    <button @click="console.log('Bienvenue au Reacteur !')">
      Affiche un autre message dans la console
    </button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  gap: 40px;
}

button {
  background-color: transparent;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid rgb(231, 165, 43);
  color: rgb(231, 165, 43);
}
</style>
