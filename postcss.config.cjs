module.exports = {
  plugins: [
    // 添加一个简单的日志插件作为第一个插件
    {
      postcssPlugin: 'test-logger',
      Once(root, { result }) {
        console.log('PostCSS配置已成功加载！');
        console.log('处理的文件:', result.opts.from);
      }
    },
    require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-each')({
      plugins: {
        beforeEach: [
          require('postcss-for'),
          require('postcss-color-mix')
        ]
      }
    })
  ]
}
