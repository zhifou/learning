<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const btnClick = (e: PointerEvent) => {
  count.value += 33;
}
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
