<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- Content goes here -->
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <form id="creacion" method="post">
      <div>
        <div>
          <div>
            <h3 class="mt-12 text-lg font-medium leading-6 text-gray-900">
              Crear localización
            </h3>
            <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
              Sube tu fotografía e indica el punto exacto en el mapa de donde se
              hizo. Cuanta más información puedas rellenar, más ayudarás a la
              comunidad y a que tu fotografía se pueda buscar en el buscador.
            </p>
          </div>
          <div class="mt-6 sm:mt-5">
            <div
              class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="username"
                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Título
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="flex rounded-md shadow-sm">
                  <input
                    id="username"
                    v-model="titulo"
                    class="flex-1 block w-full min-w-0 transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </div>

            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="about"
                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Localización
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div id="map-wrap" class="z-10 mt-4" style="height: 60vh">
                  <client-only>
                    <l-map :zoom="zoom" :center="center" @click="addMarker">
                      <l-tile-layer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        :attribution="attribution"
                      ></l-tile-layer>
                      <l-marker
                        v-if="userMarker !== null"
                        :lat-lng="userMarker"
                      ></l-marker>
                    </l-map>
                  </client-only>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Punto exacto desde donde se hizo la fotografía
                </p>
              </div>
            </div>

            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="about"
                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Acceso
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="flex max-w-lg rounded-md shadow-sm">
                  <textarea
                    id="about"
                    v-model="acceso"
                    rows="3"
                    class="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Explícanos con tus palabras cómo se accede al lugar
                </p>
              </div>
            </div>

            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="photo"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Fotografía
              </label>
              <div class="mt-2 sm:mt-0 sm:col-span-2">
                <div class="flex items-center">
                  <!-- <span class="w-12 h-12 overflow-hidden">
                    <svg
                      class="w-full h-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span> -->
                  <span class="ml-5 rounded-md shadow-sm">
                    <!-- <button
                      type="button"
                      class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    >
                      Selecciona la fotografía
                    </button> -->
                    <!-- <input type="file" @change="previewFiles" /> -->
                    <input
                      id="file"
                      ref="file"
                      class="text-xs"
                      type="file"
                      @change.prevent="handleFileUpload()"
                    />
                  </span>
                </div>
                <div
                  v-if="imagenCargando"
                  class="p-4 mt-4 rounded-md bg-blue-50"
                >
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: information-circle -->
                      <svg
                        class="w-5 h-5 text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="flex-1 ml-3 md:flex md:justify-between">
                      <p class="text-sm leading-5 text-blue-700">
                        Cargando imagen...
                      </p>
                    </div>
                  </div>
                </div>

                <img class="mt-8" :src="newImage" />
              </div>
            </div>
            <div
              class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="about"
                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
              >
                Categoría
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      id="options-menu"
                      type="button"
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Elige categoría
                      <!-- Heroicon name: chevron-down -->
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
                  <div
                    class="right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div
                      class="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Account settings</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >Support</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        >License</a
                      >
                      <form method="POST" action="#">
                        <button
                          type="submit"
                          class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5 mt-8 border-t border-gray-200">
        <div v-if="errors.length" class="p-4 rounded-md bg-red-50">
          <div class="flex">
            <div class="flex-shrink-0">
              <!-- Heroicon name: x-circle -->
              <svg
                class="w-5 h-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium leading-5 text-red-800">
                Se han encontrado {{ errors.length }} errores. Por favor
                corrijalos para poder crear la localización
              </h3>
              <div class="mt-2 text-sm leading-5 text-red-700">
                <ul class="pl-5 list-disc">
                  <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <span class="inline-flex mt-6 ml-3 rounded-md shadow-sm">
            <button
              class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              @click.prevent="checkForm()"
            >
              Guardar
            </button>
          </span>
          <button
            class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            @click.prevent="helloWorld()"
          >
            Listar
          </button>
          <button
            class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            @click.prevent="fillDB()"
          >
            Fill DB
          </button>
          <button
            class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            @click.prevent="rellenarLocas()"
          >
            rellenarLocas
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import jsondata from '@/assets/data/localizaciones.json'

export default {
  data() {
    return {
      center: null,
      zoom: 5,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      userMarker: null,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      newProvincia: '',
      newCCAA: '',
      newPais: '',
      newLoc: null,
      file: '',
      errors: [],
      titulo: null,
      geoLocalizacion: null,
      acceso: null,
      imagen: null,
      newImage: null,
      imagenCargando: false,
      newPublicId: null,
      newApertura: null,
      newBalanceBlancos: null,
      newMarca: null,
      newISO: null,
      newModelo: null,
      newObjetivo: null,
      newVelocidad: null,
      response: null,
      error: null,
    }
  },
  mounted() {
    this.center = this.$L.latLng(40.41322, -1.219482)
  },
  methods: {
    async fillDB() {
      try {
        this.$axios.setHeader('Content-Type', 'application/json')
        const msg = await this.$axios.$post('/.netlify/functions/mongo-listar')
        this.response = msg
        this.error = null
        console.log(msg)
        // fetch('/.netlify/functions/hello-world', {
        //   headers: { accept: 'Accept: application/json' },
        // }).then((message) => console.log(message))
      } catch (e) {
        this.error = e.response
        this.response = '—'
      }
    },
    async helloWorld() {
      try {
        this.$axios.setHeader('Content-Type', 'application/json')
        const msg = await this.$axios.$get('/.netlify/functions/mongo-listar')
        this.response = msg
        this.error = null
        console.log(msg)
        // fetch('/.netlify/functions/hello-world', {
        //   headers: { accept: 'Accept: application/json' },
        // }).then((message) => console.log(message))
      } catch (e) {
        this.error = e.response
        this.response = '—'
      }
    },
    listarMongo() {
      // const resultGet = await this.$axios.get(
      //   '/.netlify/my_functions/node-fetch'
      // )
      // console.log(`resultGet: ${resultGet}`)

      // fetch('/.netlify/my_functions/node-fetch', {
      //   headers: { accept: 'Accept: application/json' },
      // }).then(({ msg }) => console.log(msg))

      fetch('/.netlify/my_functions/mongo-listar', {
        headers: { accept: 'Accept: application/json' },
      }).then((result) => console.log(result))

      // eslint-disable-next-line no-console
      // .then(({ msg }) => console.log(msg))
      //   .then((x) => x.json())
      //   .then(({ msg }) => console.log(msg))
      // const newGetRequest = await fetch('/.netlify/my_functions/mongo-create')
      // const newListJson = await newGetRequest.json()
      // console.log('GET request new result', newListJson)
    },
    async checkForm() {
      if (this.titulo && this.geoLocalizacion && this.acceso && this.imagen) {
        try {
          // Reverse geocoding
          // TODO: Restringir el API en GCP
          const urlGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.geoLocalizacion.coordinates[0]},${this.geoLocalizacion.coordinates[1]}&key=${process.env.gcpApi}&language=es`
          console.log(`urlGeocoding: ${urlGeocoding}`)
          const direccion = await this.$axios.$get(urlGeocoding)
          console.log(direccion)
          let newProvincia = ''
          let newCCAA = ''
          let newPais = ''
          if (direccion.results.length > 0) {
            newProvincia = await this.$getProvincia(
              direccion.results[0].formatted_address
            )
            newCCAA = await this.$getComunidad(
              direccion.results[0].formatted_address
            )
            newPais = await this.$getPais(
              direccion.results[0].formatted_address
            )
          }
          // Save localizacion

          try {
            // const locaCreated = await locaRef.add({
            //   titulo: this.titulo,
            //   loc: this.localizacion,
            //   acceso: this.acceso,
            //   pais: newPais,
            //   provincia: newProvincia,
            //   ccaa: newCCAA,
            //   email: this.$store.getters.userEmail,
            //   // eslint-disable-next-line new-cap
            //   createdAt: new this.$fireStoreObj.Timestamp.now(),
            // })
            // console.log(locaCreated)
            // console.log(`Lozalizacion creada correctamente en Firebase`)

            const localizacion = {
              id: '2323',
              titulo: this.titulo,
              autor: 'Victor Quinto',
              cloudinaryId: 'subexpuesta/c9wb3uxhhbiejbpds8ja',
              acceso:
                'Esta realizada en el tobogán del parque Adolfo Suarez por lo que el acceso es para todos los públicos y no tiene ninguna dificultad.',
              peligrosidad: 1,
              contaminacionLuminica: 6,
              latitud: 38.40353731566137,
              longitud: -0.5341941118240358,
              altitud: '',
              loc: {
                coordinates: [-0.5341941118240358, 38.40353731566137],
                type: 'Point',
              },
              direccion: '-',
              pais: newPais,
              provincia: newProvincia,
              ccaa: newCCAA,
              estado: 0,
              tags: [],
              votos: 0,
              fechaToma: '2019-04-14T10:33:00.353Z',
              fechaSubida: '2019-04-14T10:33:00.353Z',
              createdAt: Date.now(),
              updatedAt: Date.now(),
              categoria: 2,
              exif: {
                marca: 'Canon',
                modelo: 'Canon EOS 700D',
                objetivo: '11-16mm',
                apertura: '8.0',
                velocidad: '0',
                iso: '100',
                balanceBlancos: '',
                fechaToma: '2019-03-04T23:00:00Z',
              },
              visitas: 0,
              guardado: 0,
              marca: '',
              modelo: '',
              filtros: [],
            }

            this.$axios.setHeader('Content-Type', 'application/json')
            const msg = await this.$axios.$post(
              '/.netlify/functions/mongo-listar',
              localizacion
            )
            this.response = msg
            this.error = null
            console.log(msg)
            // fetch('/.netlify/functions/hello-world', {
            //   headers: { accept: 'Accept: application/json' },
            // }).then((message) => console.log(message))

            // const res = await this.$axios.$post(
            //   '/.netlify/my_funcionts/create-location',
            //   localizacion
            // )
            // console.log(res)
          } catch (error) {
            console.log(error.code)
            // alert(e)
            // console.log(e.code)
            // console.log(e.message)
            return
          }
        } catch (error2) {
          console.error(error2)
        }
        return true
      }

      this.errors = []
      if (!this.titulo) {
        this.errors.push('El título es obligatorio')
      }
      if (!this.localizacion) {
        this.errors.push(
          'Debe indicar el punto en el mapa donde se realizó la fotografía'
        )
      }
      if (!this.acceso) {
        this.errors.push('Debe indicar cómo se accede al lugar')
      }
      if (!this.imagen) {
        this.errors.push('Tiene que subir una imagen')
      }
    },
    rellenarLocas() {
      jsondata.forEach((item) => {
        const newLoca = item
        newLoca.ccaa = 'Murcia'
        console.log(newLoca)
      })
    },
    async handleFileUpload() {
      this.imagenCargando = true
      this.file = this.$refs.file.files[0]

      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('upload_preset', 'tv32frb3')
      const url = 'https://api.cloudinary.com/v1_1/djhqderty/image/upload'

      const result = await this.$axios.$post(url, formData)
      console.log(result)
      this.newImage = this.$cloudinary.image.url(result.public_id, {
        crop: 'fit',
        width: 500,
        fetchFormat: 'auto',
        quality: 60,
      })
      this.imagen = result.public_id
      this.newPublicId = result.public_id
      this.newApertura = result.image_metadata.ApertureValue
      // this.newBalanceBlancos= result.image_metadata.
      this.newMarca = result.image_metadata.Make
      // this.newISO= result.image_metadata.
      this.newModelo = result.image_metadata.Model
      // this.newObjetivo= result.image_metadata.
      this.newVelocidad = result.image_metadata.ShutterSpeedValue
      this.imagenCargando = false
    },
    subirFotografia() {
      const instance = this.$cloudinary.upload('m-target-file-path', {
        public_id: 'Example',
        folder: 'content',
        upload_preset: 'example_preset',
      })
      console.log(instance)
    },
    addMarker(event) {
      const pos = this.$L.latLng(event.latlng.lat, event.latlng.lng)
      this.userMarker = pos
      this.center = this.$L.latLng(event.latlng.lat, event.latlng.lng)
      this.geoLocalizacion = {
        type: 'Point',
        coordinates: [event.latlng.lat, event.latlng.lng],
      }
    },
    getSeoUrl(id, url) {
      return `/localizaciones/${id}/${this.$convertSEO(url)}`
    },
  },
  head: {
    title:
      'Crea nuevas localizaciones para fotografía nocturna en Subexpuesta.com',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Sube tus fotografías e indica la localización exacta de donde se hizo la toma, para que el resto de comunidad pueda ir al mismo lugar',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex,nofollow',
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
