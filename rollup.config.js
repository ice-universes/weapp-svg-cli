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

const plugins = [typescript(), resolve(), commonjs(), terser(), cleanup()];

export default defineConfig([
  {
    plugins: plugins,
    input: ['src/bin/help.ts', 'src/bin/init.ts', 'src/bin/generate.ts'],
    output: {
      dir: 'dist/bin',
      format: 'es',
      entryFileNames: '[name].js',
      banner: '#!/usr/bin/env node',
    },
  },
  {
    plugins: plugins,
    input: [
      'src/libs/generate.ts',
      'src/libs/getConfig.ts',
      'src/libs/getSvg.ts',
      'src/libs/getTemplate.ts',
      'src/libs/replace.ts',
      'src/libs/utils.ts',
    ],
    output: {
      dir: 'dist/libs',
      format: 'es',
      entryFileNames: '[name].js',
    },
  },
  {
    plugins: plugins,
    input: ['src/template/weapp.ts'],
    output: {
      dir: 'dist/template',
      format: 'es',
      entryFileNames: '[name].js',
    },
  },
]);
