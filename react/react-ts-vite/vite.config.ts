import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // 配置路径别名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://zhifou.co/api",
                changeOrigin: true,
                cookieDomainRewrite: "",
                secure: false,
            },
        },
    },
});
