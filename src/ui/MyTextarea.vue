<template>
  <label-heading v-if="item.label" :label="item.label"/>
  <textarea 
    :placeholder="item.placeholder 
                  ? item.placeholder[$store.state.locales.currentLocale] 
                    ? item.placeholder[$store.state.locales.currentLocale] 
                    : item.placeholder['en']
                  : null"
    :value="$store.state[$store.state.pageModule].result[item.name]" 
    @input="$store.commit('setValue',{name: item.name, value: $event.target.value})"
    ></textarea>
</template>

<script>
  export default {
    name: 'my-textarea',
    props:{
      item: {
        type : [Object],
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
textarea{
  width: 100%;
  min-height: 124px;
  background: #F1E9E8;
  border-radius: 8px;
  font-size: 20px;
  line-height: 24px;
  outline: none;
  border: none;
  margin: 16px 0;
  transition: .3s;
  resize: none;
  padding: 24px;
  color: #022437;

  &:focus{
      box-shadow: 0px 0px 20px 4px rgba($color: #F1931B, $alpha: 0.3);
    }
}
</style>