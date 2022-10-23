<template>
  <button><slot></slot></button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style lang="scss" scoped>
button{
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  padding: 14px 32px;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  font-size: 32px;
  font-weight: 700;
  background-color: transparent;
  color: #FFFFFF;
  transition: .3s;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 0px 20px 4px rgba($color: #F1931B, $alpha: 0.3);
  }
}
</style>