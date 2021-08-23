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
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-7593479892835011',
        async: true,
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
    { src: '~/plugins/mapHelper.js', mode: 'client' },
    { src: '~/plugins/myHelpers.js', mode: 'client' },
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
  buildModules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/gtm',
    'nuxt-leaflet',
    '@nuxtjs/cloudinary',
    'vue-social-sharing/nuxt',
    'cookie-universal-nuxt',
    '@nuxtjs/firebase',
  ],
  env: {
    gcpApi: process.env.GCP_API,
  },
  firebase: {
    config: {
      apiKey: process.env.FIRE_APIKEY,
      authDomain: process.env.FIRE_AUTHDOMAIN,
      databaseURL: process.env.FIRE_DATABASEURL,
      projectId: process.env.FIRE_PROJECTID,
      storageBucket: process.env.FIRE_STORAGEBUCKET,
      messagingSenderId: process.env.FIRE_MESSAGINGSENDERID,
      appId: process.env.FIRE_APPID,
      measurementId: process.env.FIRE_MEASUREMENTEID,
    },
    onFirebaseHosting: false,
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedAction',
        },
        ssr: false, // default
      },
      firestore: true,
      storage: true,
    },
  },
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
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      dev: false,
    },
  },
  axios: {
    credentials: false,
    proxy: true,
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME,
  },
  // useComponent: false,
  // apiKey: process.env.CLOUDINARY_API_KEY,
  // apiSecret: process.env.CLOUDINARY_API_SECRET,

  gtm: {
    enabled: true, // Siempre activo por si queremos debuguear en dev o stagging
    layer: 'dataLayer',
    autoInit: false,
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
