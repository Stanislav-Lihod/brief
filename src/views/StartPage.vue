<template>
  <div class="container start-page">
    <div class="start-page__counter">0{{$store.state.pagePosition}}</div>
    <div class="form">
      <div class="form__title">{{$store.state.titleCurrentPage}}</div>
      <div class="form__description">{{$store.state.descriptionCurrentPage}}</div>
      <div v-for="item in $store.state[$store.state.pageModule].fields" :key="item.id">

        <my-input v-if="item.type === 'text' || item.type === 'email'  || item.type === 'password' || item.type === 'number'" :item="item"/>        

        <range-slider v-else-if="item.type === 'rangeSlider'" :item="item" :style="{margin: '48px 0'}"/>

        <my-radio v-else-if="item.type === 'radio'" :item="item"/>

        <my-checkbox v-else-if="item.type === 'checkbox'" :item="item"/>

        <my-textarea v-else-if="item.type='textarea'" :item="item"/>
        
      </div> 
    </div>
    <ManagmentStatus/>
  </div>
</template>

<script>
import RangeSlider from '@/ui/RangeSlider.vue'
import ManagmentStatus from '../components/Status/ManagmentStatus.vue'
import MyCheckbox from '@/ui/MyCheckbox.vue'

  export default {
    components: { ManagmentStatus, RangeSlider, MyCheckbox },
    data(){
      return{
        numbersDays: 1,
      }
    },
    watch:{
      checkedNames(newValue){
        this.$store.commit('setCheckbox', newValue)
      }
    },
    mounted(){
      this.$store.commit('setInfo')
    },
    methods:{
    }
  }
</script>

<style lang="scss" scoped>
.start-page{
  padding-top: 140px;

  &__counter{
    font-family: 'Anton', sans-serif;
    color: #F1931B;
    font-size: 80px;
    line-height: 1.5;
    margin-bottom: 18px;
  }
}

.form{
  margin-bottom: 160px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  &__title{
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 32px;
    color: #F1931B;
  }

  &__description{
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 80px;
  }
}
</style>