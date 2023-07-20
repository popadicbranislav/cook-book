<script setup lang="ts">
import mockData from '~/mockData.json'
import AppHeader from '~/components/AppHeader.vue'

const searchQuery = ref('')
const recipes = mockData

function handleSubmit() {
  // alert(searchQuery.value)
}

const client = useSupabaseClient()

const { data: testData } = useAsyncData('test', async () => {
  return await client.from('test').select('*')
}, {
  transform: result => result.data,
})
</script>

<template>
  <AppHeader />

  <main class="mx-auto py-8 container">
    <ul>
      <li
        v-for="recipe of recipes" :key="recipe.title"
        class="mx-auto mb-4 max-w-xl"
      >
        <NuxtLink
          :to="`/recipes/${recipe.id}`"
          tabindex="0"
        >
          <div
            class="relative aspect-3/2 flex flex-col justify-end of-hidden from-white/20 to-black/50 bg-gradient-to-b p-8 hover:(from-white/5 to-black/10)"
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

    <div class="sticky bottom-4 my-50vh">
      <form
        class="m-4 flex items-center of-hidden rounded-xl bg-white shadow-2xl shadow-gray-8 focus-within:(ring-4)"
        @submit.prevent
      >
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Search recipes..."
          class="flex-1 bg-transparent p-4 outline-none"
        >

        <button type="submit" class="px-2 text-1em outline-none" @click="handleSubmit">
          <div class="i-carbon-search" />
        </button>
      </form>
    </div>
  </main>
</template>
