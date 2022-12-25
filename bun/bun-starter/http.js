// http.js
export default {
    // ⚠️ 3000 端口如果被占用的话，程序执行会出错，并且没有一个明确的错误提示。
    port: 3030,
    fetch(request) {
      return new Response("Welcome to Bun!");
    },
  };