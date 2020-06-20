<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar {
  float : left;
  width : 25%
}

.mapContent {
  float : right;
  width : 75%
}
</style>

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <SidebarComponent class="sidebar" @filteredGeoData="updateGeoData" />
    <MapComponent class="mapContent" :myGeoData="geoDataMap"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import MapComponent from "./components/MapComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";

import geoData from "./assets/data/geoData.json";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
  name: "App",
  components: {
    MapComponent,
    SidebarComponent
  },
  data() {
    return {
      geoDataMap : geoData
    };
  },
  methods: {
    updateGeoData(newGeoData){
      this.geoDataMap = newGeoData;
    }
  }
};
</script>