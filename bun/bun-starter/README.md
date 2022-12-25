# 安装
```
curl https://bun.sh/install | bash
```
- 如果安装失败，直接下载后，放入/usr/local/bin中，并增加环境变量配置
```
# 打开 ~/.zshrc 文件，添加一行
export PATH="$HOME/.bun/bin:$PATH"
```
- 接着，执行source ~/.zshrc，之后就能使用 bun 命令了:
```
bun --help
```
# 运行
- bun run http.js 