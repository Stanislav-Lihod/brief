<template>
  <div class="footer">
    <div class="container">
      <h3>{{$t('footerTitle')}}</h3>
      <p>{{$t('footerDescription')}}</p>
    </div>
  </div>
  <footer>
    <div class="container">
      <a href="mailto:tatka.d98@gmail.com" class="email">tatka.d98@gmail.com</a>
      <div class="social">
        <a href="#"><img src="@/assets/img/social/linkedin.svg" alt="linkedin"></a>
        <a href="#"><img src="@/assets/img/social/instagram.svg" alt="linkedin"></a>
        <a href="#"><img src="@/assets/img/social/telegram.svg" alt="linkedin"></a>
        <a href="#"><img src="@/assets/img/social/behance.svg" alt="linkedin"></a>
      </div>
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

    // @media #{$mediaSmallQuery} {
    //   font-size:20px;
    // }
  }

  .social{
    margin-top: 48px;
    margin-bottom: 72px;

    a{
      margin-right: 20px;
      transition: .3s;

      &:last-child{
        margin-right: 0;
      }

      &:hover{
        opacity: 0.7;
      }
    }
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