<template>
  <ElButton type="success" plain @click="goPage1">Page1</ElButton> |
  <RouterLink to="/page2">page2</RouterLink>
  <RouterView></RouterView>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useRouter } from 'vue-router'

console.log(import.meta.env.DEV, 'DEV')
console.log(import.meta.env.VITE_TOKEN, 'VITE_TOKEN')

const router = useRouter()
const goPage1 = () => {
  router.push('/page1')
}
</script>
