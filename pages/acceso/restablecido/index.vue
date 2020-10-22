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
        Contraseña restablecida con éxito
      </h2>
      <p class="mt-6 ml-4 text-xs leading-9 text-left text-gray-900">
        Ya puedes iniciar sesión con tu neuva contraseña
      </p>
      <p class="mt-6 ml-4 text-xs leading-9 text-left text-blue-500 underline">
        <nuxt-link to="/acceso/iniciar-sesion/">Inicia sesión</nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Restablecer',
  data() {
    return {
      email: '',
      showError1: false,
      showError2: false,
    }
  },
  created() {
    // const mode = this.$route.query.mode
    // const actionCode = this.$route.query.oobCode
    // const continueUrl = this.$route.query.continueUrl
    // const lang = this.$route.query.lang || 'es'
    // this.handleResetPassword(actionCode, continueUrl, lang)
  },
  methods: {
    async handleResetPassword(actionCode, continueUrl, lang) {
      try {
        const email = await this.$fireAuth.verifyPasswordResetCode(actionCode)
        console.log(email)
        const resp = await this.$fireAuth.confirmPasswordReset(
          actionCode,
          'newpassword'
        )
        console.log(resp)
      } catch (e) {
        console.log(e)
      }
    },
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
            await this.$fireAuth.sendPasswordResetEmail(this.email)
            console.log(`Email enviado creado correctamente`)
          } catch (e) {
            console.log(e.code)
            alert(e)
            // console.log(e.code)
            // console.log(e.message)
          }
        }
      }
    },
  },
  head: {
    title: 'Contraseña restablecida | Subexpuesta.com',
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
