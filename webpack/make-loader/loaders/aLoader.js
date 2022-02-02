function aLoader(content, map, meta) {
    console.log('开始执行aLoader Normal Loader');
    content += 'aLoader]';
    return `module.exports = '${content}'`;
}

module.exports = aLoader;