<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <h1 @click="probando()">Titulo principal</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cucu: false,
    }
  },
  methods: {
    probando() {
      console.log(this.cucu)
    },
  },
}
</script>
