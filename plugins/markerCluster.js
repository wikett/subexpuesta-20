import Vue from 'vue'
import * as L from 'leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster)

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
})

const LeafletPlugin = {
  install(Vue) {
    // Expose Leaflet
    Vue.prototype.$L = L
  },
}

Vue.use(LeafletPlugin)
