/**
 * @file console扩展
 */
const consoleEx = console;

consoleEx.red = (...args) => {
    // let a = JSON.stringify(args);
    // console.log(`c%${a}`, "color: red;");
    let a = { color: args };
    console.log(`%c${JSON.stringify(args)}`, "color: red;");
};

consoleEx.blue = (...args) => {
    // let a = JSON.stringify(args);
    // console.log(`c%${a}`, "color: red;");
    let a = { color: args };
    console.log(`%c${JSON.stringify(args)}`, "color: blue;");
};

export default consoleEx;
