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
            Actualizar contraseña
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
                  <span class="truncate"> Mis localizaciones </span>
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
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  <span class="truncate"> Contraseña</span>
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
                <div class="px-4 space-y-2 sm:px-6">
                  <div class="mb-8">
                    <h2 class="text-lg font-medium leading-6 text-gray-900">
                      Cambia tu contraseña
                    </h2>
                    <p class="mt-6 text-gray-700">
                      Para poder cambiar la contraseña le enviaremos un email y
                      podrá seguir los pasos ahí para actualizar la contraseña
                    </p>
                    <div class="mt-6">
                      <span class="block w-full rounded-md shadow-sm">
                        <button
                          type="submit"
                          class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md lg:w-32 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                          @click.prevent="sendReset()"
                        >
                          Enviar
                        </button>
                      </span>
                    </div>
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
                            Compruebe su correo electrónico para actualizar su
                            contraseña
                          </p>
                        </div>
                      </div>
                    </div>
                  </transition>
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
export default {
  name: 'Password',
  data() {
    return {
      passwordUno: '',
      passwordDos: '',
      showError1: false,
      userUpdatedOK: false,
    }
  },
  methods: {
    async logout() {
      try {
        await this.$fireAuth.signOut()
        this.$router.push('/')
      } catch (e) {
        console.error(e)
      }
    },
    async sendReset() {
      try {
        const actionCodeSettings = {
          url:
            'http://localhost:3000/acceso/restablecido/?email=' +
            this.$store.getters.userEmail,
          handleCodeInApp: false,
        }
        await this.$fireAuth.sendPasswordResetEmail(
          this.$store.getters.userEmail,
          actionCodeSettings
        )
        console.log(`Email enviado creado correctamente`)
        this.userUpdatedOK = true
      } catch (e) {
        console.log(e.code)
      }
    },
  },
  head: {
    title: 'Mi cuenta > Password | Subexpuesta.com',
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
