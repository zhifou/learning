const chalk = require("chalk");
//
class VersionPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        console.log("This is My Plugin!", compiler);
        compiler.hooks.done.tap("VersionPlugin", (stats) => {
            console.log(
                chalk.green.bold("My author is ") +
                    chalk.red.bold(this.options.name) +
                    "\n"
            );
        });
    }
}
module.exports = VersionPlugin;
