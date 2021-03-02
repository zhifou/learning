/**
 * lodash的柯里化应用
 * @type {_.curry} 柯里化类实例
 */
var curry = require('lodash').curry;

var match = curry(function (what, str) {
    return str.match(what);
});

var replace = curry(function (what, replacement, str) {
    return str.replace(what, replacement);
});

var filter = curry(function (f, arr) {
    return arr.filter(f);
});

var map = curry(function (f, arr) {
    return arr.map(f);
});

console.log(match(/\s+/g, "hello world"));
console.log(match(/\s+/g)("hello world"));

var hasSpaces = match(/\s+/g);

//console.log(hasSpaces);

console.log(hasSpaces("hello world"));

console.log(hasSpaces("spaceless"));


console.log(filter(hasSpaces, ['tori_spelling', 'tori amos']));

var findSpaces = filter(hasSpaces);

console.log(findSpaces(['tori_spelling', 'tori amos']));

var noVowels = replace(/[aieou]/ig);

var censored = noVowels('*');

console.log(censored("Chocolate Rain"));

