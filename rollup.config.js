import { defineConfig } from 'rollup';

// 代码压缩
import { terser } from 'rollup-plugin-terser';

// 去除无效代码
import cleanup from 'rollup-plugin-cleanup';

// 定位 node_modules 中的模块
import resolve from '@rollup/plugin-node-resolve';

// 解析及编译TS
import typescript from '@rollup/plugin-typescript';

// 转换 CommonJS 模块成 ES6
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [typescript(), resolve(), commonjs(), terser(), cleanup()],
  input: 'src/bin/hello.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    entryFileNames: '[name].js',
    banner: '#!/usr/bin/env node',
  },
});
