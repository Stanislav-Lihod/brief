<template>
  <header>
    <div class="container header-content">
      <h1>Brief for development</h1>
      <p>Try to describe the task in as much detail as possible.</p>
      <my-button @click="cosn" style="margin-top:8vw;">Go to brief</my-button>
    </div>
  </header>
</template>

<script>
import MyButton from '@/ui/MyButton.vue'
  export default {
  components: { MyButton },
  methods:{
      cosn(){
        console.log('object');
      }
    }    
  }
</script>

<style lang="scss" scoped>

header{
  background-image: url(@/assets/bgHeader.png);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  height: 846px;

  .header{
    &-content{
      display: flex;
      flex-direction: column;
      padding-top: 260px;
      align-items: center;

      h1{
        font-family: 'Anton', sans-serif;
        font-size: 80px;
        line-height: 1.5;
        margin-bottom: 48px;
      }

      p{
        font-size: 32px;
        line-height: 39px;
        color: #F1931B;
      }
    }
  }
}
</style>