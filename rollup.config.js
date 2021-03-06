import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/assets/js/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
    commonjs(), // CommonJSモジュールをES6に変換
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }), // ES5に変換
    // minify()
  ]
};
