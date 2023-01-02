<template>
  <div class="range-slider">
    
    <label-heading v-if="item.label" :label="item.label"/>
    <div class="range-slider__container">
      <slider
      v-model="value"
      color="#F1931B"
      track-color="#E3E3E3"
      :tooltip="true"
      tooltipColor="transparent"
      tooltipTextColor="#A1A0A0"
      :tooltipText="tooltipDay"
      :max="item.max"
      :min="1"
      />

    <div class="range-slider__range"><span>1</span>{{item.max}}</div>
    </div>
    
  </div>
</template>

<script>
  import slider from 'vue3-slider'

  export default {
    components: { slider },
    props:{
      item: {
        type : [Object],
        required: true
      }
    },
    data(){
      return{
        value: 1,
        tooltipDay: `%v ${this.$store.state.locales.currentLocale === 'en' ? 'day' : 'день'}`
      }
    },
    methods:{
      declinationDays(value){
        if(this.$store.state.locales.currentLocale === 'en'){
         return this.tooltipDay = value === 1 ? "%v day" : "%v days" 
        }
        if(this.$store.state.locales.currentLocale === 'ru'){
          return this.tooltipDay = (()=>{
            const n = Math.abs(value) % 100
            const n1 = n % 10
            if ((n >= 10 && n <= 20) || (n1 >= 5 && n1 <= 9) || n1 == 0) {
              return "%v дней";
            }
            if (n1 > 1 && n1 < 5) {
              return "%v дня";
            }
            if (n1 == 1) {
              return "%v день";
            }
          })()
        }
      }
    },
    watch:{
      value(newValue){
        this.$store.commit('setValue',{name: this.item.name, value: newValue})
        this.declinationDays(newValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.range-slider{
  .label-heading{
    margin-bottom: 64px;
  }

  &__container{
    width: 95%;
    margin: 0 auto;    

    @media #{$mediaSmallQuery} {
      width: 90%;
    }
  }

  &__range{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 24px;
    margin-top: 24px;
    opacity: .5;
  }  
}
</style>