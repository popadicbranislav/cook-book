<script lang="ts" setup>
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    class="rounded p-2 hover:bg-neutral/20"
    @click="toggleMode"
  >
    <div class="i-carbon-light dark:i-carbon-dark text-sm" />
  </button>
</template>
