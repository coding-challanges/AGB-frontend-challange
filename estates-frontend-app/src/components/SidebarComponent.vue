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
  <br/>
  <b-form-select id="optionDropdown" v-model="selectedOwnership" :options="ownershipOptions"></b-form-select>
  <b-form-select id="suburbDropdown" v-model="selectedSuburb" :options="suburbOptions"></b-form-select>
  <b-form-select id="councilDropdown" v-model="selectedCouncil" :options="councilOptions"></b-form-select>
  <b-button id="filterButton" v-on:click="filter" variant="outline-primary">Filter</b-button>
</div>

</template>


<script>
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import { Vue } from "vue-property-decorator";
// import { Component, Prop, Vue } from "vue-property-decorator";
import geoDataOptions from "../assets/data/geoDataOptions.json";
import geoData from "../assets/data/geoData.json";

import FilterService from "../services/FilterServices";

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
  },
  methods: {
    filter : function() {
      //creates a copy of the geoData
      var filterGeoData = JSON.parse(JSON.stringify(geoData));

      let features = filterGeoData.features;

      let filteredOwner;
      if(this.selectedOwnership != null) {
        filteredOwner = FilterService.filterProperty(features,"Ownership",this.selectedOwnership);
      } else {
        filteredOwner = features;
      }

      let filteredSuburb;
      if (this.selectedSuburb != null){
        filteredSuburb = FilterService.filterProperty(filteredOwner,"Suburb",this.selectedSuburb);
      } else {
        filteredSuburb = filteredOwner;
      }

      let filteredCouncil;
      if(this.selectedCouncil != null){
        filteredCouncil = FilterService.filterProperty(filteredSuburb,"Council",this.selectedCouncil);
      } else {
        filteredCouncil = filteredSuburb;
      }

      //clears features array and pass the filtered Values
      filterGeoData.features = new Array();
      filterGeoData.features = filteredCouncil;
      
      this.$emit("filteredGeoData", filterGeoData);
    }
  }

}

</script>
