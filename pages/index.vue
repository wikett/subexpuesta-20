<template>
  <div class="relative bg-gray-50">
    <main class="lg:relative">
      <div
        class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left"
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-center text-blue-400 lg:text-right">
            Localizaciones de fotografías nocturnas
          </h1>
          <h2
            class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
          >
            Tu comunidad de fotografía nocturna
            <br class="xl:hidden" />
            <span class="text-indigo-600">y mucho más...</span>
          </h2>
          <p
            class="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Descubre
            <nuxt-link to="/mapa-localizaciones/" class="text-blue-500">
              nuestro mapa</nuxt-link
            >
            con más de 1500 localizaciones, únete a nuestras redes sociales para
            estar atento al minuto y sigue nuestro
            <nuxt-link to="/blog/" class="text-blue-500"> blog </nuxt-link>
            donde vamos contando todo lo referencte a la fotografía.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <nuxt-link
                to="/mapa-localizaciones/"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
              >
                Ver mapa
              </nuxt-link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <nuxt-link
                to="/blog/"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
              >
                Leer el blog
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_auto/v1541003195/subexpuesta/jcrtvlj8s3sijb6ahy6h.jpg"
          alt="Isla de Tabarca, Alicante"
        />
      </div>
    </main>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const loc = await $content('localizaciones').fetch()
    return { loc }
  },
  middleware(ctx) {
    ctx.$gtm.push({ event: 'ssr' })
  },
  head: {
    title: 'Subexpuesta.com | Comunidad sobre fotografía nocturna',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Comunidad de fotografos especializada en fotografía nocturna. Consulta nuestro Mapa con más de 1000 localizaciones fotográficas.',
      },
    ],
  },
}
</script>
