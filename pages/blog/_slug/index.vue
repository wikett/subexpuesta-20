<template>
  <!-- <div>
      <article>
        <h1 class="text-red-700">{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <img :src="article.img" :alt="article.alt" />
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

        <nuxt-content :document="article" />
        <author :author="article.author" />
        <pre>{{ article.author }}</pre>
      </article>
    </div> -->
  <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->

  <div class="relative py-16 overflow-hidden bg-white">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full mx-auto text-lg max-w-prose">
        <svg
          class="absolute transform translate-x-32 top-12 left-full"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
        <svg
          class="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute transform translate-x-32 bottom-12 left-full"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
          />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mx-auto mb-6 text-lg max-w-prose">
        <p
          class="text-base font-semibold leading-6 tracking-wide text-center text-indigo-600 uppercase"
        >
          {{ article.category }}
        </p>
        <h1
          class="mt-2 mb-8 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ article.title }}
        </h1>
        <div class="flex w-full">
          <p class="w-full text-sm text-right text-gray-500">
            {{ formatDate(article.date_published) }}
          </p>
        </div>

        <figure>
          <a :href="getUrlImage()" target="_blank">
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
                class="w-full rounded-lg"
                :srcset="getResponsiveImage(article.img, '360')"
                :alt="article.description"
              />
            </picture>
          </a>
          <figcaption
            v-if="article.url_location"
            class="flex mt-2 ml-4 text-sm text-gray-500"
          >
            <svg
              class="flex-none w-5 h-5 mr-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            Fotografía por {{ article.author.name }}.
            <nuxt-link
              class="ml-2 text-blue-400 underline"
              :to="article.url_location"
              >Ver localización</nuxt-link
            >
          </figcaption>
        </figure>
        <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
        <div class="mt-4 overflow-hidden bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <p class="text-lg font-medium leading-6 text-gray-900">Contenido</p>
          </div>
          <div class="px-4 py-5 sm:p-0">
            <dl>
              <div
                v-for="(link, index) of article.toc"
                :key="link.id"
                class="mt-8 sm:mt-0 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
              >
                <NuxtLink :to="`#${link.id}`">
                  <dt class="text-sm font-medium leading-5 text-gray-500">
                    {{ index + 1 }}. {{ link.text }}
                  </dt>
                </NuxtLink>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="mx-auto prose prose-lg text-gray-600 post-content">
        <nuxt-content :document="article" />
        <div class="flex text-right">
          <span class="mt-4 text-sm text-right"
            >------ Comparte este artículo</span
          >
          <ShareNetwork
            network="facebook"
            :url="fullUrl"
            :title="article.title"
            :description="article.description"
            :media="article.img"
          >
            <button
              name="Facebook"
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-10 h-10"
                src="~/assets/img/icons8-facebook-50.png"
                alt="Comparte en Facebook"
              />
            </button>
          </ShareNetwork>
          <ShareNetwork
            network="twitter"
            :url="fullUrl"
            :title="article.title"
            :description="article.description"
          >
            <button
              name="Twitter"
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-10 h-10"
                src="~/assets/img/icons8-twitter-50.png"
                alt="Comparte en Twitter"
              />
            </button>
          </ShareNetwork>
          <ShareNetwork
            network="telegram"
            :url="fullUrl"
            :title="article.title"
            :description="article.description"
          >
            <button
              name="Telegram"
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-10 h-10"
                src="~/assets/img/icons8-telegram-app-50.png"
                alt="Comparte en Telegram"
              />
            </button>
          </ShareNetwork>
          <ShareNetwork
            network="WhatsApp"
            :url="fullUrl"
            :title="article.title"
            :description="article.description"
          >
            <button
              name="Whatsapp"
              class="inline-flex items-center px-4 py-2 font-bold text-gray-800 rounded bg-white-300 hover:border-blue-600"
            >
              <img
                class="object-contain w-10 h-10"
                src="~/assets/img/icons8-whatsapp-48.png"
                alt="Comparte en Telegram"
              />
            </button>
          </ShareNetwork>
        </div>
      </div>
      <div v-if="article.exif" class="bg-gray-50">
        <div
          class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8"
        >
          <h2
            class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10"
          >
            Datos exif
          </h2>
          <div class="pt-6 mt-6 border-t-2 border-gray-200">
            <dl>
              <div class="md:grid md:grid-cols-12 md:gap-8">
                <dt
                  class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                >
                  Camara
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base leading-6 text-gray-500">
                    {{ article.exif.camera }}
                  </p>
                </dd>
              </div>
              <div
                class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt
                  class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                >
                  Objetivo
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base leading-6 text-gray-500">
                    {{ article.exif.objetivo }}
                  </p>
                </dd>
              </div>
              <div
                class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt
                  class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                >
                  Exposición
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base leading-6 text-gray-500">
                    {{ article.exif.exposicion }}
                  </p>
                </dd>
              </div>
              <div
                class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt
                  class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                >
                  Apertura
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base leading-6 text-gray-500">
                    {{ article.exif.apertura }}
                  </p>
                </dd>
              </div>
              <div
                class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt
                  class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                >
                  ISO
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base leading-6 text-gray-500">
                    {{ article.exif.iso }}
                  </p>
                </dd>
              </div>
              <div
                v-if="article.exif.procesado"
                class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt
                  class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                >
                  Procesado
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base leading-6 text-gray-500">
                    {{ article.exif.procesado }}
                  </p>
                </dd>
              </div>
              <div
                v-if="article.url_location"
                class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt
                  class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
                >
                  Localización
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <nuxt-link
                    :to="article.url_location"
                    target="_blank"
                    class="text-base leading-6 text-blue-400 underline"
                  >
                    punto en el mapa
                  </nuxt-link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  data() {
    return {
      fullUrl: 'https://www.subexpuesta.com' + this.$nuxt.$route.path,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    },
    getUrlImage() {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto/v1/${this.article.img}`
    },
    getResponsiveImage(cloudinaryId, size) {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_50,w_${size}/v1/${cloudinaryId}`
    },
  },
  head() {
    return {
      title:
        this.article.title +
        ' por ' +
        this.article.author.name +
        ' | Blog de Subexpuesta.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1508658239428785',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getResponsiveImage(this.article.img, '1200'),
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'es_ES',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Subexpuesta.com',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.subexpuesta.com' + this.$nuxt.$route.fullPath,
        },
        {
          hide: 'twitter:card',
          name: 'twitter:card',
          content: this.article.title,
        },
        {
          hide: 'twitter:site',
          name: 'twitter:site',
          content: '@subexpuesta_com',
        },
        {
          hide: 'twitter:image',
          name: 'twitter:image',
          content: this.getResponsiveImage(this.article.img, '1200'),
        },
        {
          hide: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hide: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://www.subexpuesta.com${this.$route.path}`,
        },
      ],
    }
  },

  jsonld() {
    return {
      // https://developers.google.com/search/docs/data-types/article
      '@context': 'http://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.subexpuesta.com' + this.$nuxt.$route.fullPath,
      },
      headline: this.article.title,
      image: [`${this.getResponsiveImage(this.article.img, '1200')}`],
      datePublished: this.article.date_published,
      dateModified: this.article.date_published,
      author: {
        '@type': 'Person',
        name: this.article.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Subexpuesta.com',
        logo: {
          '@type': 'ImageObject',
          url:
            'https://res.cloudinary.com/djhqderty/image/upload/f_auto,w_148/v1599671277/subexpuesta/subexpuesta-transparente.png',
        },
      },
    }
  },
}
</script>
<style lang="postcss">
.post-content > div > div {
  & > p {
    @apply text-lg leading-7 text-gray-700 mb-5;
  }
  & > ul {
    @apply text-lg leading-7 text-gray-700 mb-5;
  }
}
</style>
