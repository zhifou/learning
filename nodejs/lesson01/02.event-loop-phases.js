const fs = require('fs');

/**
setImmediate(() => console.log(1));
Promise.resolve().then(() => console.log(2));
process.nextTick(() => console.log(3));
fs.readFile(__filename, () => {
    console.log(4);
    setTimeout(() => console.log(5));
    setImmediate(() => console.log(6));
    process.nextTick(() => console.log(7));
});
console.log(8);
 */

// 我自己认为：8 3 1 2 4 7 6 5  setImmediate还是个宏任务
// 运行结果：8 3 2 1 4 7 6 5

const sleep_st = (t) => new Promise((r) => setTimeout(r, t));
const sleep_im = () => new Promise((r) => setImmediate(r));

// (async () => {
//     setImmediate(() => console.log(1));
//     console.log(2);
//     await sleep_st(2); // setTimeout 0 则直接执行 2 则放在宏队列执行
//     setImmediate(() => console.log(3));
//     console.log(4);
//     await sleep_im();
//     setImmediate(() => console.log(5));
//     console.log(6);
//     await 1;
//     setImmediate(() => console.log(7));
//     console.log(8);
// })();

// 我认为的结果：2 4 6 8 1 3 5 7
// 解释：当涉及async 函数和在语句前面加上await时，你几乎可以将
// 它们看作使用嵌套回调的代码的语法糖，甚至可以看作一个.then()调用链
// 实际结果：2 4 1 3 6 8 5 7

setImmediate(() => console.log(1));
console.log(2);
Promise.resolve().then(() => setTimeout(() => {
    setImmediate(() => console.log(3));
    console.log(4);
    Promise.resolve().then(() => setImmediate(() => {
        setImmediate(() => console.log(5));
        console.log(6);
        Promise.resolve().then(() => {
            setImmediate(() => console.log(7));
            console.log(8);
        });
    }));
}, 2));