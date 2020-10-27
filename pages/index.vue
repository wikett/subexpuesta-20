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
        <nuxt-link
          to="localizaciones/5b028026f35bbd04001f457c/cruz-bajo-la-via-lactea/"
        >
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_auto/v1541003195/subexpuesta/jcrtvlj8s3sijb6ahy6h.jpg"
            alt="Isla de Tabarca, Alicante"
          />
        </nuxt-link>
      </div>
    </main>
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <div class="bg-white">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div
            class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
          >
            <h2
              class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl"
            >
              Localizaciones destacadas
            </h2>
            <p class="text-xl leading-7 text-gray-500">
              Esta es una selección de los mejores sitios para hacer fotografía
              nocturna, de paisaje o urbana. Si pincháis en la imágen os llevará
              al lugar exacto de donde se realizó la toma.
            </p>
          </div>

          <ul
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            <li v-for="(item, index) in loc" :key="index">
              <nuxt-link :to="getSeoUrl(item._id.$oid, item.titulo)">
                <div class="space-y-4">
                  <div class="relative pb-2/3">
                    <picture>
                      <source
                        media="(min-width:730px)"
                        :srcset="getResponsiveImage(item.cloudinaryId, '730')"
                      />
                      <source
                        media="(min-width:706px)"
                        :srcset="getResponsiveImage(item.cloudinaryId, '706')"
                      />
                      <source
                        media="(min-width:560px)"
                        :srcset="getResponsiveImage(item.cloudinaryId, '560')"
                      />
                      <source
                        media="(min-width:411px)"
                        :srcset="getResponsiveImage(item.cloudinaryId, '411')"
                      />
                      <img
                        class="absolute object-cover w-full h-full rounded-lg shadow-lg"
                        :srcset="getResponsiveImage(item.cloudinaryId, '360')"
                        :alt="item.titulo"
                        :title="item.titulo"
                        loading="lazy"
                      />
                    </picture>
                  </div>

                  <div class="space-y-2">
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h2>{{ item.titulo }}</h2>
                      <!-- <p class="text-indigo-600">Front-end Developer</p> -->
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </li>

            <!-- More people... -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const loc1 = await $content('localizaciones')
      .where({ cloudinaryId: 'subexpuesta/jntbjuilmf6o3cjab96e' })
      .fetch()
    const loc2 = await $content('localizaciones')
      .where({ cloudinaryId: 'subexpuesta/bhw1yyupkfqbm9yljd2v' })
      .fetch()
    const loc3 = await $content('localizaciones')
      .where({ cloudinaryId: 'subexpuesta/teuyminevs0fh7mlojor' })
      .fetch()
    const loc4 = await $content('localizaciones')
      .where({ cloudinaryId: 'subexpuesta/vxsoqn9kmzov123m3j5f' })
      .fetch()
    const loc5 = await $content('localizaciones')
      .where({ cloudinaryId: 'subexpuesta/zc3zex6s2g2wyrrd36a7' })
      .fetch()
    const loc6 = await $content('localizaciones')
      .where({ cloudinaryId: 'subexpuesta/ldqqpf78e7cnqzctwvap' })
      .fetch()
    const loc = []
    loc.push(loc1[0])
    loc.push(loc2[0])
    loc.push(loc3[0])
    loc.push(loc4[0])
    loc.push(loc5[0])
    loc.push(loc6[0])
    return { loc }
  },
  methods: {
    getSeoUrl(id, url) {
      return `/localizaciones/${id}/${this.$convertSEO(url)}`
    },
    getResponsiveImage(cloudinaryId, size) {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_50,w_${size}/v1/${cloudinaryId}`
    },
  },
  head: {
    title: 'Subexpuesta.com | Comunidad sobre fotografía nocturna',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Localizaciones de fotografía nocturna. Únete a nuestra comunidad de noctógrafos donde siempre se aprende algo nuevo :)',
      },
    ],
  },
}
</script>
