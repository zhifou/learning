import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import clear from 'rollup-plugin-clear';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import postcss from 'rollup-plugin-postcss';

export default{
  input: ['./src/index.tsx'],
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  plugins: [
    typescript(), // 会自动读取sconfig.json配置文件
    postcss({ 
      extensions: ['.css'], // 将scss解析成css
      extract: true,
      modules: true,
    }),
    clear({
      targets: ['dist']
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production') // 否则会报：process is not defined的错
    }),
    nodeResolve({
    }),
    commonjs(),
    babel(), // 会自动读取babel的配置文件
    terser(),
    serve('dist'),
    livereload('src'), // 当src目录中的文件发生变化时，刷新页面
    htmlTemplate({
      template: 'public/index.html',
      target: 'dist/index.html',
    }),
  ],
  external: [{
    includeDependencies: true,
  }], // 项目中引用的第三方库
}