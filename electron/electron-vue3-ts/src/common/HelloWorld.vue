<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ msg: string }>();

const count = ref(0)

const btnClick = (e: PointerEvent) => {
  count.value += 11;
}

console.log('hje')
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{count}}</h1>
  <button @click="btnClick">button</button>
</template>

<style scoped>
h1 {
  color: #42b983;
}

</style>
