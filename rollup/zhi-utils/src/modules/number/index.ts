// src/modules/number/index.ts

/**
 * @description 生成指定范围的随机小数
 */
export const randomNumberInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

/**
 * @description 计算数组或多个数字的总和
 */
export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
