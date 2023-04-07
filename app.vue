<script setup lang="ts">
import data from '~/mockData.json'

const searchQuery = ref('')
const recipes = data

type Recipe = typeof data[number]

const selectedRecipe = ref<Recipe | null>(null)
function showRecipe(recipe: Recipe) {
  selectedRecipe.value = recipe
}

function handleSubmit() {
  // alert(searchQuery.value)
}
</script>

<template>
  <main class="relative h-screen w-screen">
    <div v-if="selectedRecipe" class="fixed left-0 top-0 h-full w-full flex items-center justify-center bg-white bg-opacity-90">
      <div class="mx-4 my-4 max-w-3xl w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <img :src="selectedRecipe.img_url" class="h-56 w-full object-cover object-center" alt="Recipe Image">
        <div class="p-4">
          <h2 class="mb-2 text-xl font-bold">
            {{ selectedRecipe.title }}
          </h2>
          <p class="mb-4 text-base text-gray-700">
            By {{ selectedRecipe.author }}
          </p>
          <div class="mb-4">
            <h3 class="mb-2 text-lg font-bold">
              Ingredients:
            </h3>
            <ul class="list-disc list-inside">
              <li v-for="ingredient in selectedRecipe.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
          </div>
          <div class="mb-4">
            <h3 class="mb-2 text-lg font-bold">
              Directions:
            </h3>
            <ol class="list-decimal list-inside">
              <li v-for="direction in selectedRecipe.directions" :key="direction">
                {{ direction }}
              </li>
            </ol>
          </div>
          <button class="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600" @click="selectedRecipe = null">
            Close
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="searchQuery !== ''"
    >
      <div class="flex flex-wrap justify-center">
        <div v-for="recipe in recipes" :key="recipe.title" class="mx-4 my-4 max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
          <img :src="recipe.img_url" class="h-56 w-full cursor-pointer object-cover object-center" alt="Recipe Image" @click="showRecipe(recipe)">
          <div class="p-4">
            <h2 class="mb-2 cursor-pointer text-xl font-bold" @click="showRecipe(recipe)">
              {{ recipe.title }}
            </h2>
            <p class="mb-4 text-base text-gray-700">
              By {{ recipe.author }}
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="flex flex-wrap justify-center">
        <div v-for="recipe in recipes" :key="recipe.title" class="mx-4 my-4 max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
          <img :src="recipe.img_url" class="h-56 w-full object-cover object-center" alt="Recipe Image">
          <div class="p-4">
            <h2 class="mb-2 text-xl font-bold">
              {{ recipe.title }}
            </h2>
            <p class="mb-4 text-base text-gray-700">
              By {{ recipe.author }}
            </p>
            <div class="mb-4">
              <h3 class="mb-2 text-lg font-bold">
                Ingredients:
              </h3>
              <ul class="list-disc list-inside">
                <li v-for="ingredient in recipe.ingredients" :key="ingredient">
                  {{ ingredient }}
                </li>
              </ul>
            </div>
            <div class="mb-4">
              <h3 class="mb-2 text-lg font-bold">
                Directions:
              </h3>
              <ol class="list-decimal list-inside">
                <li v-for="direction in recipe.directions" :key="direction">
                  {{ direction }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <ul class="flex flex-col">
        <li v-for="recipe of recipes" :key="recipe.title">
          <div class="card">

          </div>
        </li>
      </ul> -->
    </div>

    <div class="absolute bottom-10 left-0 right-0 flex justify-center">
      <form
        class="max-w-lg min-w-80vw flex items-center rounded-full bg-gray-100 pr-5 text-gray-800 transition-shadow focus-within:shadow-xl"
        @submit.prevent
      >
        <input
          v-model="searchQuery"
          class="flex-grow-1 rounded-l-full bg-transparent px-6 py-3 focus:outline-none"
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
