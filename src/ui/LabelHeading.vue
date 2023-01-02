<template>
  <div class="label-heading">{{label[$store.state.locales.currentLocale] ? label[$store.state.locales.currentLocale] : label['en']}}</div>
</template>

<script>
  export default {
    name: 'label-heading',
    props:{
      label:{
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.label-heading{
  text-align: left;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #F1931B;
  margin-top: 64px;
  margin-bottom: 32px;

  @media #{$mediaSmallQuery} {
    margin-top: 32px;
    margin-bottom: 24px;
  }
}
</style>