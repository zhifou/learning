const path = require('path')
module.exports = {
    dest: 'vuepress',
    palette: path.resolve(__dirname, 'override.styl'),

    themeConfig: {
        // 默认为ViteP ress 设置false不显示
        siteTitle: 'yinqingyang blog',
        logo:'/logo.png',

        // 头部右侧导航
        // activeMatch 点击导航时 保持菜单高亮
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' , activeMatch:'/guide/' },
            { text: '配置', link: '/config/',activeMatch:'/config/' },
            { text: 'Configs',
                items: [
                    { text: '开发团队', link: '/item1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            },
            // Memu 可以设置分组
            {
                text: 'Dropdown Menu',
                items: [
                  {
                    text:'分组1',
                    items: [
                      { text: 'Section A Item A', link: '...' },
                      { text: 'Section B Item B', link: '...' }
                    ]
                  },
                  {
                    text:'分组2',
                    items: [
                      { text: 'Section A Item A', link: '...' },
                      { text: 'Section B Item B', link: '...' }
                    ]
                  }
                ]
            }        
        ],

        // 社交 
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
            //   
            {
              icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
              },
              link: '...'
            }
        ],

        // sidebar
        sidebar: {
            '/guide/': [
              {
                text: '指南',
                // 是否可以展开
                collapsible: true,
                items: [
                  // This shows `/guide/index.md` page.
                  { text: 'Index', link: '/guide/' }, // /guide/index.md
                  { text: 'One', link: '/guide/one' }, // /guide/one.md
                  { text: 'Two', link: '/guide/two' } // /guide/two.md
                ]
              }
            ],
      
            '/config/': [
              {
                text: '配置',
                items: [
                  // This shows `/config/index.md` page.
                  { text: 'Index', link: '/config/' }, 
                  { text: 'One', link: '/config/one' }, 
                  { text: 'Two', link: '/config/two' } ,
                  { text: 'Three', link: '/config/three' } 
                ]
              }
            ]
        }
    } 
}  