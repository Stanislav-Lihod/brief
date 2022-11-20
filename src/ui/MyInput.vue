<template>
  <input 
  :type="item.type" 
  :required="item.required" 
  :name="item.name" 
  :placeholder="item.placeholder[$store.state.locales.currentLocale] ? item.placeholder[$store.state.locales.currentLocale] : item.placeholder['en']"
  :value="`${$store.state[$store.state.pageModule].result[item.name]}`" 
  @input="$store.commit('setValue',{name: item.name, value: $event.target.value})"
  >
</template>

<script>
  export default {
    name: 'my-input',
    props:{
      item: {
        type : [Object],
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
input{
  &[type=text],
  &[type=email],
  &[type=password]{
    padding: 24px;
    background: #F1E9E8;
    border-radius: 8px;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    outline: none;
    border: none;
    margin: 16px 0;
    transition: .3s;
    color: #022437;

    &:focus{
      box-shadow: 0px 0px 20px 4px rgba($color: #F1931B, $alpha: 0.3);
    }
  }
}
</style>