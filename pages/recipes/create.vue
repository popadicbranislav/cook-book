<script setup lang="ts">
const name = ref('test')
const description = ref('desc')
const steps = ref<string[]>(['hello', 'there'])

function createRecipe() {
  useFetch('/api/recipes/create', {
    method: 'POST',
    body: {
      name: name.value,
      description: description.value,
      steps: steps.value,
      author_id: useSupabaseUser().value?.id,
    },

  })
}
</script>

<template>
  <div>
    <h1>Create new recipe</h1>

    <input v-model="name" type="text" placeholder="name">
    <input v-model="description" type="text" placeholder="description">
    <input v-model="steps" type="text" placeholder="steps">

    <button type="button" @click="createRecipe">
      Create
    </button>
  </div>
</template>
