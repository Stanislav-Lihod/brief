<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>  
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
  export default {
    components: { Header, Footer }
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
}

body{
  background-color: #022437;
  color: white;
}

.container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

.label-heading{
  text-align: left;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #F1931B;
  margin-top: 64px;
  margin-bottom: 32px;
}

</style>
