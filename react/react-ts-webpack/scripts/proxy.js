const proxySetting = {
    "/api/": {
        target: "http://localhost:3001",
        changeOrigin: true,
    },
    //接口代理2
    "/api-2/": {
        target: "http://localhost:3002",
        changeOrigin: true,
        pathRewrite: {
            "^/api-2": "",
        },
    },
};

module.exports = proxySetting;
