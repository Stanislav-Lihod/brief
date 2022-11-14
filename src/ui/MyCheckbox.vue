<template>
  <div class="checkbox-container">
    <div class="label-heading" v-if="item.label" style="margin-bottom:32px">{{item.label}}</div>
    <div class="checkbox" v-for="checkbox in item.values" :key="checkbox">
      <input @change="$store.commit('setArraySelectedValues', {name: item.name ,value: $event.target.value})" :type="item.type" :id="item.label + checkbox" :name="item.label" :value="checkbox">
      <label 
        @click="$event.target.classList.toggle('checked')" 
        :for="item.label + checkbox"
        :class="{checked: $store.state[$store.state.pageModule].result[item.name].includes(checkbox)}"
        > {{checkbox}}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-checkbox',
    props:{
      item:{
        type:[Object],
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
.checkbox-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .checkbox{
    margin-bottom: 32px;

    &:last-child{
      margin-bottom: 0;
    }
  }

  input[type=checkbox]{
    position: absolute;
    z-index: -100;
    opacity: 0;
  }

  label{
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 24.3px;
    cursor: pointer;

    &::before{
      content: '';
      display: inline-block;
      min-width: 24px;
      height: 24px;
      border-radius: 8px;
      margin-right: 24px;
      background-color: #164560;
      transition: .3s;
    }

    &.checked{
      &::before{
        background-color: #F1931B;
      }
    }
  }

}
</style>