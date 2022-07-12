exports.build = {
    appTitle: '未知应用', // TODO: 修改系统名称
};

exports.devServer = {
    port: 8100, // TODO: 找一个不和其它系统冲突的端口
    apiPrefixes: ['/api'], // TODO: 设置后端API的URL前缀
    defaultProxyDomain: 'unknown-test.baidu-int.com', // TODO: 设置后端测试环境域名
};
