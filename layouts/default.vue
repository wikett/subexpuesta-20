<template>
  <div>
    <o-header></o-header>
    <Nuxt />
  </div>
</template>
<script>
import OHeader from '~/components/common/OHeader'
export default {
  components: {
    OHeader,
  },
  data() {
    return {}
  },
}
</script>
