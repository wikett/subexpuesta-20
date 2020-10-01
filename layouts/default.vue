<template>
  <div>
    <o-header></o-header>
    <Nuxt />
    <o-footer></o-footer>
    <client-only>
      <o-banner></o-banner>
    </client-only>
  </div>
</template>
<script>
import OHeader from '~/components/common/OHeader'
import OFooter from '~/components/common/OFooter'
import OBanner from '~/components/common/OBanner'
export default {
  components: {
    OHeader,
    OFooter,
    OBanner,
  },
  data() {
    return {}
  },
}
</script>
