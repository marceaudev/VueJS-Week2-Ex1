<script setup>
const displayNetwork = (social) => {
  return alert("Il s'agit du réseaux " + social + '.')
}
</script>

<template>
  <section>
    <font-awesome-icon :icon="['fab', 'github']" @click="displayNetwork('GitHub')" />
    <font-awesome-icon :icon="['fab', 'linkedin']" @click="displayNetwork('LinkedIn')" />
    <font-awesome-icon :icon="['fab', 'instagram']" @click="displayNetwork('Instagram')" />
  </section>
</template>

<style scoped>
section {
  display: flex;
  gap: 30px;
}

svg {
  font-size: 50px;
}

svg:hover {
  cursor: pointer;
  transform: scale(1.02);
}
</style>
