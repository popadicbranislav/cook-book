<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseAuthClient()
</script>

<template>
  <header class="sticky top-0 z-9 bg-#333 text-white">
    <div
      class="mx-auto flex items-center gap-4 p-4 container"
    >
      <NuxtLink to="/">
        <h1 class="text-xl uppercase">
          Cook book
        </h1>
      </NuxtLink>

      <NuxtLink to="#" class="ml-auto hover:(decoration-underline decoration-dashed)">
        About
      </NuxtLink>
      <NuxtLink to="#" class="hover:(decoration-underline decoration-dashed)">
        Create
      </NuxtLink>
      <button v-if="user" @click="client.auth.signOut()">
        Logout
      </button>
      <div v-if="user">
        <NuxtImg :src="user.user_metadata.avatar_url" class="rounded-full" :title="user.user_metadata.email" />
      </div>
      <NuxtLink v-else to="login" class="ml-xl hover:(decoration-underline decoration-dashed)">
        Login
      </NuxtLink>
    </div>
  </header>
</template>
