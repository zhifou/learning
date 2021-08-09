var cats = require('./cats.js');
var packJs = require('packjs-pj');

console.log(cats);

console.log(cats[0]);

packJs.prototype.hello();

if (__DEV__){
    // 任意代码
    console.log("这个是我通过webpack配置的全局标识");
}