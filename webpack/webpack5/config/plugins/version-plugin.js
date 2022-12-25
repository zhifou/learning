const chalk = require('chalk');
// chalk的4.1.2版本支持commonjs，5.0以上版本仅支持ESM了
class VersionPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        // console.log("This is My Plugin!", compiler);
        compiler.hooks.done.tap("VersionPlugin", (stats) => {
            console.log(
                chalk.green.bold("My author is ") +
                    chalk.red.bold(this.options.name) +
                    "\n"
            );
        });


        //遇到异步时刻
        //当要把代码放到dist目录之前，要走下面这个函数
        //Compilation存放打包的所有内容，Compilation.assets放置生成的内容
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (Compilation, cb) => {
            // 往代码中增加一个文件，copyright.txt
            Compilation.assets['copyright.txt'] = {
                source: function() {
                    let name = 'noname';
                    Compilation.options.plugins.forEach(item => {
                        if (item instanceof VersionPlugin) {
                            name = item.options.name;
                        }
                    });
                    return `copyright by ${name}`;
                },
                size: function() {
                    return 19;
                }
            };
            cb();
        });
    }
}

module.exports = VersionPlugin;
