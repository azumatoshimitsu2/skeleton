import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/assets/js/bundle.js',
    format: 'cjs',
    compact: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }) // ES5に変換
    // ,uglify()
  ]
};
