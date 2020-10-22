<template>
  <!-- <div
    class="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          El blog de subexpuesta.com
        </h2>
        <p
          class="max-w-2xl mx-auto mt-3 text-base leading-7 text-justify text-gray-500 sm:mt-4"
        >
          Aquí nuestros expertos, nuestros compañeros e invitados de categoría
          nos explicaran tanto técnic de fotografía, localizaciones,
          recomendaciones de producto como lo que venga :)
        </p>
      </div>
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-shrink-0">
            <img
              class="object-cover w-full h-48"
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <p class="text-sm font-medium leading-5 text-indigo-600">
                <a href="#" class="hover:underline"> Blog </a>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                  Boost your conversion rate
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium praesentium eius, ut atque fuga culpa,
                  similique sequi cum eos quis dolorum.
                </p>
              </a>
            </div>
            <div class="flex items-center mt-6">
              <div class="flex-shrink-0">
                <a href="#">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium leading-5 text-gray-900">
                  <a href="#" class="hover:underline"> Roel Aufderhar </a>
                </p>
                <div class="flex text-sm leading-5 text-gray-500">
                  <time datetime="2020-03-16"> Mar 16, 2020 </time>
                  <span class="mx-1"> &middot; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div
    class="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          El blog de subexpuesta.com
        </h2>
        <p
          class="max-w-2xl mx-auto mt-3 text-base leading-7 text-justify text-gray-500 sm:mt-4"
        >
          Aquí nuestros expertos, nuestros compañeros e invitados de categoría
          nos explicaran tanto técnica de fotografía, localizaciones,
          recomendaciones de producto como lo que venga :)
        </p>
      </div>
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="article in articles"
          :key="article.slug"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="flex-shrink-0">
              <picture>
                <source
                  media="(min-width:730px)"
                  :srcset="getResponsiveImage(article.img, '730')"
                />
                <source
                  media="(min-width:706px)"
                  :srcset="getResponsiveImage(article.img, '706')"
                />
                <source
                  media="(min-width:560px)"
                  :srcset="getResponsiveImage(article.img, '560')"
                />
                <source
                  media="(min-width:411px)"
                  :srcset="getResponsiveImage(article.img, '411')"
                />
                <img
                  class="object-cover w-full rounded-lg h-52"
                  :srcset="getResponsiveImage(article.img, '360')"
                  :alt="article.title"
                />
              </picture>
            </div>
            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
              <div class="flex-1">
                <p class="text-sm font-medium leading-5 text-indigo-600">
                  <a href="#" class="hover:underline">
                    {{ article.category }}
                  </a>
                </p>
                <a href="#" class="block h-32">
                  <h3
                    class="mt-2 text-xl font-semibold leading-7 text-gray-900"
                  >
                    {{ article.title }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ article.description }}
                  </p>
                </a>
              </div>
              <div class="flex items-center mt-6">
                <div>
                  <p class="text-sm font-medium leading-5 text-gray-900">
                    <a href="#" class="hover:underline">
                      Por: {{ article.author.name }} {{ article.time_reading }}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'updatedAt',
        'category',
        'category_url',
      ])
      .sortBy('createdAt', 'desc')
      .fetch()
    // console.log(`articles: ${JSON.stringify(articles, null, 4)}`)
    return {
      articles,
    }
  },
  methods: {
    getResponsiveImage(cloudinaryId, size) {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_50,w_${size}/v1/${cloudinaryId}`
    },
    formatDate(date, local) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(local, options)
    },
  },
  head: {
    title: 'Blog de Subexpuesta.com',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Descubre nuestros artículos sobre fotografía nocturna, fotografía de móvil o cómo se hizo',
      },
    ],
  },
}
</script>
