const path = require('path');

module.exports = {
    // 源码目录
    src: path.resolve(__dirname, '../src'),
    // 构建后的资源产物文件夹
    build: path.resolve(__dirname, '../dist'),
    // 静态资源
    public: path.resolve(__dirname, '../public'),
};