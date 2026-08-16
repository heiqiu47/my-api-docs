import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "水秋喵 API使用教程",
  // 自定义域名部署，站点位于根路径
  base: '/',
  vite: {
    server: {
      watch: {
        // 忽略 VitePress 的临时目录，避免 Windows 下 EBUSY 崩溃。
        // VitePress 在启动时(配置文件)和每次 HMR 更新 .md 时，都会在被处理文件
        // 旁边创建临时目录，命名形如 .config.mts.<pid>.<uuid>.tmpdir /
        // .chatbox.md.<pid>.<uuid>.tmpdir，因此统一匹配 .tmpdir。
        ignored: [
          /\.tmpdir/,
          /\.vitepress[\\/]cache/,
          /\.vitepress[\\/]dist/,
          // 编辑器原子保存产生的临时文件，如 index.md~RF10892731.TMP（Windows 记事本等）
          /~\w+\.TMP/i,
          /\.swp$/
        ]
      }
    }
  },
  description: "酒馆、ChatBox、CC Switch、Cherry Studio、RikkaHub 等常见平台的 API 使用教程，附完整模型列表与价格",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'API使用教程', link: '/guide/' },
      { text: '模型列表', link: '/guide/models' },
      { text: '水秋喵的小店', link: 'https://shop356416683.taobao.com/' }
    ],

    sidebar: [
      { text: '模型列表', link: '/guide/models' },
      {
        text: 'API使用教程',
        link: '/guide/',
        items: [
          { text: '酒馆 (SillyTavern)', link: '/guide/sillytavern' },
          { text: 'ChatBox', link: '/guide/chatbox' },
          { text: 'CC Switch', link: '/guide/cc-switch' },
          { text: 'Cherry Studio', link: '/guide/cherry-studio' },
          { text: 'RikkaHub', link: '/guide/rikkahub' }
        ]
      }
    ]

    // 如需展示店铺/联系方式，在这里加 socialLinks，例如：
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/your-repo' }
    // ]
  }
})
