<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';
  
  export default {
    name: 'AppVue',
    components:{
        AppHeader,
        AppMain,
        AppFooter
      }
  }
</script>

<template>
  <div>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
  </div>
</template>

<style lang="scss">
  @import "bootstrap/scss/bootstrap";
  @import './styles/general.scss';

</style>
