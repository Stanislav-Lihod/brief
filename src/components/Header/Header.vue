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
        <my-button @click="startQuiz" style="margin-top:8vw;" :class="{'rocket': true}">{{$t('headerButton')}}</my-button>
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
@import '@/assets/style/variables.scss';

header{
  background-image: url(@/assets/bgHeader.png);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  height: 846px;
  position: relative;

  @media #{$mediaSmallQuery} {
    height: 180vw;
    max-height: 846px;
  }

  .locale{
    position: absolute;
    right: 40px;   
    z-index: 10; 

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

      @media #{$mediaSmallQuery} {
        padding-top: 50vw;
      }

      h1{
        font-size: 80px;
        line-height: 1.5;
        margin-bottom: 48px;
        text-shadow: 1px 1px 8px rgb(0 0 0 / 40%);
        letter-spacing: 2px;

        @media #{$mediaSmallQuery} {
          font-size: 30px;
          line-height: 35px;
        }
      }

      p{
        font-size: 29px;
        line-height: 37px;
        color: #F1931B;

        @media #{$mediaSmallQuery} {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
}

html[lang='ru'] h1{
  font-family: 'Breaf', sans-serif;
  font-size: 100px;
  line-height: 1.1;
}
html[lang='en'] h1{
  font-family: 'Anton', sans-serif;
}
</style>