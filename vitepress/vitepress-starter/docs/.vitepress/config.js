module.exports = {
    title: '应星工具库', // 标题
    description: 'Just playing around.', // 副标题
    themeConfig: {
      // 顶部导航栏内容
      nav: [{ text: '指南', link: '/guide/' }, { text: '夜间', link: '/y/' }],
      // 侧边栏导航内容
      sidebar: {
        '/guide/': [
          {
            text: '指南',
            children: [
              { text: '介绍', link: '/guide/' },
              { text: '快速上手', link: '/guide/getting-started' },
            ],
          },
        ],
      },
    },
  };
  