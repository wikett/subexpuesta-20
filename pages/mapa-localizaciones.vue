<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="py-12 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h1
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Mapa de localizaciones para fotografia nocturna
          </h1>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Más de 1000
            <strong class="text-bold">localizaciones para fotografía</strong>
            tanto nocturna, de paisaje, lightpainting o de larga duración.
            Comparte con nuestra comunidad estos magníficos lugares.
          </p>
        </div>

        <span class="mt-4 text-base leading-6 text-gray-500"
          >Total localizaciones: {{ localizacionesList.length }}</span
        >
        <div id="map-wrap" class="z-10" style="height: 60vh">
          <client-only>
            <l-map :zoom="6" :center="center">
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <!-- <l-marker :lat-lng="[40.4381311, -3.8196202]"></l-marker>
              <l-marker :lat-lng="[39.4381311, -3.8196202]"></l-marker>
              <l-marker
                :lat-lng="getPosition(locations[0].lat, locations[0].long)"
              ></l-marker> -->
              <v-marker-cluster>
                <l-marker
                  v-for="(loc, index) in locations"
                  :key="index"
                  :lat-lng="loc"
                  @click="showLocation(index)"
                >
                </l-marker>
              </v-marker-cluster>
            </l-map>
          </client-only>
        </div>
      </div>
    </div>
    <div v-if="modalIsOpen" class="fixed z-1001 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
        <div
          class="inline-block align-bottom bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              class="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              aria-label="Close"
              @click="modalIsOpen = false"
            >
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="sm:flex sm:items-start">
            <!-- <div
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <svg
                class="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div> -->
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                id="modal-headline"
                class="text-lg leading-6 font-medium text-gray-300"
              >
                {{ activeLocation.titulo }}
              </h3>
              <div class="mt-2">
                <div v-show="!isLoaded">
                  <img
                    class="object-contain h-52 w-full"
                    src="~/assets/img/Eclipse-1s-200px.gif"
                  />
                </div>
                <transition name="fade">
                  <img
                    v-show="isLoaded"
                    name="fade"
                    class="object-fit w-full"
                    :src="activeImage"
                    @load="onImgLoad"
                  />
                </transition>
              </div>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  {{ activeLocation.acceso }}
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:w-auto">
              <nuxt-link
                :to="getSeoUrl(activeLocation.id, activeLocation.titulo)"
              >
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-teal-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-500 focus:shadow-outline-teal transition ease-in-out duration-150 sm:text-sm sm:leading-5 md:ml-4"
                >
                  Ver localización
                </button>
              </nuxt-link>
            </span>

            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                @click="modalIsOpen = false"
              >
                Cerrar
              </button>
            </span>
          </div>
          <div>
            <span class="flex w-full rounded-md shadow-sm sm:w-auto md:ml-4">
              <nuxt-link
                class="text-sm text-teal-500 underline text-right"
                :to="getSeoUrl(activeLocation.id, activeLocation.titulo)"
                target="_blank"
              >
                Abrir en pestaña nueva
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
        <li>
          <div class="flex">
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                👥 Comparte con la comunidad
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Una comunidad para aprender sobre fotografía y en concreto en la
                fotografía nocturna.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                🕵️‍♀️ Explora nuevas localizaciones
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Si vas de viaje y quieres fotografiar las localizaciones típicas
                del lugar, aquí tienes el mapa de localizaciones para fotografía
                nocturna que no te puedes perder.
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="ml-4 mt-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                🌈 Nuestras categorías
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Explora nuestras localizaciones fotográficas en estas
                categorías: <span class="text-red-700">Paisaje Nocturno</span>,
                <span class="text-orange-700">Nocturna Urbana</span>,
                <span class="text-yellow-700">Lightpainting</span>,
                <span class="text-green-700">Nocturna Monumentos</span>,
                <span class="text-teal-700">Nocturna Ruinas</span>,
                <span class="text-blue-700">Nocturna Vehículo-Maquinaria</span>,
                <span class="text-blue-400">Nocturna Minería</span>,
                <span class="text-orange-500">Atardecer-Amanecer</span>,
                <span class="text-red-500">Larga Exposición Diurna</span>,
                <span class="text-yellow-500">Dron</span>
              </p>
            </div>
          </div>
        </li>
        <li class="mt-10 md:mt-0">
          <div class="flex">
            <div class="ml-4 mt-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                📱 Comunidad siempre viva
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Únete a nuestra comunidad de
                <a
                  href="https://telegram.me/subexpuesta"
                  class="underline text-blue-500"
                  target="_blank"
                  >Telegram</a
                >
                dando apoyo a nuevos fotógrafos y compartiendo momentos cada
                día.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-4 mx-auto">
      <iframe
        src="https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ez&f=ifr&linkID=e5529d122ac498da54c22470d207e495&t=subexpuesta00-21&tracking_id=subexpuesta00-21"
        class="mx-auto"
        width="728"
        height="90"
        scrolling="no"
        border="0"
        marginwidth="0"
        style="border: none"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import jsondata from '@/assets/data/localizaciones.json'

export default {
  data() {
    return {
      localizacionesList: jsondata,
      center: null,
      zoom: 6,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      locations: [],
      modalIsOpen: false,
      activeLocation: null,
      activeImage:
        'https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif',
      isLoaded: false,
    }
  },
  mounted() {
    this.center = this.$L.latLng(40.41322, -1.219482)
    this.localizacionesList.forEach((item) => {
      this.locations.push(this.$L.latLng(item.latitud, item.longitud))
    })
  },
  methods: {
    onImgLoad() {
      this.isLoaded = true
    },
    getSeoUrl(id, url) {
      return `/localizaciones/${id}/${this.$convertSEO(url)}`
    },
    showLocation(index) {
      this.isLoaded = false
      this.modalIsOpen = true
      this.activeLocation = this.localizacionesList[index]
      let imagenCloud = this.localizacionesList[index].cloudinaryId
      if (!imagenCloud.includes('subexpuesta')) {
        imagenCloud = 'subexpuesta/' + imagenCloud
      }

      this.activeImage = this.$cloudinary().url(imagenCloud, {
        crop: 'scale',
        width: 500,
        fetchFormat: 'auto',
        quality: 'auto',
      })
      // 'https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_60,w_500/v1598779791/' +
      //   imagenCloud
    },
    getPosition(newLat, newLong) {
      /* const newPosicion = []
      newPosicion.push(newLat)
      newPosicion.push(newLong)
      return newPosicion */
      return this.$L.latLng(newLat, newLong)
    },
    // latLng(newLat, newLong) {
    //   const newPosicion = []
    //   newPosicion.push(newLat)
    //   newPosicion.push(newLong)
    //   return newPosicion
    // },
    zoomUpdate(zoom) {
      this.currentZoom = zoom
    },
    centerUpdate(center) {
      this.currentCenter = center
    },
    showLongText() {
      this.showParagraph = !this.showParagraph
    },
    innerClick() {
      alert('Click!')
    },
  },
  head: {
    title: 'Mapa de Localizaciones fotográficas',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '🌍 Mapa con más de 1000 localizaciones para fotografía tanto nocturna, de paisaje, lightpainting o de larga duración.',
      },
    ],
  },
}
</script>
