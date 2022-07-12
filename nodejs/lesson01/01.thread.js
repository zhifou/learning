const fs = require('fs');

fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});

setImmediate(() => {
    console.log('This runs while file is being read');
});

setInterval(() => {
    console.log('Process will run forever');
}, 1_000);

const t1 = setTimeout(() => {
    console.log('setTimeout::10_000');
}, 10_000);
const t2 = setTimeout(() => {
    console.log('setTimeout::20_000');
}, 20_000);

// t1计时器已改变为未引用状态。它的回调仍然可以在10秒内运行，但它不会让进程保持活动状态
t1.unref();

// t2计时器已被清除，将永远不再执行。这样做得一个副作用是 ，它不再使进程保持在活动状态。
// 因为没有剩余的异步操作来保持进程处于活动状态，事件循环在下一次迭代中将会结束该进程
clearTimeout(t2);