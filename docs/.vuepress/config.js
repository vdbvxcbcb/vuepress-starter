module.exports = {
  dest: 'public',
  head: [
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["link", { rel: "icon", href: "/icon.jpg" }]
  ],
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  markdown: {
    lineNumbers: true // 代码显示行号
  },
  title: "前端博客笔记",
  description: "如果有一天忘记了所有的前端知识，希望这里能让人回忆起来，转行前纪念",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "React", link: "/React/React Basics" },
      { text: "TypeScript", link: "/TypeScript/TypeScript Notes" },
      { text: "Vue2", link: "/Vue2/Vue2 Basics" },
      { text: "Vue3", link: "/Vue3/Vue3 Basics" },
      { text: "小程序", link: "/Wechat Mini Program/Mini Program Get Started" }
    ],
    sidebar: {
      '/React/': [
        {
          title: 'React',
          collapsable: false,  // 是否可折叠，默认可折叠true 
          children: [
            "React Basics",
            "React Hooks",
            "React Router",
            "Redux"
          ]
        }
      ],
      '/TypeScript/': [
        {
          title: 'TypeScript',
          collapsable: false,  // 是否可折叠，默认可折叠true 
          children: [
            "TypeScript Notes"
          ]
        }
      ],
      '/Vue2/': [
        {
          title: 'Vue2',
          collapsable: false,  // 是否可折叠，默认可折叠true 
          children: [
            "Vue2 Basics",
            "Vue Router",
            "Vuex"
          ]
        }
      ],
      '/Vue3/': [
        {
          title: 'Vue3',
          collapsable: false,  // 是否可折叠，默认可折叠true 
          children: [
            "Vue3 Basics"
          ]
        }
      ],
      '/Wechat Mini Program/': [
        {
          title: '小程序',
          collapsable: false,  // 是否可折叠，默认可折叠true 
          children: [
            "Mini Program Get Started"
          ]
        }
      ]
    },
    subSidebar: "auto",
    lastUpdated: "上次更新",
    valineConfig: {
      appId: "JFn54jJwdUmfq0oorT1ezaUw-gzGzoHsz",// your appId
      appKey: "oXuezI6gUbTASYNv7lF5IzM0", // your appKey
    }
  },
  theme: "reco",
  plugins: [
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "copy",
      tip: {
        content: "复制成功!"
      }
    }],
    ["@vuepress/last-updated", {
      transformer: (timestamp, lang) => {
        return (new Date(timestamp)).toUTCString()
      }
    }]
  ]
}