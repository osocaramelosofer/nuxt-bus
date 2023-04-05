// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: 'static',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Super Buses Bros',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/goomba.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Paytone+One&display=swap'
        },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  tailwindcss: {
  }
})
