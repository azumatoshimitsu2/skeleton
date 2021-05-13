import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel';
import notify from 'rollup-plugin-notify';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/assets/js/bundle.js',
    format: 'cjs',
    compact: true
  },
  plugins: [
    notify(),
    resolve({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
    commonjs(), // CommonJSモジュールをES6に変換
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }) // ES5に変換
  ]
};
