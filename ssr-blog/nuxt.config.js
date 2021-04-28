module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'iakovleva-ida-project-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend test task ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/main'],
  plugins: [ // подключение плагинов
    '~/plugins/currency.js',
    '~/plugins/capitalize.js',
    '~/plugins/toggleHtmlOverflow.js',
    '~/plugins/vue-plugins.js',
  ],
  modules: [ // модуль для использования глобальных стилей sass
    '@nuxtjs/style-resources',
  ],
  styleResources: { // указываем глобальные стили sass
    sass: [
      '~/assets/main.sass',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

