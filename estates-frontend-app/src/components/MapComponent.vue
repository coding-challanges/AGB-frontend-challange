<template>
  <div id="map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle">
    <!-- <MglMarker :coordinates.sync="markerCoordinates" color="green" /> -->
    <MglGeojsonLayer
      type="fill"
      layerId="myLayer"
      :layer="geoJsonlayer"
      :source="geoJson"
      :sourceId="geoJson.data.id"
    />
  </MglMap>
  </div>
</template>

<script>
// import { Component, Prop, Vue } from "vue-property-decorator";
import Mapbox from "mapbox-gl";
import { MglMap, MglGeojsonLayer } from "vue-mapbox";

export default  {
  name: "MapComponent",
  props: {
    myGeoData: {}
  },
  components: {
    MglMap,
    MglGeojsonLayer
  },

  data() {
    return {
      accessToken: "pk.eyJ1IjoiampuYWQiLCJhIjoiY2tibTB6ZzBjMWI1czJycGYyMDloaHZ3eiJ9.IXe1E4jrDre_1zRtH-yGNA", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      geoJson : { 
        type : "geojson",
        data : this.myGeoData
      },
      geoJsonlayer : {
        type: "circle",
        paint: {
          "circle-color": "#2c3e50"
        }
      }
    };
  },
  watch: {
    myGeoData : function() {
      this.geoJson = { 
        type : "geojson",
        data : this.myGeoData
      }
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  


};
</script>

<style lang="scss">

#map{
  height: 100vh;
}
</style>