
<script lang="ts">
import { ref, defineComponent, reactive, onMounted, toRefs } from 'vue';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib

// interface Data {
//   [key: string]: unknown
// }

// interface SetupContext {
//   attrs: Data
//   slots: Slots
//   emit: (event: string, ...args: unknown[]) => void
// }

export default defineComponent({
    setup() {
        const readersNumber = ref(0)
        const state = reactive({
            count: 0,
        });

        const btnClick = (e: PointerEvent) => {
            console.log(readersNumber.value);
            
            state.count += 0;
            console.log(state.count);
            message.warn('dddddd');
            readersNumber.value += 10;
        };

        onMounted(() => {
            console.log('onMounted执行了');
        });

        return {
            ...toRefs(state),
            readersNumber,
            btnClick,
        };
    },
});

</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <a-button type="primary" @click="btnClick">测试ant-design-vue 按钮</a-button>
    <div>{{ count }}</div>
    <div>{{readersNumber}}</div>
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
