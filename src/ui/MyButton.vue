<template>
  <button><slot></slot></button>
</template>

<script>
  export default {
    name: 'my-button',
  }
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

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
  position: relative;

  @media #{$mediaSmallQuery} {
    font-size: 16px;
    line-height: 24px;
    padding: 14px;
  }

  &:disabled{
    opacity: .5;
  }

  &:hover{
    box-shadow: 0px 0px 20px 4px rgba($color: #F1931B, $alpha: 0.3);
  }

  &.rocket{
    &::after{
      content: '';
      background-image: url(@/assets/img/rocket.png);
      background-repeat: no-repeat;
      background-size: cover;
      width: 61px;
      height: 40px;
      display: block;
      position: absolute;
      right: -25px;
      top: -25px;
      transform: rotate(-30deg);

      @media #{$mediaSmallQuery} {
        transform: rotate(-30deg) scale(0.7);
      }
    }
  }
}
</style>