<template>
  <NuxtLink :to="`/blog/usuario/`">
    <div>
      <h4>Probando POST: {{ author.name }}</h4>
    </div>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>
