<template>
<div>
<span id="map"></span>
  <div class='google-map' :id="mapName"></div>
  </div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map'
    }
  },
  mounted: function () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 10,
      // eslint-disable-next-line
      center: new google.maps.LatLng(39.72, -104.99)
    }
    // eslint-disable-next-line
    const map = new google.maps.Map(element, options)
  }
}
</script>

<style scoped>
.google-map {
  border-top: #2efd96 5px solid;
  border-bottom: #2efd96 5px solid;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  background: #222;
}
</style>
