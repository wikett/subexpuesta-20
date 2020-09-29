export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  generate: {
    fallback: true,
    subFolders: true,
  },
  router: {
    base: '/',
    trailingSlash: true,
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Subexpuesta.com | Comunidad sobre fotografía nocturna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://rsms.me/inter/inter.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/vClickOutside', mode: 'client' },
    { src: '@/plugins/leaflet.js', mode: 'client' },
    { src: '@/plugins/vuelazy.js', mode: 'client' },
    { src: '~/plugins/seo.js' },
    '~/plugins/jsonld',
    '~/plugins/gtm',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/gtm',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-leaflet',
    '@nuxtjs/cloudinary',
    'vue-social-sharing/nuxt',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  pwa: {
    meta: {
      title: 'subexpuesta.com',
      author: 'Quique Aparicio',
    },
    manifest: {
      name: 'Comunidad para fotógrafos nocturnos',
      short_name: 'Subexpuesta.com',
      lang: 'es',
    },
  },
  axios: {},
  cloudinary: {
    cloudName: 'djhqderty',
    useComponent: false,
  },
  gtm: {
    enabled: true, // Siempre activo por si queremos debuguear en dev o stagging
    layer: 'dataLayer',
    id: 'GTM-T7WLXS6',
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    nestedProperties: ['author.name'],
    markdown: {
      remarkPlugins: ['remark-emoji'],
      remarkExternalLinks: {
        target: '_blank',
        rel: 'nofollow',
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
