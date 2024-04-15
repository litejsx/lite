import requireTransform from 'vite-plugin-require-transform' // 1. 引入插件
export default {
  build: {
    minify: false,
  },
  plugins: [
    // requireTransform({
    //     fileRegex: /.js$/,
    // }),
  ],
}