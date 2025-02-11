import { defineConfigWithTheme } from 'vitepress'
import { ThemeLinearConfig, getPosts } from 'vitepress-theme-linear/config'

async function load() {
  return defineConfigWithTheme<ThemeLinearConfig>({
    title: 'josema/dev',
    description: 'Love for life and frontend tech.',
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      },
    },
    cleanUrls: true,
    themeConfig: {
      posts: await getPosts('es-ES', 'Europe/Madrid'),
      links: [
        { name: 'Quién soy', link: '/', icon: 'fa-solid fa-at' },
        { name: 'Mi stack', link: '/technologies', icon: 'fa-solid fa-laptop-code' },
        { name: 'Mis estudios', link: '/education', icon: 'fa-solid fa-graduation-cap' },
        { name: 'Mi carrera profesional', link: '/career', icon: 'fa-solid fa-crosshairs' },
        { name: 'Dónde encontrarme', link: '/links', icon: 'fa-solid fa-link' },
        /*{ name: '文章', link: '/posts', icon: '' },
        { name: '推文', link: '/tweets', icon: '' },
        { name: '友联', link: '/links', icon: '' },
        { name: '关于我', link: '/about', icon: '' },
        { name: '更新日志', link: '/log', icon: '' },*/
      ],
      favicon: '/favicon.svg',
      googleId: process.env.GOOGLE_TAG,
      waline: {
        serverURL: 'https://blog-comment-yysuen.vercel.app/',
        requiredMeta: ['nick', 'mail'],
        reaction: ['/assets/images/thumbs_up.svg'],
        locale: {
          reactionTitle: '',
        },
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg'
      }
    },
    head: [
      [
        'link',
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ],
    ]
  })
}

export default load()
