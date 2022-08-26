// ---------------------------------------
// "XUI"
// Created by Vikas Kumar (@viktapas)
// © KredX (Minions Ventures Pvt. Ltd.)
// ---------------------------------------

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

const packageJson = require("./package.json");

export default [
  {
    external: [
      'react',
      'react-dom',
    ],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/__tests__/**",
          "**/*.test.tsx",
          "**/stories/**",
          "**/*.stories.tsx",
          "**/assets/fonts/**"
        ]
       }),
       getBabelOutputPlugin({
         presets: ['@babel/preset-env']
       })
    ]
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];