<template>
  <div>
    <h1>Prueba localizacion</h1>
    <pre> {{ loc }} </pre>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const loc = await $content('localizaciones', params.id).fetch()

    return { loc }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
