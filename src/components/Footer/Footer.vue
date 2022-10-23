<template>
  <div class="footer">
    <div class="container">
      <h3>Contact</h3>
      <p>If you have any questions, we can contact you</p>
    </div>
  </div>
  <footer>
    <div class="container">
      <a href="mailto:tatka.d98@gmail.com" class="email">tatka.d98@gmail.com</a>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
footer{
  background-image: url('@/assets/img/footer/bgFooter.png');
  background-repeat: no-repeat;
  height: 530px;
  background-position: top center;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  .email{
    font-family: 'Anton', sans-serif;
    color: #022437;
    font-size: 48px;
    line-height: 72px;
    text-decoration: none;
  }
}

.footer{
  margin-top: 200px;
  margin-bottom: 34px;

  h3{
    font-family: 'Anton', sans-serif;
    color: #F1931B;
    font-size: 44px;
    line-height: 1.5;
    margin-bottom: 24px;
  }

  p{
    font-size: 32px;
    line-height: 39px;
  }
}
</style>