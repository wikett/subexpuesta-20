<template>
  <div>
    <nuxt-link
      v-for="item in loc"
      :key="item.id"
      :to="getUrl(item._id.$oid, item.titulo)"
    >
      <p>{{ item.titulo }}</p></nuxt-link
    >
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const loc = await $content('localizaciones').fetch()
    return { loc }
  },
  methods: {
    getUrl(idLoc, url) {
      return `/localizaciones/${idLoc}/${this.$convertSEO(url)}`
    },
  },
}
</script>
