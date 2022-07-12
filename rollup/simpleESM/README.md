- 打包结果默认输出到屏幕。
```
$ rollup main.js
```
- 使用参数--file [FILENAME]，将打包结果保存到指定文件。
```
$ rollup main.js --file bundle.js
```
- 如果有多个入口脚本，就依次填写它们的文件名，并使用参数--dir指定输出目录。
```
$ rollup m1.js m2.js --dir dist
```
- 参数--format iife，会把打包结果放在一个自动执行函数里面。
```
$ rollup main.js --format iife
```
- 如果希望打包后代码最小化，使用参数--compact。
```
$ rollup main.js --compact
```
- 使用专门工具进行数据压缩。
```
$ rollup main.js | uglifyjs --output bundle.js
```
- 使用配置文件。
```
// rollup.config.js
export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  }
};

$ rollup -c
```