<template>
  <div class="relative bg-gray-50">
    <main class="lg:relative">
      <div
        class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-center lg:text-right text-blue-400">
            Localizaciones de fotografías nocturnas
          </h1>
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
          >
            Tu comunidad de fotografía nocturna
            <br class="xl:hidden" />
            <span class="text-indigo-600">y mucho más...</span>
          </h2>
          <p
            class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Descubre
            <nuxt-link to="/mapa-localizaciones" class="text-blue-500">
              nuestro mapa</nuxt-link
            >
            con más de 1500 localizaciones, únete a nuestras redes sociales para
            estar atento al minuto y sigue nuestro
            <nuxt-link to="/blog" class="text-blue-500"> blog </nuxt-link> donde
            vamos contando todo lo referencte a la fotografía.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <nuxt-link
                to="/mapa-localizaciones"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Ver mapa
              </nuxt-link>
            </div>
            <!-- <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <nuxt-link
                to="/blog"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Leer el blog
              </nuxt-link>
            </div> -->
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_auto/v1541003195/subexpuesta/jcrtvlj8s3sijb6ahy6h.jpg"
          alt="Isla de Tabarca, Alicante"
        />
      </div>
    </main>
  </div>
</template>
<script>
export default {
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
