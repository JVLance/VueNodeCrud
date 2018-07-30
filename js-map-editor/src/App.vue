<template>
  <div id="app">
    <div v-if="processing">
      <BlockUI :message="txtProcessing"></BlockUI>
    </div>
    <router-view/>
  </div>
</template>

<script>

import globalTypes from '@/types/global';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  data () {
    return {
      txtProcessing:'Procesando Petición'
    }
  },
  computed: {
    ...mapGetters({
      processing: globalTypes.getters.processing
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
