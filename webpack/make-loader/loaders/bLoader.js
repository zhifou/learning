function bLoader(content, map, meta) {
    console.log('开始执行bLoader Normal Loader');
    content += 'bLoader->';
    return content;
}

module.exports = bLoader;