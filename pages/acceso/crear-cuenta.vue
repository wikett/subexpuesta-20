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
        Únete a nuestra comunidad de noctógrafos
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form>
          <div>
            <label
              for="username"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Nombre de usuario
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="username"
                v-model="username"
                type="text"
                class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                @blur="checkUsername()"
              />
              <span v-show="showError1" class="text-xs text-red-600"
                >* Debes indicar el nombre de usuario</span
              >
              <span v-show="showError2" class="text-xs text-red-600"
                >* Este nick de usuario ya está en uso. Elija otro, por
                favor.</span
              >
            </div>
          </div>
          <div class="mt-6">
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
                class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                @blur="checkEmail()"
              />
              <span v-show="showError3" class="text-xs text-red-600"
                >* Debes indicar el email</span
              >
              <span v-show="showError4" class="text-xs text-red-600"
                >* Formato email incorrecto. Revíselo</span
              >
              <span v-show="showError7" class="text-xs text-red-600"
                >* Este email ya está en uso.</span
              >
            </div>
          </div>

          <div class="mt-6">
            <label
              for="password"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Contraseña
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                v-model="password"
                type="password"
                class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                @blur="checkPassword()"
              />
              <span v-show="showError5" class="text-xs text-red-600"
                >* Debes indicar la contraseña</span
              >
            </div>
          </div>
          <div class="mt-6">
            <label
              for="password"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              ¿Cómo nos conociste?
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <div class="relative inline-block w-full text-left">
                <div @click="isDropDownOpen = !isDropDownOpen">
                  <span class="rounded-md shadow-sm">
                    <button
                      id="options-menu"
                      type="button"
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {{ opcion }}
                      <!-- Heroicon name: chevron-down -->
                      <svg
                        v-if="!isDropDownOpen"
                        class="w-5 h-5 ml-2 -mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        v-if="isDropDownOpen"
                        class="w-5 h-5 ml-2 -mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        focusable="false"
                        style="
                          -ms-transform: rotate(360deg);
                          -webkit-transform: rotate(360deg);
                          transform: rotate(360deg);
                        "
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path
                            d="M5 15l7-7l7 7"
                            stroke="#626262"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <rect
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                          fill="rgba(0, 0, 0, 0)"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
                <div
                  v-show="isDropDownOpen"
                  class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"
                >
                  <div class="bg-white rounded-md shadow-xs">
                    <div
                      class="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <!-- <span
                        v-show="como !== 'elige'"
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        @click="setComo('elige')"
                        >Elige una opción</span
                      > -->
                      <span
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        @click="setComo('foros')"
                        >Foros de fotografía</span
                      >
                      <span
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        @click="setComo('rrss')"
                        >Redes Sociales</span
                      >
                      <span
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        @click="setComo('google')"
                        >Buscando por Google</span
                      >
                      <span
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        @click="setComo('amigo')"
                        >Me lo comentó un amigo</span
                      >
                      <span
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        @click="setComo('otros')"
                        >Otros</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                @click.prevent="createUser()"
              >
                Crear cuenta
              </button>
            </span>
            <span v-show="showError6" class="text-xs text-red-600"
              >* Debes validar los campos para poder crear una cuenta</span
            >
            <span v-show="showError8" class="text-xs text-red-600"
              >* Debes completar todos los campos para poder crear una
              cuenta</span
            >
          </div>
        </form>
      </div>
    </div>
    <!-- <div class="mx-auto mt-12 text-sm leading-5">
      <a
        href="#"
        class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
      >
        -Iniciar sesión-
      </a>
    </div> -->
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'CrearCuenta',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      isDropDownOpen: false,
      opcion: 'Elige una opción',
      como: 'elige',
      showError1: false,
      showError2: false,
      showError3: false,
      showError4: false,
      showError5: false,
      showError6: false,
      showError7: false,
      showError8: false,
    }
  },
  methods: {
    setComo(origen) {
      this.isDropDownOpen = false
      this.como = origen
      switch (origen) {
        case 'foros':
          this.opcion = 'Foros de fotografía'
          break
        case 'google':
          this.opcion = 'Buscando por Google'
          break
        case 'rrss':
          this.opcion = 'Redes Sociales'
          break
        case 'amigo':
          this.opcion = 'Me lo comentó un amigo'
          break
        case 'otros':
          this.opcion = 'Otros'
          break
        case 'elige':
          this.opcion = 'Elige una opción'
          break
      }
    },
    closeDropDown() {
      this.isDropDownOpen = false
    },
    async writeToFirestore() {
      const messageRef = this.$fireStore.collection('usuarios')
      try {
        await messageRef.add({
          username: 'pepis',
          email: 'pepis@prueba.es',
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
    checkPassword() {
      if (this.password === '') {
        this.showError5 = true
      } else {
        this.showError5 = false
      }
    },
    checkEmail() {
      if (this.email === '') {
        this.showError3 = true
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.showError3 = false
        this.showError4 = true
      } else {
        this.showError4 = false
      }
    },
    async createUser() {
      if (
        this.showError1 ||
        this.showError2 ||
        this.showError3 ||
        this.showError4 ||
        this.showError5
      ) {
        this.showError6 = true
      } else {
        console.log(`this.username: ${this.username}`)
        if (this.username === '' || this.password === '' || this.email === '') {
          this.showError8 = true
        } else {
          this.showError6 = false
          this.showError8 = false
          try {
            // Register user
            await this.$fireAuth.createUserWithEmailAndPassword(
              this.email,
              this.password
            )
            // Save user
            const messageRef = this.$fireStore.collection('usuarios')
            try {
              await messageRef.add({
                username: this.username,
                email: this.email,
                origin: this.como,
              })
              console.log(`Usuario creado correctamente`)
              this.showError7 = false
            } catch (e) {
              console.log(e.code)
              // alert(e)
              // console.log(e.code)
              // console.log(e.message)
              return
            }
          } catch (e) {
            // alert(e)
            console.log(e.code)
            console.log(e.message)
            if (e.code === 'auth/email-already-in-use') {
              this.showError7 = true
            }
          }
        }
      }
    },
    async checkUsername() {
      if (this.checkUsername === '') {
        this.showError1 = true
      } else {
        this.showError1 = false
        console.log(`checkUsername: ${this.username}`)
        const messageRef = this.$fireStore
          .collection('usuarios')
          .where('username', '==', this.username)

        const snapshot = await messageRef.get()
        console.log(snapshot.docs.length)
        if (snapshot.docs.length > 0) {
          this.showError2 = true
        } else {
          this.showError2 = false
        }
      }

      // return snapshot.docs.length
      // snapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data().username}`)
      // })
    },
    async getAllUsers() {
      const messageRef = this.$fireStore.collection('usuarios')

      // try {
      const snapshot = await messageRef.get()
      snapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().username}`)
      })
      //   const doc = snapshot.data()
      //   if (!doc) {
      //     alert('Document does not exist.')
      //     return
      //   }
      //   alert(doc.message)
      // } catch (e) {
      //   alert(e)
      // }
    },
  },
}
</script>
