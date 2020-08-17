# TypeScript 编码规范




[1 前言](#1)

[2 代码风格](#2)

　　[2.1 环境](#2-1)

　　[2.2 文件](#2-2)

　　[2.3 命名](#2-3)

[3 语言特性](#3)

　　[3.1 变量](#3-1)

　　[3.2 类型](#3-2)

　　[3.3 条件](#3-3)

　　[3.4 循环](#3-4)

　　[3.5 数组](#3-5)

　　[3.6 对象](#3-6)

　　[3.7 函数](#3-7)

　　[3.8 类](#3-8)

　　[3.9 模块](#3-9)



## 1 前言


随着 TypeScript 的不断发展，越来越多的开发者认可并使用 TypeScript 开发应用。本文档的目标是使 TypeScript 新特性的代码风格保持一致，并给予一些实践建议。

本文档基本遵循 [JavaScript Style Guide](http://gitlab.baidu.com/fe/spec/blob/master/javascript.md) 与 [ES-Next Style Guide](http://gitlab.baidu.com/fe/spec/tree/master/es-next)。

由于 TypeScript 依然在快速发展，本文档也将随时保持更新。更新内容主要涉及对新增的语言特性的格式规范化、实践指导，引擎与编译器环境变化的使用指导。

任何问题或建议，欢迎跟我们讨论: [fe-styleguide@baidu.com](mailto:fe-styleguide@baidu.com)



## 2 代码风格




### 2.1 环境


##### [强制] TypeScript 文件使用 `.ts` 扩展名。含 JSX 语法的 TypeScript 文件使用 `.tsx` 扩展名。



##### [建议] `tsconfig.json` 配置文件应开启 `strict`、`noImplicitReturns`、`noUnusedLocals` 选项。



##### [建议] `tsconfig.json` 配置文件应开启 `allowSyntheticDefaultImports` 选项。

示例：

```typescript
// good
import React, { PureComponent } from 'react';

// bad
import * as React from 'react';
```



##### [建议] 使用 [`VS Code`](https://code.visualstudio.com/) 编写 TypeScript。



### 2.2 文件


##### [强制] 在文件结尾处，保留一个空行。



### 2.3 命名


##### [强制] `接口` 使用 `Pascal` 命名法。

##### [强制] `接口名` 不使用 `I` 作为前缀。

示例：

```typescript
// good
interface ButtonProps {
    // ...
}

// bad
interface IButtonProps {
    // ...
}
```



##### [强制] `类型别名` 使用 `Pascal` 命名法。

示例：

```typescript
// good
interface HeaderStateProps {
    // ...
}

interface HeaderDispatchProps {
    // ...
}

type HeaderProps = HeaderStateProps & HeaderDispatchProps;
```



## 3 语言特性




### 3.1 变量


##### [强制] 使用 `const` 声明 `枚举` 。

示例：

```typescript
// good
const enum Directions {
    UP,
    DOWM,
    LEFT,
    RIGHT,
}

// bad
enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
```



### 3.2 类型


##### [强制] 不应显式声明可以自动推导的类型。

示例：

```typescript
// good
let shouldUpdate = false;

// bad
let shouldUpdate: boolean = false;
```



##### [强制] 使用 `string / number / boolean` 声明基本类型，不使用 `String / Number / Boolean`。

示例：

```typescript
// good
let str: string;

// bad
let str: String;
```



##### [强制] 不使用 `Object / Function` 声明类型。



##### [强制] 数组元素为简单类型（非匿名且不含泛型）时，使用 `T[]` 声明类型，否则应使用 `Array<T>`。

##### [建议] 数组元素为不可变数据时，使用 `ReadonlyArray<T>` 声明类型。

示例：

```typescript
// good
let files: string[];
let tokens: Array<string | number>;
let buffer: Buffer[];
let responses: Array<Promise<number>>;

// bad
let files: Array<string>;
let tokens: (string | number)[];
let buffer: Array<Buffer>;
let responses: Promise<number>[];
```



##### [强制] 不使用 `!` 声明对象属性非空。

示例：

```typescript
// good
if (foo.bar && foo.bar.baz) {
    // ...
}

// bad
if (foo!.bar!.baz) {
    // ...
}
```



##### [建议] 不使用 `any` 声明类型。

示例：

```typescript
// good
const identity = <T>(x: T) => x;

// bad
const identity = (x: any) => x;
```



##### [强制] 使用 `as` 进行类型声明转换，不使用 `<>` 。

示例：

```typescript
// good
const root = document.getElementById('root') as HTMLDivElement;

// bad
const root = <HTMLDivElement>document.getElementById('root');
```



##### [强制] 接口不应为空。



##### [强制] 接口中同一函数重载的类型声明需相邻。

示例：

```typescript
// good
interface AnyInterface {
    foo();
    foo(x: string);
    bar();
    bar(x: number);
}

// bad
interface AnyInterface {
    foo();
    bar();
    foo(x: string);
    bar(x: number);
}
```



### 3.3 条件


##### [强制] 使用 `===` 或 `!==` 判断相等性，不使用 `==` 或 `!=`。

示例：

```typescript
// good
if (foo !== null && foo !== undefined) {
    // ...
}

// bad
if (foo != null) {
    // ...
}
```



### 3.4 循环


##### [建议] 使用 `Object.keys / Object.values / Object.entries / Object.getOwnPropertyNames` 遍历对象，不使用 `for .. in` 。

示例：

```typescript
// good
Object.keys(obj).forEach(key => /* ... */);

// bad
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        // ...
    }
}
```



##### [建议] 索引仅用于获取数组当前被迭代的项时，使用 `for .. of` 遍历数组，不使用 `for` 。

示例：

```typescript
// good
for (const item of items) {
    // ...
}

// bad
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // ...
}
```



### 3.5 数组


##### [建议] 使用 `...` 进行数组浅拷贝，不使用 `Array.from / Array.prototype.slice` 。

示例：

```typescript
// good
const copies = [...items];

// bad
const copies = items.slice();

// worst
let copies = [];
for (let i = 0; i < items.length; i++) {
    copies.push(items[i]);
}
```



##### [建议] 使用 `...` 将类数组对象转化为数组，不使用 `Array.from / Array.prototype.slice` 。

示例：

```typescript
// good
const elements = [...document.querySelectorAll('.foo')];

// bad
const element = Array.from(document.querySelectorAll('.foo'));

// worst
const element = Array.prototype.slice.call(document.querySelectorAll('.foo'));
```



### 3.6 对象


##### [强制] 使用 `...` 进行对象浅拷贝，不使用 `Object.assign` 。

示例：

```typescript
// good
this.setState(state => ({...state, clicked: true}));

// bad
this.setState(state => Object.assign({}, state, {clicked: true}));
```



### 3.7 函数


##### [强制] 避免 `return undefined` ，应直接 `return`。

示例：

```typescript
// good
function foo(bar: boolean) {
    if (!bar) {
        return;
    }
}

// bad
function foo(bar: boolean) {
    if (!bar) {
        return undefined;
    }
}
```



### 3.8 类


##### [建议] 每个文件中最多声明一个类。


##### [强制] 类成员的可访问性为 `public` 时，不应显式声明。

##### [建议] 构造函数可忽略时，应忽略。 

##### [建议] 类成员之间使用空行隔开。

示例：

```typescript
// good
class Button extends PureComponent<ButtonProps, ButtonState> {
    readonly state: ButtonState = {
        clicked: false,
    };

    render() {
        // ...
    }
}

// bad
class Button extends PureComponent<ButtonProps, ButtonState> {
    public state: ButtonState = {
        clicked: false,
    };
    constructor(props: ButtonProps) {
        super(props);
    }
    public render() {
        // ...
    }
}
```



##### [建议] 构造函数初始化实例属性时，应尽量使用参数属性。

##### [建议] 构造函数的参数中，作为属性的参数应排列于其他参数前。

示例：

```typescript
// good
class AppComponent {
    constructor(private readonly heroService: HeroService) {}
}

// bad
class AppComponent {
    private readonly heroService: HeroService;

    constructor(heroService: HeroService) {
        this.heroService = heroService;
    }
}
```


### 3.9 模块


##### [强制] 使用 `ECMAScript 2015` 标准的模块系统。

##### [强制] 除类型声明文件外，不使用 `module / namespace` 关键字。

##### [强制] 不使用 `/// <reference path= >` 。

示例：

```typescript
// good
import foo from 'foo';

// bad
import foo = require('foo');
```



##### [强制] 对于同一个模块路径，仅 `import` 一次。 

示例：

```typescript
// good
import React, {PureComponent} from 'react';

// bad
import React from 'react';
import {PureComponent} from 'react';
```



##### [建议] 对于使用 `webpack` 等构建工具的项目，在模块中引入其他资源（如样式、图片等）时，为资源编写类型声明文件，或使用合适的 `loader` 生成类型声明文件。

示例：

```typescript
// good

// Button.scss.d.ts
export clicked: string;

// logo.png.d.ts
declare const logo: string;

export default logo;

// Button.tsx
import styles from './Button.scss';
import logo from './logo.png';


// bad
const styles = require<any>('./Button.scss');
const logo = require<string>('./logo.png');
```


