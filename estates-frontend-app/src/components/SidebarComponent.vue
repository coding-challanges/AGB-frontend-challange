<style lang="scss">
#dropdownDiv {
  position: center;
  margin-top: 50px;
}

#optionDropdown {
  width : 35%;
  margin : 5px;
}

#suburbDropdown {
  width : 35%;
  margin : 5px;
}

#councilDropdown {
  width : 35%;
  margin : 5px;
}
</style>


<template>
<div id="dropdownDiv">
  <h2> Select options : </h2>

  <b-form-select id="optionDropdown" v-model="selectedOwnership" :options="ownershipOptions"></b-form-select>
  <b-form-select id="suburbDropdown" v-model="selectedSuburb" :options="suburbOptions"></b-form-select>
  <b-form-select id="councilDropdown" v-model="selectedCouncil" :options="councilOptions"></b-form-select>
</div>

</template>


<script>
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import { Vue } from "vue-property-decorator";
// import { Component, Prop, Vue } from "vue-property-decorator";
import geoDataOptions from "../assets/data/geoDataOptions.json";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
  name: "SidebarComponent",
  props: {
    msg: String
  },
  data(){
    return {
      selectedOwnership: null,
      ownershipOptions: geoDataOptions.Ownership,
      selectedSuburb: null,
      suburbOptions: geoDataOptions.Suburb,
      selectedCouncil: null,
      councilOptions: geoDataOptions.Council
    }
  }
}

</script>
