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
      <NuxtLink to="login" class="ml-xl hover:(decoration-underline decoration-dashed)">
        Login
      </NuxtLink>
    </div>
  </header>
</template>
