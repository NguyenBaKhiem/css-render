const { terser } = require('rollup-plugin-terser')
const path = require('path')

module.exports = {
  input: {
    input: path.resolve(__dirname, 'esm/index.js')
  },
  output: [
    {
      file: path.resolve(__dirname, 'dist/css-render.cjs.js'),
      format: 'cjs',
      exports: 'named'
    },
    {
      file: path.resolve(__dirname, 'dist/css-render.esm.js'),
      format: 'es'
    },
    {
      file: path.resolve(__dirname, 'dist/css-render.esm.min.js'),
      format: 'es',
      plugins: [
        terser({
          compress: true,
          mangle: true
        })
      ]
    },
    {
      file: path.resolve(__dirname, 'dist/css-render.cjs.min.js'),
      format: 'cjs',
      exports: 'named',
      plugins: [
        terser({
          compress: true,
          mangle: true
        })
      ]
    }
  ]
}
