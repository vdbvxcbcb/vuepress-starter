module.exports = {
  dest: 'public',
  head: [
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["link", {rel: "icon", href: "/icon.jpg"}]
  ],
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  markdown: {
    lineNumbers: true // 代码显示行号
  },
  title: "个人笔记",
  description: "学习记录",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { 
        text: "链接", 
        items: [
            { text: "Gitee", link: "https://gitee.com/owo1z" },
        ]
      }
    ],
    sidebar: [
      {
        title: "React",
        collapsable: false,
        children: [
          "/handbook/React/React Basics",
          "/handbook/React/Redux",
          "/handbook/React/React Router",
          "/handbook/React/React Hooks",
        ]
      },
      {
        title: "TypeScript",
        collapsable: false,
        children: [
          "/handbook/TypeScript/TypeScript Notes",
        ] 
      },
    ],
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
    ["@vuepress/last-updated", 
      {
        transformer: (timestamp, lang) => {
          return (new Date(timestamp)).toUTCString() 
        }
    }]
  ]
}