<template>
  <div class="range-slider">
    
    <label-heading v-if="item.label" :label="item.label"/>
    <slider
      v-model="value"
      color="#F1931B"
      track-color="#E3E3E3"
      :tooltip="true"
      tooltipColor="transparent"
      tooltipTextColor="#A1A0A0"
      tooltipText="%v day"
      :max="item.max"
      :min="1"
    />

    <div class="range-slider__range"><span>1</span>{{item.max}}</div>
    
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
        value: 1
      }
    },
    watch:{
      value(newValue){
        this.$store.commit('setValue',{name: this.item.name, value: newValue})
      }
    }
  }
</script>

<style lang="scss" scoped>
.range-slider{
  .label-heading{
    margin-bottom: 64px;
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