<script setup lang="ts">
import data from '~/mockData.json'
import AppHeader from '~/components/AppHeader.vue'

const route = useRoute()
const recipeId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id

const recipe = data.find(r => r.id === recipeId)

if (!recipe)
  createError({ statusCode: 404, message: 'Recipe not found' })
</script>

<template>
  <AppHeader />

  <main v-if="recipe" class="mx-auto my-8 max-w-40rem flex flex-col gap-8 px-2 container">
    <img
      :src="recipe.img_url" class="aspect-3/2 w-full"
      loading="lazy"
      alt="Recipe Image"
    >

    <h2 class="text-xl font-bold">
      {{ recipe.title }}
    </h2>
    <p class="text-base text-gray-700">
      By {{ recipe.author }}
    </p>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-bold">
        Ingredients:
      </h3>
      <ul class="list-disc list-inside">
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-bold">
        Directions:
      </h3>
      <ol class="list-decimal list-inside">
        <li
          v-for="direction in recipe.directions"
          :key="direction"
        >
          {{ direction }}
        </li>
      </ol>
    </div>

    <NuxtLink to="/">
      <button class="w-full rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600">
        Home
      </button>
    </NuxtLink>
  </main>
</template>
