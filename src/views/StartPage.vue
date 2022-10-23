<template>
  <div class="container start-page">
    <div class="start-page__counter">0{{$store.state.pagePosition}}</div>
    <div class="form">
      <div class="form__title">{{$store.state.titleCurrentPage}}</div>
      <div class="form__description">{{$store.state.descriptionCurrentPage}}</div>
      <div v-for="item in $store.state[$store.state.pageModule].fields" :key="item.id">
        <my-input 
          v-if="item.type !== 'rangeSlider' && item.type !== 'checkbox'  && item.type !== 'textarea'" 
          :type="item.type" 
          :required="item.required" 
          :name="item.name" 
          :placeholder="item.placeholder"
          :model-value="`${$store.state[$store.state.pageModule][item.name]}`"  
          @update:model-value="$store.commit(`${$store.state.pageModule}/setValue`,{name: item.name, value: $event})"
        />        

        <range-slider
          v-else-if="item.type === 'rangeSlider'"
          :style="{margin: '48px 0'}"
          :name="item.name"
          v-model:numbersDays="numbersDays" 
          :max='item.max'
          :min='1'
          :tooltip='true'
          :label="item.label"
          @update:numbersDays="$store.commit(`${$store.state.pageModule}/setValue`,{name: item.name, value: $event})"
        />
          
        <div v-else-if="item.type === 'checkbox'">
          <div v-for="checkbox in item.values" :key="checkbox">
            <input v-model="checkedNames" :type="item.type" :id="checkbox" name="vehicle1" :value="checkbox">
            <label :for="checkbox"> {{checkbox}}</label>
          </div>
        </div>

        <my-textarea 
          v-else-if="item.type='textarea'"
          :placeholder="item.placeholder"
          :model-value="`${$store.state[$store.state.pageModule][item.name]}`"  
          @update:model-value="$store.commit(`${$store.state.pageModule}/setValue`,{name: item.name, value: $event})"
        ></my-textarea>
      </div> 
    </div>
    <ManagmentStatus/>
  </div>
</template>

<script>
import RangeSlider from '@/ui/RangeSlider.vue'
import ManagmentStatus from '../components/Status/ManagmentStatus.vue'
import { mapActions, mapMutations } from 'vuex'

  export default {
    components: { ManagmentStatus, RangeSlider },
    data(){
      return{
        numbersDays: 1,
        checkedNames: [],
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