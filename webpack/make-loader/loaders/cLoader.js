function cLoader(content, map, meta) {
    console.log('开始执行cLoader Normal Loader');
    content += '[cLoader->';
    return content;
}

module.exports = cLoader;