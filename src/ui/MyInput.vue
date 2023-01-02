<template>
  <input 
  :class="{'required':required}"
  :type="item.type" 
  :required="required" 
  :name="item.name" 
  :placeholder="item.placeholder[$store.state.locales.currentLocale] ? item.placeholder[$store.state.locales.currentLocale] : item.placeholder['en']"
  :value="`${$store.state[$store.state.pageModule].result[item.name]}`" 
  @input="changeInput"
  >
</template>

<script>
  import * as EmailValidator from 'email-validator';
  export default {
    name: 'my-input',
    props:{
      item: {
        type : [Object],
        required: true
      }
    },
    data(){
      return{ 
        required: this.item.required ?? false,
        currentValue: this.$store.state[this.$store.state.pageModule].result[this.item.name]
      } 
    },
    methods: {
      changeInput(event){
        this.$store.commit('setValue',{name: this.item.name, value: event.target.value})
        this.checkValidInput(event.target.value)
      },
      checkValidInput(value){
        this.required = (value).trim().length >= 3 ? false : this.item.required
        if(this.item.type === 'email'){
          return this.required = EmailValidator.validate(value) ? false : this.item.required
        }
      }
    },
    mounted(){
      this.checkValidInput(this.currentValue);
    }
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

    &.required{
      box-shadow: 0px 0px 20px 4px rgba($color: #f1581b, $alpha: 0.6);
    }
  }
}
</style>