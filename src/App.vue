<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>  
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
  export default {
    components: { Header, Footer },
    mounted(){
      this.$store.commit('setLocale')
    }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}

body{
  background-color: #022437;
  color: white;
}

.container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.vue3-slider {
  .handle{
    transform: scale(5) !important;
  }
  .tooltip{
    display: block !important;
    transition: none !important;
  }
}

</style>
