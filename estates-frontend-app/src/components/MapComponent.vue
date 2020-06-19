<template>
    <div id="map">
        <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
    </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: "pk.eyJ1IjoiampuYWQiLCJhIjoiY2tibTB6ZzBjMWI1czJycGYyMDloaHZ3eiJ9.IXe1E4jrDre_1zRtH-yGNA", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/light-v10" // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>