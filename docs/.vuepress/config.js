module.exports = {
  title: '欢迎来到敏敏你好的技术空间！',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true ,// 默认值：false
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: '首页', link: '/' },
      { text: '练习', link: '/test/' },
      { text: '外部链接', link: 'https://baidu.com' },
    ],
    sidebar:[
      ['/test/', '侧边栏联系']
    ],
  },
}
