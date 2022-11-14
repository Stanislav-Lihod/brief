<template>
  <div class="radio-container">
    <div class="label-heading" v-if="item.label">{{item.label}}</div>
    <div class="radio" v-for="radio in item.values" :key="radio">
      <input @change="$store.commit(`${$store.state.pageModule}/setCheckedRadio`, {name: item.name ,value: $event.target.value})" :type="item.type" :id="radio" :name="item.label" :value="radio">
      <label 
        @click="checkingRadioButton" 
        :for="radio"
        :class="{checked: $store.state[$store.state.pageModule].result[item.name]?.includes(radio)}"
        > {{radio}}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-radio',
    props:{
      item:{
        type:[Object],
        required: true
      }
    },
    methods:{
      checkingRadioButton(e){
        const parent = e.target.closest('.radio-container')
        parent.querySelectorAll('.radio > label').forEach(el => el.classList.remove('checked'))
        e.target.classList.add('checked')
      }
    }
  }
</script>

<style lang="scss" scoped>
.radio-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .radio{
    margin-bottom: 32px;

    &:last-child{
      margin-bottom: 0;
    }
  }

  input[type=radio]{
    position: absolute;
    z-index: -100;
    opacity: 0;
  }

  label{
    display: flex;
    align-items: flex-start;
    font-size: 20px;
    line-height: 24.3px;
    text-align: left;
    cursor: pointer;

    &::before{
      content: '';
      display: inline-block;
      min-width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 24px;
      background-color: #164560;
    }

    &.checked{
      &::before{
        min-width: 16px;
        height: 16px;
        background-color: #F1931B;
        border: 4px solid #164560;
      }
    }
  }

}
</style>