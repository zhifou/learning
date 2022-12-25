<script setup lang="ts">
import { ref, defineComponent, reactive, onMounted, defineAsyncComponent } from 'vue';
import { message } from 'ant-design-vue';
// import HelloWorld from './common/HelloWorld.vue';
import Logo from '@/assets/logo.png';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib
// interface Data {
//   [key: string]: unknown
// }

// interface SetupContext {
//   attrs: Data
//   slots: Slots
//   emit: (event: string, ...args: unknown[]) => void
// }

const count = ref(0);
const showHW = ref(false);
// 延迟加载组件
const HelloWorld = defineAsyncComponent(() => import('@/common/HelloWorld.vue'));
/**
const HelloWorld = defineAsyncComponent({
  loader: () => import('@/common/HelloWorld.vue'),
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 加载失败时使用的组件
  errorComponent: ErrorComponent
  // 在显示加载组件之前延迟。默认值：200ms。
  delay: 1000,
  // 超过给定时间，则会显示错误组件。默认值：Infinity。
  timeout: 3000
})
 */

const btnClick = (e: PointerEvent) => {
    console.log(count.value);
    message.warn(count.value);
    count.value += 10;
    showHW.value = true;
    console.log(333);
};

onMounted(() => {
    console.log('onMounted执行了');
});

</script>

<template>
    <img alt="Vue logo" :src="Logo" />
    <a-button type="primary" @click="btnClick">测试ant-design-vue 按钮</a-button>
    <div>{{ count }}</div>
    <div>下面是Helloworld组件</div>
    <HelloWorld v-if="showHW" msg="this is message"></HelloWorld>

</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
