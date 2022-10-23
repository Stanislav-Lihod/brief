<template>
  <div class="range-slider">
    <div class="label-heading" v-if="label">{{label}}</div>
    
    <slider
      v-model="numbersDays"
      color="#F1931B"
      track-color="#E3E3E3"
      :tooltip="tooltip"
      tooltipColor="transparent"
      tooltipTextColor="#A1A0A0"
      tooltipText="%v day"
      :max="max"
      :min="min"
    />

    <div class="range-slider__range"><span>1</span>{{max}}</div>
    
  </div>
</template>

<script>
  import slider from 'vue3-slider'

  export default {
    components: { slider },
    props:{
      max: {
        type: Number
      },
      min: {
        type: Number
      },
      tooltip: {
        type: Boolean
      },
      numbersDays:{
        type: [Number, String],
        required: true
      },
      label:{
        type: String
      }
    },
    watch:{
      numbersDays(newValue){
        this.$emit('update:numbersDays', newValue)
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