/* eslint-disable new-cap */
<template>
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="py-12 bg-white">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h1
            class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Mapa de localizaciones para fotografia nocturna
          </h1>
          <p class="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
            Más de 1000
            <strong class="text-bold">localizaciones para fotografía</strong>
            tanto nocturna, de
            <span class="cursor-pointer" @click="filtrarLocalizaciones(7)"
              >paisaje</span
            >, lightpainting o de larga duración. Comparte con nuestra comunidad
            estos magníficos lugares.
          </p>
        </div>

        <span
          v-if="cargandoLocalizaciones"
          class="mt-6 text-base leading-6 text-gray-500"
          >Cargando localizaciones...</span
        >
        <span v-else class="mt-6 text-base leading-6 text-gray-500"
          >Total localizaciones: {{ localizacionesList.length }}</span
        >
        <div v-if="isReady" id="map-wrap" class="z-10" style="height: 60vh">
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
                  v-for="(loc, index) in localizacionesList"
                  :key="index"
                  :lat-lng="getLoc(loc)"
                  @click="showLocation(index)"
                >
                </l-marker>
              </v-marker-cluster>
            </l-map>
          </client-only>
        </div>
      </div>
    </div>
    <div v-if="modalIsOpen" class="fixed inset-0 overflow-y-auto z-1001">
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <div
          class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-900 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
            <button
              type="button"
              class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-label="Close"
              @click="modalIsOpen = false"
            >
              <!-- Heroicon name: x -->
              <svg
                class="w-6 h-6"
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
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                id="modal-headline"
                class="text-lg font-medium leading-6 text-gray-300"
              >
                {{ activeLocation.titulo }}
              </h3>
              <div class="mt-2">
                <div v-show="!isLoaded">
                  <img
                    class="object-contain w-full h-52"
                    src="~/assets/img/Eclipse-1s-200px.gif"
                  />
                </div>
                <transition name="fade">
                  <img
                    v-show="isLoaded"
                    name="fade"
                    class="w-full object-fit"
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
                  class="inline-flex justify-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-700 border border-transparent rounded-md shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-500 focus:shadow-outline-teal sm:text-sm sm:leading-5 md:ml-4"
                >
                  Ver localización
                </button>
              </nuxt-link>
            </span>

            <span
              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                @click="modalIsOpen = false"
              >
                Cerrar
              </button>
            </span>
          </div>
          <div>
            <span class="flex w-full rounded-md shadow-sm sm:w-auto md:ml-4">
              <nuxt-link
                class="text-sm text-right text-teal-500 underline"
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
              <h4 class="text-lg font-medium leading-6 text-gray-900">
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
              <h4 class="text-lg font-medium leading-6 text-gray-900">
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
            <div class="mt-4 ml-4">
              <h4 class="text-lg font-medium leading-6 text-gray-900">
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
            <div class="mt-4 ml-4">
              <h4 class="text-lg font-medium leading-6 text-gray-900">
                📱 Comunidad siempre viva
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Únete a nuestra comunidad de
                <a
                  href="https://telegram.me/subexpuesta"
                  class="text-blue-500 underline"
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
  </div>
</template>

<script>
// import jsondata from '@/assets/data/localizaciones.json'

export default {
  asyncData(context) {
    return { isReady: false }
  },
  data() {
    return {
      originalLocalizaciones: null,
      localizacionesList: null,
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
      cargandoLocalizaciones: true,
    }
  },
  mounted() {
    this.center = this.$L.latLng(40.41322, -1.219482)
    // this.localizacionesList.forEach((item) => {
    //   this.locations.push(this.$L.latLng(item.latitud, item.longitud))
    // })

    this.isReady = true
    // this.getLocalizaciones()
    this.getMongoLocas()
  },
  methods: {
    getLoc(loc) {
      return this.$L.latLng(loc.latitud, loc.longitud)
    },
    filtrarLocalizaciones(categoria) {
      this.localizacionesList = this.originalLocalizaciones.filter(
        (item) => item.categoria === categoria
      )
    },
    async getMongoLocas() {
      try {
        this.$axios.setHeader('Content-Type', 'application/json')
        this.localizacionesList = await this.$axios.$get(
          '/.netlify/functions/mongo-listar'
        )
        this.originalLocalizaciones = this.localizacionesList

        // msg.forEach((item) => {
        //   this.localizacionesList.push(item)
        //   this.originalLocalizaciones.push(item)
        // })
        this.cargandoLocalizaciones = false
        // fetch('/.netlify/functions/hello-world', {
        //   headers: { accept: 'Accept: application/json' },
        // }).then((message) => console.log(message))
      } catch (e) {
        this.error = e.response
        this.response = '—'
      }
    },
    async getLocalizaciones() {
      const localizacionesDetail = this.$fireStore.collection('localizaciones')
      try {
        const snapshot = await localizacionesDetail.get()
        const docs = snapshot.docs

        docs.forEach((item) => {
          const valorLocalizacion = item.data()
          this.localizacionesList.push(valorLocalizacion)
          this.originalLocalizaciones.push(valorLocalizacion)
          this.locations.push(
            this.$L.latLng(
              valorLocalizacion.loc.latitude,
              valorLocalizacion.loc.longitude
            )
          )
          // this.locations.push(this.$L.latLng(item.latitud, item.longitud))
        })
        // this.originalLocalizaciones = this.localizacionesList
      } catch (e) {
        console.error(e)
      }
    },
    guardarLocalizaciones() {
      this.localizacionesList.forEach((item) => {
        if (item.estado === 0) {
          const newLoc = new this.$fireStoreObj.GeoPoint(
            item.latitud,
            item.longitud
          )

          // Save localizacion
          const locaRef = this.$fireStore.collection('localizaciones')
          const newJSON = {
            id_loc: item.id,
            titulo: item.titulo,
            autor: item.autor,
            categoria: item.categoria,
            acceso: item.acceso,
            cloudinaryId: item.cloudinaryId,

            peligrosidad: item.peligrosidad,
            contaminacionLuminica: item.contaminacionLuminica,
            loc: newLoc,
            direccion: item.direccion,
            pais: item.pais,
            provincia: item.provincia,
            tags: item.tags,
            // eslint-disable-next-line new-cap
            fechaToma: new this.$fireStoreObj.Timestamp.fromDate(
              new Date(item.fechaToma)
            ),
            // eslint-disable-next-line new-cap
            createdAt: new this.$fireStoreObj.Timestamp.now(),
            estado: item.estado,
          }
          if (item.notasAdicionales) {
            newJSON.notasAdicionales = item.notasAdicionales
          }
          if (item.exif) {
            newJSON.exif_apertura = item.exif.apertura
            newJSON.exif_balanceBlancos = item.exif.balanceBlancos
            newJSON.exif_iso = item.exif.iso
            newJSON.exif_marca = item.exif.marca
            newJSON.exif_modelo = item.exif.modelo
            newJSON.exif_objetivo = item.exif.objetivo
            newJSON.exif_velocidad = item.exif.velocidad
          }
          console.log(JSON.stringify(newJSON, null, 4))
          try {
            locaRef.add(newJSON)
            console.log(`Localizacion: ${item.id} creada`)
          } catch (e) {
            console.error(`Localizacion: ${item.id}`)
            console.error(e.code)
          }
        }
      })
    },
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

      this.activeImage = this.$cloudinary.image.url(imagenCloud, {
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
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.Default.css',
      },
    ],
  },
}
</script>
