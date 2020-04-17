const blogConfig = {
    title:'V房前端文档',
    description: 'V房前端文档',
    head: [
        ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/favicon.ico' }]
    ],
    
    themeConfig: {
        logo: '/assets/1.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '前端规范',
              items: [
                { text: '代码规范', link: '/codeStandard/V房前端规范1.0.md' },
                { text: '分支规范', link: '/branchStandard/代码分支合并.md' }
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/davfang' },
        ],
        sidebar:[
            {
                title: '代码规范',   // 必要的
                path: '/codeStandard/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'V房前端规范1.0',   // 必要的
                        path: 'codeStandard/V房前端规范1.0.md', 
                    }
                ]
            },
            {
                title: '分支规范',   // 必要的
                path: '/branchStandard/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '分支合并',   // 必要的
                        path: 'branchStandard/代码分支合并.md', 
                    }
                ]
            },
        ],
        markdown: {
            lineNumbers: true
        },
        sidebarDepth: 2,    // 可选的, 默认值是 1
        lastUpdated: 'Last Updated', 
    },
    // serviceWorker: true, // PWA
}

module.exports = blogConfig;