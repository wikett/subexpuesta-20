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
          <h1 class="text-3xl font-bold leading-9 text-white">
            Mis Localizaciones
          </h1>
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
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="truncate"> Mis datos </span>
                </nuxt-link>

                <nuxt-link
                  to="/mi-cuenta/mis-localizaciones/"
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span class="truncate"> Mis localizaciones </span>
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

            <form
              class="divide-y divide-gray-200 lg:col-span-9"
              action="#"
              method="POST"
            >
              <!-- Privacy section -->
              <div class="pt-6 space-y-4 divide-y divide-gray-200">
                <div class="px-2 space-y-2 sm:px-6">
                  <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">
                      Mis localizaciones
                    </h2>

                    <div class="flex py-2">
                      <div
                        class="w-full overflow-hidden bg-white shadow sm:rounded-md"
                      >
                        <ul>
                          <li
                            v-for="(item, index) in mislocalizaciones"
                            :key="index"
                          >
                            <div class="px-4 py-4 sm:px-6">
                              <div class="flex items-center justify-between">
                                <div
                                  class="text-sm font-medium leading-5 text-indigo-600 truncate"
                                >
                                  {{ item.titulo }}
                                </div>
                                <div class="flex flex-shrink-0 ml-2">
                                  <button
                                    class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full text-light-blue-800 bg-light-blue-100"
                                  >
                                    <a
                                      :href="getUrl(item.id_loc, item.titulo)"
                                      target="_blank"
                                    >
                                      Ver</a
                                    >
                                  </button>

                                  <button
                                    class="inline-flex px-2 ml-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                                  >
                                    <nuxt-link to="/"> Editar </nuxt-link>
                                  </button>

                                  <button
                                    class="inline-flex px-2 ml-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full"
                                    @click.prevent="
                                      establecerLocalizacionActiva(
                                        item.id_firebase
                                      )
                                    "
                                  >
                                    {{ textoBorrado }}
                                  </button>
                                </div>
                              </div>
                              <div class="mt-2 sm:flex sm:justify-between">
                                <div class="sm:flex">
                                  <div
                                    class="flex items-center mr-6 text-sm leading-5 text-gray-500"
                                  >
                                    <!-- Heroicon name: users -->
                                    <svg
                                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    {{ item.provincia }}({{ item.pais }})
                                  </div>
                                  <!-- <div
                                    class="flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0"
                                  >
                                    <svg
                                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      ></path>
                                    </svg>
                                    <svg
                                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                      ></path>
                                    </svg>
                                    <div v-html="$getCategory(1).icon"></div>
                                  </div> -->
                                </div>
                                <div
                                  class="flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mt-0"
                                >
                                  <!-- Heroicon name: calendar -->
                                  <svg
                                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                  <span>
                                    Publicada:
                                    {{ item.createdAt }}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <div
      v-if="borradoActivo"
      v-click-outside="setBorradoActivo()"
      class="fixed inset-0 z-10 overflow-y-auto"
    >
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
          :class="{
            'inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 show': borradoActivo,
            'inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 hidden': !borradoActivo,
          }"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="sm:flex sm:items-start">
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
            >
              <!-- Heroicon name: exclamation -->
              <svg
                class="w-6 h-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
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
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                id="modal-headline"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Eliminacion de localización
              </h3>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  ¿Está seguro que quiere eliminar esta localización?
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
                @click="borrarLocalizacion()"
              >
                Borrar
              </button>
            </span>
            <span
              class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                @click="borradoActivo = false"
              >
                Cancelar
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'MisLocalizaciones',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      email: '',
      mislocalizaciones: [],
      cargado: false,
      borradoActivo: false,
      localizacionActiva: '',
      textoBorrado: 'Borrar',
    }
  },
  created() {
    this.getLocalizaciones()
  },
  methods: {
    setBorradoActivo() {
      this.borradoActivo = false
    },
    async borrarLocalizacion() {
      try {
        this.textoBorrado = 'Borrando...'
        await this.$fireStore
          .collection('localizaciones')
          .doc(this.localizacionActiva)
          .delete()
        this.mislocalizaciones = []
        this.getLocalizaciones()
        this.borradoActivo = false
        this.textoBorrado = 'Borrar'
      } catch (e) {
        console.error(e)
      }
    },
    establecerLocalizacionActiva(idFirebase) {
      this.localizacionActiva = idFirebase
      this.borradoActivo = true
    },
    getUrl(idLoc, url) {
      return `/localizaciones/${idLoc}/${this.$convertSEO(url)}`
    },
    async getLocalizaciones() {
      const userDetail = this.$fireStore
        .collection('usuarios')
        .where('email', '==', this.$store.getters.userEmail)
      try {
        const snapshot = await userDetail.get()
        const docs = snapshot.docs

        const userInfo = docs[0].data()
        // Obtenemos las localizaciones
        const localiacionesDetail = this.$fireStore
          .collection('localizaciones')
          .where('autor', '==', userInfo.username)
        const listaLocalizaciones = await localiacionesDetail.get()
        for (let i = 0; i < listaLocalizaciones.docs.length; i++) {
          this.mislocalizaciones.push(listaLocalizaciones.docs[i].data())
          const today = listaLocalizaciones.docs[i].data().createdAt.toDate()
          const dd = String(today.getDate()).padStart(2, '0')
          const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
          const yyyy = today.getFullYear()
          this.mislocalizaciones[i].createdAt = dd + '/' + mm + '/' + yyyy
          this.mislocalizaciones[i].id_firebase = listaLocalizaciones.docs[i].id
        }

        this.cargado = true
        // console.log(listaLocalizaciones.docs.length)
        // console.log(listaLocalizaciones.docs)
        // console.log(listaLocalizaciones.docs[0].data())
      } catch (e) {
        console.error(e)
      }
    },
  },
  head: {
    title: 'Mi cuenta > Mis Localizaciones | Subexpuesta.com',
    meta: [
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex,nofollow',
      },
    ],
  },
}
</script>
