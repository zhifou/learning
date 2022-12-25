(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ToolBundle = {}));
})(this, (function (exports) { 'use strict';

    /**
     * 两数相加
     * @param a
     * @param b
     * @returns
     */
    var add = function (a, b) {
        return a + b;
    };
    /**
     * 两数相减
     * @param a
     * @param b
     * @returns
     */
    var reduce = function (a, b) {
        return a - b;
    };

    exports.add = add;
    exports.reduce = reduce;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
