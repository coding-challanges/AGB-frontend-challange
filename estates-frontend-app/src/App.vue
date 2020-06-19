<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <MapContainerComponent msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <MapComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MapContainerComponent from "./components/MapContainerComponent.vue";
import MapComponent from "./components/MapComponent.vue";

@Component({
  components: {
    MapContainerComponent,
    MapComponent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>