<script setup>
const route = useRoute();

const { id:conductorId } = route.params
const { data } = await useFetch(`http://localhost:8000/api/chofers/${conductorId}/`);
console.log("XD", data)

defineProps({
  title: {
    type: String,
    default: "Edit",
  },
});
</script>



<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ $route.params.id }}</p>
  </div>
</template>



<style>
</style>