<script setup lang="ts">
import data from '~/mockData.json'
import AppHeader from '~/components/AppHeader.vue'

const searchQuery = ref('')
const recipes = data

function handleSubmit() {
  // alert(searchQuery.value)
}
</script>

<template>
  <AppHeader />

  <main class="py-8">
    <ul class="mx-auto mb-20 flex flex-col items-center gap-8 px-2 container">
      <li
        v-for="recipe of recipes" :key="recipe.title"
        class="max-w-40rem w-full"
      >
        <NuxtLink
          :to="`/recipes/${recipe.id}`"
          tabindex="0"
        >
          <div
            class="relative aspect-3/2 flex flex-col justify-end of-hidden from-white/20 to-black/50 bg-gradient-to-b p-8 hover:from-white/5 hover:to-black/10"
          >
            <img
              :src="recipe.img_url" class="absolute inset-0 z--1"
              loading="lazy"
              alt="Recipe image"
            >

            <h2 class="text-xl font-bold text-white">
              {{ recipe.title }}
            </h2>
            <p class="text-base text-gray-300">
              By {{ recipe.author }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <div class="fixed bottom-10 left-0 right-0 mx-auto px-4 container">
      <form
        class="flex items-center bg-gray-100 pr-5 text-gray-800 transition-shadow focus-within:(shadow-2xl outline)"
        @submit.prevent
      >
        <input
          v-model="searchQuery"
          class="flex-grow-1 bg-transparent px-6 py-3 focus:outline-none"
          type="search"
          placeholder="Search recipes..."
        >
        <button type="submit" @click="handleSubmit">
          <div class="i-carbon-search text-xs" />
        </button>
      </form>
    </div>
  </main>
</template>
