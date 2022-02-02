import React from "react";
// import TodoStore from './todo.store';

// class RootStore {
//     constructor() {
//         // this.userStore = new UserStore(this)
//         this.todoStore = new TodoStore(this)
//     }
// };

// const rootStore = new RootStore();
// export default rootStore;

// // 创建rootStore的Context
// export const rootStoreContext = React.createContext(rootStore);

// // 导出useStore方法
// export const useStore = storeName => {
//     const rootStore = React.useContext(rootStoreContext);
//     if (storeName) {
//         const childStore = rootStore[storeName];
//         if (!childStore) {
//             throw new Error('根据传入storeName, 找不到对应的子store');
//         }
//         return childStore;
//     }
//     return rootStore;
// }

import appStore from "./appStore";

export const rootStore = {
    appStore,
};

// 这里我们注意需要使用createContext
const StoresContext = React.createContext(rootStore);

export default StoresContext;

export const useStores = () => React.useContext(StoresContext);