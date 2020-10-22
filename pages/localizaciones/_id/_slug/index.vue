<template>
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div v-show="!isLoaded">
      <img
        class="object-contain w-full h-32"
        src="~/assets/img/Eclipse-1s-200px.gif"
      />
    </div>
    <div class="content-center">
      <a :href="getUrlImage()" target="_blank">
        <img
          class="w-full max-w-lg mx-auto mt-4 object-fit h-128 max-h-3/4"
          :src="getCloudinaryUrl(loc.cloudinaryId)"
          @load="onImgLoad"
        />
      </a>
    </div>
    <!-- <div class="content-center">
      <img
        class="w-full max-w-lg mx-auto mt-4 object-fit h-128 max-h-3/4"
        :src="fullCloudinary"
        @load="onImgLoad"
      />
    </div> -->
    <div class="flex flex-wrap mb-4">
      <div class="w-full h-auto sm:w-full lg:w-1/2">
        <div class="bg-gray-50">
          <div
            class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8"
          >
            <h1
              class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10"
            >
              {{ loc.titulo }}
            </h1>
            <span class="text-base text-gray-600">
              por
              <nuxt-link :to="getUrlAuthor()"
                ><strong class="text-bold">{{ loc.autor }}</strong></nuxt-link
              ></span
            >
            <div class="pt-6 mt-6 border-t-2 border-gray-200">
              <dl>
                <div class="md:grid md:grid-cols-12 md:gap-8">
                  <dt
                    class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                  >
                    Acceso
                  </dt>
                  <dd class="mt-2 md:mt-0 md:col-span-7">
                    <p class="text-base leading-6 text-gray-500">
                      {{ loc.acceso }}
                    </p>
                    <p class="text-base leading-6 text-gray-500">
                      Contaminación lumnínica:
                      <span class="text-gray-900 text-bold"
                        >{{ loc.contaminacionLuminica }} / 10</span
                      >
                    </p>
                    <p class="text-base leading-6 text-gray-500">
                      Peligrosidad de la zona:
                      <span class="text-gray-900 text-bold"
                        >{{ loc.peligrosidad }} / 10</span
                      >
                    </p>
                  </dd>
                </div>
                <div
                  class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt
                    class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                  >
                    Coordenadas
                  </dt>
                  <dd class="mt-2 md:mt-0 md:col-span-7">
                    <p class="text-base leading-6 text-gray-500">
                      Latitud: {{ loc.latitud }}
                    </p>
                    <p class="text-base leading-6 text-gray-500">
                      Longitud: {{ loc.longitud }}
                    </p>
                    <a
                      :href="getMapsUrl()"
                      target="_blank"
                      class="text-teal-600"
                      >Abrir en Google Maps</a
                    >
                  </dd>
                </div>
                <div
                  v-if="loc.categoria"
                  class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt
                    class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                  >
                    Categoría
                  </dt>
                  <dd class="mt-2 md:mt-0 md:col-span-7">
                    <p class="text-base leading-6 text-gray-500">
                      {{ getCategoryIcon(loc.categoria) }}
                    </p>
                  </dd>
                </div>
                <div
                  v-if="loc.tags.length > 0"
                  class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt
                    class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                  >
                    Tags
                  </dt>
                  <dd class="mt-2 md:mt-0 md:col-span-7">
                    <span
                      v-for="(item, index) in loc.tags"
                      :key="index"
                      class="text-base leading-6 text-gray-500"
                    >
                      {{ item }},&nbsp;
                    </span>
                  </dd>
                </div>
                <div
                  class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt
                    class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                  >
                    Fecha de la toma
                  </dt>
                  <dd class="mt-2 md:mt-0 md:col-span-7">
                    <p class="text-base leading-6 text-gray-500">
                      {{ getFecha() }}
                    </p>
                  </dd>
                </div>
                <div
                  class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt
                    class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                  >
                    Localización
                  </dt>
                  <dd class="mt-2 md:mt-0 md:col-span-7">
                    <p class="text-base leading-6 text-gray-500">
                      {{ loc.ciudad }} ({{ loc.provincia }})
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-auto px-2 py-2 sm:w-full lg:w-1/2 lg:px-8 lg:py-8 lg:mt-12"
      >
        <div id="map-wrap" class="z-10" style="height: 60vh">
          <client-only>
            <l-map :zoom="zoom" :center="center">
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <l-marker :lat-lng="[loc.latitud, loc.longitud]"></l-marker>
            </l-map>
          </client-only>
        </div>
        <div>
          <p class="mt-2 text-base text-gray-700">
            Comparte la localización con tus amigos:
          </p>
          <ShareNetwork
            network="facebook"
            :url="fullUrl"
            :title="loc.titulo"
            :description="loc.acceso"
            :quote="fullQuote"
            :hashtags="fullTags"
            :media="fullCloudinary"
          >
            <button
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-8 h-8"
                src="~/assets/img/icons8-facebook-50.png"
                alt="Comparte en Facebook"
              />
            </button>
          </ShareNetwork>
          <ShareNetwork
            network="twitter"
            :url="fullUrl"
            :title="loc.titulo"
            :description="loc.acceso"
            :quote="fullQuote"
            :hashtags="fullTags"
          >
            <button
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-8 h-8"
                src="~/assets/img/icons8-twitter-50.png"
                alt="Comparte en Twitter"
              />
            </button>
          </ShareNetwork>
          <ShareNetwork
            network="telegram"
            :url="fullUrl"
            :title="loc.titulo"
            :description="loc.acceso"
            :quote="fullQuote"
            :hashtags="fullTags"
          >
            <button
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-8 h-8"
                src="~/assets/img/icons8-telegram-app-50.png"
                alt="Comparte en Telegram"
              />
            </button>
          </ShareNetwork>
          <ShareNetwork
            network="WhatsApp"
            :url="fullUrl"
            :title="loc.titulo"
            :description="loc.acceso"
            :quote="fullQuote"
            :hashtags="fullTags"
          >
            <button
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-8 h-8"
                src="~/assets/img/icons8-whatsapp-48.png"
                alt="Comparte en Telegram"
              />
            </button>
          </ShareNetwork>
        </div>
        <div class="w-full mx-auto mt-4">
          <nuxt-link to="/mapa-localizaciones/">
            <button
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-700 border border-transparent rounded-md shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-500 focus:shadow-outline-teal sm:text-sm sm:leading-5"
            >
              Volver al mapa
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const loc = await $content('localizaciones', params.id).fetch()
    let fullCloudinary = loc.cloudinaryId
    // if (!fullCloudinary.includes('subexpuesta')) {
    //   fullCloudinary = 'subexpuesta/' + fullCloudinary
    // }
    fullCloudinary = `https://res.cloudinary.com/djhqderty/image/upload/c_scale,f_auto,q_60,w_1024/${fullCloudinary}.jpg`
    const fullQuote = `Contaminación Lumínica: ${loc.contaminacionLuminica}/10 Peligrosidad de la zona: ${loc.peligrosidad}/10`
    let fullTags = 'subexpuesta.com, localizaciones'
    if (loc.tags.length > 0) fullTags += loc.tags

    return { loc, fullCloudinary, fullQuote, fullTags }
  },
  data() {
    return {
      center: null,
      zoom: 16,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      isLoaded: false,
      fullUrl: 'https://www.subexpuesta.com' + this.$nuxt.$route.path,
    }
  },
  mounted() {
    this.center = this.$L.latLng(this.loc.latitud, this.loc.longitud)
    // this.fullUrl = this.$nuxt.$route.fullPath
  },
  methods: {
    getUrlAuthor() {
      return `/usuario/${this.loc.autor}/`
    },
    getFecha() {
      const fecha = new Date(this.loc.fechaToma.$date)
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }

      return fecha.toLocaleDateString('es-ES', options)
    },
    getMapsUrl() {
      return `https://www.google.es/maps/@${this.loc.latitud},${this.loc.longitud},15z`
    },
    getUrlImage() {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto/v1/${this.loc.cloudinaryId}`
    },
    getImagen(imagenCloud) {
      console.log(`getImagen`)
      console.log(imagenCloud)
      if (!imagenCloud.includes('subexpuesta')) {
        imagenCloud = 'subexpuesta/' + imagenCloud
      }
      return `https://res.cloudinary.com/djhqderty/image/upload/ar_1.5,c_crop,f_auto,g_center,q_60,x_0/v1598176315/${imagenCloud}.jpg`
    },
    getCategoryIcon(category) {
      switch (category) {
        case 0: // Nocturna Paisaje
          return 'Paisaje Nocturno'

        case 1: // Nocturna Urbana
          return 'Nocturna Urbana'

        case 2: // Nocturna Lightpainting
          return 'Lightpainting'

        case 3: // Nocturna Monumentos
          return 'Nocturna Monumentos'

        case 4: // Nocturna Ruinas
          return 'Nocturna Ruinas'

        case 5: // Nocturna Vehículo-Maquinaria
          return 'Nocturna Vehículo-Maquinaria'

        case 6: // Nocturna Minería
          return 'Nocturna Minería'

        case 7: // Atardecer-Amanecer
          return 'Atardecer-Amanecer'

        case 8: // Larga Exposición Diurna
          return 'Larga Exposición Diurna'

        case 9: // Drone
          return 'Dron'
      }
    },
    onImgLoad() {
      this.isLoaded = true
    },
    getCloudinaryUrl(idCloudinary) {
      return this.$cloudinary().url(idCloudinary, {
        width: 1200,
        fetchFormat: 'auto',
        quality: 60,
      })
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: `${this.loc.titulo} - Subexpuesta.com`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `📷 Localización fotográfica: ${this.loc.titulo} por ${this.loc.autor}. Contaminación lumnínica: ${this.loc.contaminacionLuminica} / 10 Peligrosidad de la zona: ${this.loc.peligrosidad} / 10`,
        },
        // OG Meta Tags
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1508658239428785',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.loc.titulo,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.loc.acceso,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.fullCloudinary,
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'es_ES',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Subexpuesta.com',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://www.subexpuesta.com${this.$route.path}`,
        },

        // Twitter Meta Tags, if they are missing then these are replaced by OG tags
        {
          hide: 'twitter:card',
          name: 'twitter:card',
          content: this.loc.acceso,
        },
        {
          hide: 'twitter:site',
          name: 'twitter:site',
          content: '@subexpuesta_com',
        },
        {
          hide: 'twitter:image',
          name: 'twitter:image',
          content: this.fullCloudinary,
        },

        {
          hide: 'twitter:title',
          name: 'twitter:title',
          content: this.loc.titulo,
        },
        {
          hide: 'twitter:description',
          name: 'twitter:description',
          content: this.loc.acceso,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://www.subexpuesta.com${this.$route.path}`,
        },
      ],
    }
  },

  jsonld() {
    return {
      // https://developers.google.com/search/docs/data-types/image-license-metadata?hl=es
      '@context': 'https://schema.org/',
      '@type': 'ImageObject',
      contentUrl: this.fullCloudinary,
      license: 'https://creativecommons.org/licenses/by-nc/4.0/',
      acquireLicensePage: 'https://creativecommons.org/licenses/by-nc/4.0/',
    }
  },
}
</script>
