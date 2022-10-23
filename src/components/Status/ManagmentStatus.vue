<template>
  <div class="managment-status">
    <div class="managment-status__managment">
      <my-button @click="nextState" style="margin-right:48px;">{{nextBtnText}}</my-button>
      <div v-if="$store.state.pagePosition > 1" class="managment-status__managment-back" @click="prevState">Сome back</div>
    </div>
    <div class="managment-status__status">
      <div class="managment-status__status-progress">
        <div class="managment-status__status-progress-planet-start">
          <img src="@/assets/img/progressPlanet/planet_start.png" alt="Progress Start">
        </div>
        <div class="managment-status__status-progress-line">
          <div class="managment-status__status-progress-line--progress" :style="{ width: $store.state.progress + '%' }"></div>
        </div>
        <div class="managment-status__status-progress-planet-finish">
          <img src="@/assets/img/progressPlanet/planet_finish.png" alt="Progress Finish">
        </div>
      </div>
      <div class="managment-status__status-position">{{$store.state.pagePosition}} of {{$store.state.maxPagePosition}}</div>
    </div>
  </div>
</template>

<script>
import MyButton from '@/ui/MyButton.vue'

  export default {
  components: { MyButton },
    methods:{
      nextState(){
        if (this.$store.state.pagePosition !== this.$store.state.maxPagePosition){
          this.$store.commit('setPagePosition', this.$store.state.pagePosition+1)
          this.$store.commit('setProgress')
          this.$store.commit('setInfo')
        } else{
          this.$store.commit('sendList')
        }
      },
      prevState(){
        this.$store.commit('setPagePosition', this.$store.state.pagePosition-1)
        this.$store.commit('setProgress')
        this.$store.commit('setInfo')
      }
    },
    mounted(){
      this.$store.commit('setProgress')
    },
    computed:{
      nextBtnText(){
        if (this.$store.state.pagePosition === this.$store.state.maxPagePosition){
          return 'Send Email'
        }
        return 'Next'
      }
    }
  }
</script>

<style lang="scss" scoped>
.managment-status{
  max-width: 1000px;
  margin: 0 auto;

  &__managment{
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    &-back{
      cursor: pointer;
      opacity: .5;
      transition: .3s;

      &:hover{
        opacity: 1;
      }
    }
  }

  &__status{
    &-progress{
      margin-bottom: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-line{
        height: 2px;
        width: 100%;
        background-color: #E3E3E3;

        &--progress{
          height: 3px;
          background-color: #F1931B;
          transition: .5s;
          position: relative;
          display: flex;
          align-items: center;

          &::after{
            position: absolute;
            right: 0;
            content: '';
            display: block;
            width: 50px;
            height: 34px;
            transform: translateY(-5px);
            background-size: cover;
            background-image: url('@/assets/img/rocket.png');
          }
        }
      }
    }

    &-position{
      opacity: .5;
    }
  }
}
</style>