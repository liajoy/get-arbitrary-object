import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  plugins: [
    resolve(),
    commonjs(),
  ],
  output: [
    {
      file: 'dist/hiway.umd.js',
      format: 'umd',
      name: 'fontParser',
      sourceMap: true,
    },
    {
      file: 'dist/hiway.esm.js',
      format: 'es',
      sourceMap: true,
    },
  ],
};
