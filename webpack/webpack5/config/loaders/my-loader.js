
const loaderUtils = require("loader-utils");

module.exports = function (source) {
    // 获取到用户给当前 Loader 传入的 options
    const options = loaderUtils.getOptions(this);
    console.log("options-->", options);

    {/**
    //调用this.async()这个API，来给异步代码使用
    const callback = this.async();

    setTimeout(() => {
        const result = source.replace('word', options.name);
        callback(null, result);
    }, 1000);
     */}

    // 在这里按照你的需求处理 source
    const result = source.replace("word", options.name);
    this.callback(null, result);
};
