<template>
  <div>
    <div class="relative pb-32 overflow-hidden bg-light-blue-700">
      <!-- On: "bg-light-blue-900", Off: "bg-transparent" -->

      <!-- On: "bottom-0", Off: "inset-y-0" -->
      <div
        class="absolute inset-x-0 flex justify-center w-full overflow-hidden transform -translate-x-1/2 left-1/2 lg:inset-y-0"
        aria-hidden="true"
      >
        <div class="flex-grow bg-opacity-75 bg-light-blue-900"></div>
        <svg
          class="flex-shrink-0"
          width="1750"
          height="308"
          viewBox="0 0 1750 308"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".75"
            d="M1465.84 308L16.816 0H1750v308h-284.16z"
            fill="#075985"
          />
          <path
            opacity=".75"
            d="M1733.19 0L284.161 308H0V0h1733.19z"
            fill="#0c4a6e"
          />
        </svg>
        <div class="flex-grow bg-opacity-75 bg-light-blue-800"></div>
      </div>
      <header class="relative py-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-9 text-white">Mi cuenta</h1>
        </div>
      </header>
    </div>

    <main class="relative -mt-32">
      <div class="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8">
        <div class="overflow-hidden bg-white rounded-lg shadow">
          <div
            class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
          >
            <aside class="py-6 lg:col-span-3">
              <nav>
                <nuxt-link
                  to="/mi-cuenta/cuenta/"
                  class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-teal-700 transition duration-150 ease-in-out border-l-4 border-teal-500 group bg-teal-50 hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:bg-teal-100 focus:text-teal-700"
                  aria-current="page"
                >
                  <!-- Heroicon name: user-circle -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-teal-500 transition duration-150 ease-in-out group-hover:text-teal-500 group-focus:text-teal-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="truncate"> Mis datos </span>
                </nuxt-link>

                <nuxt-link
                  to="/mi-cuenta/mis-localizaciones/"
                  class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
                >
                  <!-- Heroicon name: key -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span class="truncate"> Mis Localizaciones </span>
                </nuxt-link>

                <nuxt-link
                  to="/mi-cuenta/password/"
                  class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
                >
                  <!-- Heroicon name: key -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  <span class="truncate"> Contraseña </span>
                </nuxt-link>

                <!-- <nuxt-link
                  to="/mi-cuenta/notificaciones/"
                  class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span class="truncate"> Notificaciones </span>
                </nuxt-link> -->

                <a
                  href="#"
                  class="flex items-center px-3 py-2 mt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-l-4 border-transparent group hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900"
                >
                  <!-- Heroicon name: bell -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <span class="truncate" @click="logout()">
                    Cerrar sesión
                  </span>
                </a>
              </nav>
            </aside>

            <form class="divide-y divide-gray-200 lg:col-span-9">
              <!-- Profile section -->
              <div class="px-4 py-6 space-y-6 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">
                    Datos del perfil
                  </h2>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    Esta información será mostrada en tu perfil público.
                  </p>
                </div>

                <div
                  class="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6"
                >
                  <div class="flex-grow space-y-6">
                    <div class="space-y-1">
                      <label
                        for="username"
                        class="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Usuario
                      </label>
                      <div class="flex rounded-md shadow-sm">
                        <!-- <span
                          class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md sm:text-sm"
                        >
                          subexpuesta.com/
                        </span> -->
                        <input
                          id="username"
                          v-model="user.username"
                          class="flex-grow block w-full min-w-0 text-gray-500 transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                          value="subexpuesta.com/lisamarie"
                          disabled
                        />
                      </div>
                    </div>

                    <div class="space-y-1">
                      <label
                        for="about"
                        class="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Descripción
                      </label>
                      <div class="rounded-md shadow-sm">
                        <textarea
                          id="about"
                          v-model="user.description"
                          rows="3"
                          class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                          @blur.prevent="
                            updateUser({ description: user.description })
                          "
                        ></textarea>
                      </div>
                      <p class="mt-2 text-sm text-gray-500">
                        Pequeña descripción sobre ti como fotógrafo
                      </p>
                    </div>
                  </div>
                  <!-- TODO: Meter mapa de donde es el usuario -->

                  <!-- <div
                    class="flex-grow space-y-1 lg:flex-grow-0 lg:flex-shrink-0"
                  >
                    <p
                      class="block text-sm font-medium leading-5 text-gray-700"
                      aria-hidden="true"
                    >
                      Foto
                    </p>
                    <div class="lg:hidden">
                      <div class="flex items-center">
                        <div
                          class="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                          aria-hidden="true"
                        >
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80h"
                            alt=""
                          />
                        </div>
                        <div class="ml-5 rounded-md shadow-sm">
                          <div
                            class="relative flex items-center justify-center px-3 py-2 transition duration-150 ease-in-out border border-gray-300 rounded-md group focus-within:border-blue-300 focus-within:shadow-outline-blue focus-within:text-gray-900"
                          >
                            <label
                              for="user_photo"
                              class="relative text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out pointer-events-none group-hover:text-gray-500"
                            >
                              <span>Cambia</span>
                              <span class="sr-only"> foto usuario</span>
                            </label>
                            <input
                              id="user_photo"
                              type="file"
                              class="absolute w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="relative hidden overflow-hidden transition duration-150 ease-in-out rounded-full lg:block"
                    >
                      <img
                        class="relative w-40 h-40 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                        alt=""
                      />
                      <label
                        class="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-black bg-opacity-75 opacity-0 hover:opacity-100 focus-within:opacity-100"
                      >
                        <span>Cambia</span>
                        <span class="sr-only"> foto usuario</span>
                        <input
                          type="file"
                          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </label>
                    </div>
                  </div> -->
                </div>
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">
                    ¿De dónde eres?
                  </h2>
                  <span class="mt-2 text-sm text-gray-500"
                    >(pincha sobre el mapa)</span
                  >
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
                </div>
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">
                    Tus redes sociales
                  </h2>
                </div>
                <div class="grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label
                      for="first_name"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Instagram</label
                    >
                    <input
                      id="first_name"
                      v-model="user.instagram"
                      class="w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm blck form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      placeholder="@tucuenta"
                      @blur.prevent="updateUser({ instagram: user.instagram })"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label
                      for="last_name"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Twitter</label
                    >
                    <input
                      id="last_name"
                      v-model="user.twitter"
                      class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      placeholder="@tuusuario"
                      @blur.prevent="updateUser({ twitter: user.twitter })"
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label
                      for="url"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >500px</label
                    >
                    <input
                      id="url"
                      v-model="user.quinientospx"
                      class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      placeholder=""
                      @blur.prevent="
                        updateUser({ quinientospx: user.quinientospx })
                      "
                    />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label
                      for="company"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Website</label
                    >
                    <input
                      id="company"
                      v-model="user.website"
                      class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      placeholder="www.tuwebsite.com"
                      @blur.prevent="updateUser({ website: user.website })"
                    />
                  </div>
                </div>
                <div>
                  <transition name="fade">
                    <div
                      v-if="userUpdatedOK"
                      class="p-4 rounded-md bg-green-50"
                    >
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <!-- Heroicon name: check-circle -->
                          <svg
                            class="w-5 h-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div class="ml-3">
                          <p
                            class="text-sm font-medium leading-5 text-green-800"
                          >
                            Usuario actualizado
                          </p>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <div class="flex justify-end px-4 py-4 space-x-5 sm:px-6">
                  <div class="inline-flex rounded-md shadow-sm">
                    <button
                      class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-light-blue-700 hover:bg-light-blue-600 focus:outline-none focus:border-light-blue-800 focus:shadow-outline-blue active:bg-light-blue-800"
                      @click.prevent=""
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'MiCuenta',
  data() {
    return {
      center: null,
      zoom: 5,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 5,
      userMarker: null,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      userUpdatedOK: false,
      user: {
        id: '',
        username: '',
        description: '',
        instagram: '',
        facebook: '',
        twitter: '',
        quinientospx: '',
        website: '',
        from_lat: 0,
        from_long: 0,
      },
    }
  },
  mounted() {
    this.center = this.$L.latLng(40.41322, -1.219482)
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async addMarker(event) {
      const pos = this.$L.latLng(event.latlng.lat, event.latlng.lng)
      this.userMarker = pos
      const userUpdated = this.$fireStore
        .collection('usuarios')
        .doc(this.user.id)
      try {
        const newLoc = new this.$fireStoreObj.GeoPoint(
          event.latlng.lat,
          event.latlng.lng
        )

        // Reverse geocoding
        // TODO: Restringir el API en GCP
        const urlGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latlng.lat},${event.latlng.lng}&key=${process.env.gcpApi}&language=es`

        const direccion = await this.$axios.$get(urlGeocoding)
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
          newPais = await this.$getPais(direccion.results[0].formatted_address)
        }
        await userUpdated.update({
          from: newLoc,
          from_provincia: newProvincia,
          from_comunidad: newCCAA,
          from_pais: newPais,
        })
      } catch (e) {
        console.error(e)
      }
    },
    async logout() {
      try {
        await this.$fireAuth.signOut()
        this.$router.push('/')
      } catch (e) {
        console.error(e)
      }
    },
    async updateUser(objectUpdated) {
      const userUpdated = this.$fireStore
        .collection('usuarios')
        .doc(this.user.id)
      try {
        await userUpdated.update(objectUpdated)
        this.userUpdatedOK = true
        // const that = this
        setTimeout(() => (this.userUpdatedOK = false), 2000)
      } catch (e) {
        console.error(e)
      }
    },
    async getUserInfo() {
      const userDetail = this.$fireStore
        .collection('usuarios')
        .where('email', '==', this.$store.getters.userEmail)
      try {
        const snapshot = await userDetail.get()
        const docs = snapshot.docs

        const userInfo = docs[0].data()

        this.user.username =
          'www.subexpuesta.com/usuario/' +
          userInfo.username.toString().toLowerCase() +
          '/'
        this.user.description = userInfo.description
        this.user.id = docs[0].id
        this.user.instagram = userInfo.instagram
        this.user.facebook = userInfo.facebook
        this.user.twitter = userInfo.twitter
        this.user.quinientospx = userInfo.quinientospx
        this.user.website = userInfo.website

        this.user.description = userInfo.description
        if (userInfo.from !== undefined) {
          this.user.from_lat = userInfo.from.latitude
          this.user.from_long = userInfo.from.longitude
          const pos = this.$L.latLng(
            userInfo.from.latitude,
            userInfo.from.longitude
          )
          this.userMarker = pos
        }
      } catch (e) {
        console.error(e)
      }
    },
  },
  head: {
    title: 'Mi cuenta | Subexpuesta.com',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Información sobre tu cuenta de subexpuesta.com',
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
