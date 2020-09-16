module.exports = {
  markdown: {
    // lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists')) // todo list 支持
      md.set({
        breaks: true, // 转换段落里的 '\n' 到 <br>
        linkify: true,
      })
    },
  },
  plugins: [
    ['copy-code', { // 复制代码
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
    }],
    // ['vuepress-plugin-code-copy', {
    //     successText: `String`
    //     }
    // ],
    ['@vuepress/back-to-top'], // 回到顶部
    ['@vuepress/nprogress'], // 进度条
    ['@vuepress/medium-zoom'], // 图片缩放
    [
      '@vuepress/google-analytics', // 谷歌统计
      {
        'ga': '' // UA-00000000-0
      }
    ]
  ],
  title: `mock-mock`,
  description : `极简, 灵活, 强大的 api 神器, 开箱即用.`,
  themeConfig : {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    search: false,
    sidebarDepth: 2,
    nav: [
      { text: '安装', link: '/use/安装' },
      { text: '配置文件', link: '/config/配置文件' },
      {
        text: '源码',
        link: 'https://github.com/wll8/mock-server',
        // items: [
        //   { text: 'github', link: 'https://github.com/wll8/mock-server' },
        //   { text: 'gitee', link: 'https://gitee.com/projects/new' }
        // ]
      }
    ],
    sidebar: [
      {
        title: `为什么需要它?`,
        collapsable: false,
        description : `解决了什么问题?`,
        children: [
          {
            title: `项目开始`,
            collapsable: false,
            description : `项目开始前的问题`,
            path: `/process/开始`,
          },
          {
            title: `联调过程`,
            collapsable: false,
            description : `联调过程中的问题`,
            path: `/process/过程`,
          },
        ]
      },
      {
        title: `如何使用?`,
        collapsable: false,
        children: [
          {
            title: `安装`,
            collapsable: false,
            description : `各种安装方式, 可能遇到的问题`,
            path: `/use/安装`,
          },
          {
            title: `运行`,
            collapsable: false,
            description : `运行以及问题`,
            path: `/use/运行`,
          },
          {
            title: `预览`,
            collapsable: false,
            description : `请求一个接口, 查看请求头, 及调试页面`,
            path: `/use/预览`,
          },
          {
            title: `上手尝试`,
            collapsable: false,
            description : `创建配置, 添加接口`,
            path: `/use/尝试`,
          },
          {
            title: `内容输出`,
            collapsable: false,
            description : `讲解默认配置下生成的目录或文件, 以及 web 界面的用处`,
            path: `/use/输出`,
          },
        ]
      },
      {
        title: `参数配置`,
        collapsable: false,
        children: [
          {
            title: `命令行`,
            collapsable: false,
            description : `与配置文件的不同, 以及优先及, 可时该用`,
            path: `/config/命令行`,
          },
          {
            title: `配置文件`,
            collapsable: false,
            description : `各种使用方式`,
            path: `/config/配置文件`,
          },
          {
            title: `配置项`,
            collapsable: false,
            description : `各个配置项讲解`,
            path: `/config/选项`,
          },
        ]
      },
      {
        title: `工具库`,
        collapsable: false,
        children: [
          {
            title: `config.fn`,
            collapsable: false,
            description : `config 作为函数时提供的工具`,
            path: `/config/config_fn`,
          },
          {
            title: `config.api.fn`,
            collapsable: false,
            description : `config.api 作为函数时提供的工具`,
            path: `/config/config_api_fn`,
          },
        ]
      },
      {
        title: `开发`,
        collapsable: false,
        children: [
          {
            title: `更新日志`,
            collapsable: false,
            description : `时间表, 功能更新, bug修复`,
            path: `/dev/更新日志`,
          },
          {
            title: `待完成`,
            collapsable: false,
            description : `要完成的, 进行中的, 受阻碍的, 期待获得帮助`,
            path: `/dev/待完成`,
          },
          {
            title: `贡献表`,
            collapsable: false,
            description : `记录除自己以外的贡献者`,
            path: `/dev/贡献表`,
          },
          {
            title: `实现`,
            collapsable: false,
            description : `讲解项目结构, 运作方式, 注意点, 用于帮助他人参考或贡献`,
            path: `/dev/实现`,
          },
        ]
      },
    ]
  }
}