const fillPrefix = (filePath) => {
  const prefix = process.env.NODE_ENV === 'production' ? '/react-hooks/' : '/'
  return typeof filePath === 'string' ? prefix + filePath : ''
}

const repo = 'chocolate-hooks'

export default {
  mode: 'site',
  title: repo,
  logo: fillPrefix(`${repo}.svg`),
  links: [{ rel: 'stylesheet', href: fillPrefix('style.css') }],
  resolve: {
    includes: ['docs', 'packages'],
  },
  history: {
    type: 'hash',
  },
  publicPath: process.env.CI ? '/react-hooks/' : '/',
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],
  navs: {
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/ChocolateUI/chocolate-hooks' },
    ],
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/ChocolateUI/chocolate-hooks' },
    ],
  },
}
