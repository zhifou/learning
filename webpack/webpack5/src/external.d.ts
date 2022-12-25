import React from "react";

// less模块声明
declare module "*.module.less" {
    const content: { [className: string]: string };
    export = content;
}

// svg类型
declare module "*.svg" {
    const content: React.FunctionComponent<
        React.SVGAttributes<React.ReactSVGElement>
    >;
    export default content;
}
