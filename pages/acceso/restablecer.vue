<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div
    class="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="w-auto h-12 mx-auto"
        src="https://res.cloudinary.com/djhqderty/image/upload/f_auto/v1599671277/subexpuesta/subexpuesta-transparente.png"
        alt="subexpuesta.com"
      />
      <h2
        class="mt-6 text-xl font-extrabold leading-9 text-center text-gray-900"
      >
        Restablecer contraseña
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Email
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              />
              <span v-show="showError1" class="text-xs text-red-600"
                >* Debes indicar un email</span
              >
              <span v-show="showError2" class="text-xs text-red-600"
                >* Formato email incorrecto. Revíselo</span
              >
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                @click.prevent="sendReset()"
              >
                Enviar
              </button>
            </span>
          </div>
          <div>
            <transition name="fade">
              <div
                v-if="userUpdatedOK"
                class="p-4 mt-12 rounded-md bg-green-50"
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
                    <p class="text-sm font-medium leading-5 text-green-800">
                      Email enviado. Revise su correo para poder actualizar su
                      contraseña
                    </p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Restablecer',
  async asyncData({ $content, params }) {
    const loc = await $content('localizaciones').fetch()
    return { loc }
  },
  data() {
    return {
      email: '',
      showError1: false,
      showError2: false,
      userUpdatedOK: true,
    }
  },
  methods: {
    async sendReset() {
      if (this.email === '') {
        this.showError1 = true
      } else {
        this.showError1 = false
        if (!/\S+@\S+\.\S+/.test(this.email)) {
          this.showError2 = true
        } else {
          this.showError2 = false
          // const auth = this.$fireAuth
          try {
            const actionCodeSettings = {
              url:
                'http://localhost:3000/acceso/restablecido/?email=' +
                this.email,
              handleCodeInApp: false,
            }
            await this.$fireAuth.sendPasswordResetEmail(
              this.email,
              actionCodeSettings
            )
            console.log(`Email enviado creado correctamente`)
          } catch (e) {
            console.log(e.code)
          }
        }
      }
    },
  },
  head: {
    title: 'Restablecer contraseña | Subexpuesta.com',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Restablece tu contraseña de usuario para Subexpuesta.com. Se enviará un email para poder crear una nueva contraseña.',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex,nofollow',
      },
    ],
  },
}
</script>
