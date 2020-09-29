<template>
  <div>
    <div>
      <h3>Lazy picture</h3>
      <a :href="getUrlImage()" target="_blank">
        <picture>
          <source
            media="(min-width:730px)"
            :srcset="getResponsiveImage(urlimage, '730')"
          />
          <source
            media="(min-width:706px)"
            :srcset="getResponsiveImage(urlimage, '706')"
          />
          <source
            media="(min-width:560px)"
            :srcset="getResponsiveImage(urlimage, '560')"
          />
          <source
            media="(min-width:411px)"
            :srcset="getResponsiveImage(urlimage, '411')"
          />
          <img
            class="w-full rounded-lg"
            :srcset="getResponsiveImage(urlimage, '360')"
          />
        </picture>
      </a>
      <img v-lazy="urlimage" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    urlimage: {
      type: String,
      required: true,
    },
  },
  methods: {
    getUrlImage() {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto/v1/${this.urlimage}`
    },
    getResponsiveImage(cloudinaryId, size) {
      return `https://res.cloudinary.com/djhqderty/image/upload/f_auto,q_50,w_${size}/v1/${cloudinaryId}`
    },
  },
}
</script>
