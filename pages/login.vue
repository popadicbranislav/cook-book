<script setup lang="ts">
const client = useSupabaseClient()

async function loginGoogle() {
  const { error } = await client.auth.signInWithOAuth({ provider: 'google' })

  if (error)
    console.error(error)
}

async function loginFacebook() {
  const { error } = await client.auth.signInWithOAuth({ provider: 'facebook' })

  if (error)
    console.error(error)
}
</script>

<template>
  <div class="mx-auto my-8 flex flex-col items-center gap-8 container">
    <div class="text-xl font-bold">
      Login
    </div>
    <button class="max-w-xl b-1 rounded px-4 py-2 hover:bg-gray/10" @click="loginGoogle">
      <div class="i-carbon-logo-google" /> Login with google
    </button>
    <button class="max-w-xl b-1 rounded px-4 py-2 hover:bg-gray/10" @click="loginFacebook">
      <div class="i-carbon-logo-facebook" /> Login with facebook
    </button>
  </div>
</template>
