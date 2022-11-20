<template>
  <header>
    <div class="planet-container"><img src="@/assets/img/planet/planet_2.svg" alt="planet" class="planet__second"></div>
    <div class="container">
      <img src="@/assets/img/planet/planet_1.svg" alt="planet" class="planet__one">
      <div class="locale">
        <div class="shadow"></div>
        <div class="locale-container">
          <div class="locale-lang" 
            @click="swiftLocale" 
            v-for="locale in reversedLocales" 
            :key="locale"
            >
            {{locale.toUpperCase()}}
          </div>
        </div>
      </div>
      <div class="header-content">
        <h1>{{$t('headerTitle')}}</h1>
        <p>{{$t('headerDescription')}}</p>
        <my-button @click="startQuiz" style="margin-top:8vw;">{{$t('headerButton')}}</my-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods:{
    startQuiz(){
      document.querySelector('.start-page__counter').scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    swiftLocale(e){
      this.$i18n.locale = e.target.textContent.toLowerCase()
      this.$store.commit('changeLocale', e.target.textContent.toLowerCase())
    }
  },
  computed:{
    reversedLocales() {
      return this.$store.state.locales.possibleLocales.slice().reverse();
    },
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
  position: relative;

  .locale{
    position: absolute;
    right: 40px;    

    &-container{
      transform: translateY(-60px);
      transition: .3s;
      background-color: #164560;
      max-width: 64px;

      &::after{
        content: "";
        background-image: url('@/assets/img/header/locale-triangle.svg');
        display: inline-block;
        position: absolute;
        z-index: -1;
        height: 75px;
        width: 64px;
        left: 0;
        top: 58px;
      }

      &:hover{
        transform: translateY(0);
      }
    }
    .shadow{
      display: block;
      width: 100%;
      height: 10px;
      position: absolute;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 3;
    }
    
    &-lang{
      color: white;
      font-family: 'Anton', sans-serif;
      font-size: 20px;
      line-height: 30px;
      padding: 14px 23px;
      cursor: pointer;
      transition: .3s;

      &:hover{
        color: #F1931B;
      }
    }
  }

  .header{
    &-content{
      display: flex;
      flex-direction: column;
      padding-top: 260px;
      align-items: center;
      max-width: 846px;
      margin: 0 auto;
      position: relative;

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