<template>
    <div id="app">
      <router-view/>
      <Footer v-show="$route.meta.showFoot"/>
    </div>
</template>

<script>
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('getAddress');
    this.$store.dispatch('getUserInfo');
  },
  components: {
    Footer
  }
}
</script>

<style>
</style>
