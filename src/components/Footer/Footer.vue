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
        <a href="https://www.linkedin.com/in/tatkad/"><img src="@/assets/img/social/linkedin.svg" alt="linkedin"></a>
        <a href="https://www.instagram.com/tatka_lih/"><img src="@/assets/img/social/instagram.svg" alt="Instagram"></a>
        <a href="https://t.me/Tatkalih"><img src="@/assets/img/social/telegram.svg" alt="Telegram"></a>
        <a href="https://www.behance.net/tatkad"><img src="@/assets/img/social/behance.svg" alt="Behance"></a>
      </div>
      <div class="developer">
        {{$t('development')}}: <a href="https://www.linkedin.com/in/s-lihi/">Stanislav Lihodievski</a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

footer{
  background-image: url('@/assets/img/footer/bgFooter.png');
  background-repeat: no-repeat;
  height: 530px;
  background-position: top center;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  @media #{$mediaSmallQuery} {
    height: 65vw;
  }

  .email{
    font-family: 'Anton', sans-serif;
    color: #022437;
    font-size: 48px;
    line-height: 72px;
    text-decoration: none;

    @media #{$mediaSmallQuery} {
      font-size:20px;
    }
  }

  .developer{
    color: #022437;
    font-weight: 700;
    margin-bottom: 20px;

    @media #{$mediaSmallQuery} {
      font-size: 14px;
      margin-bottom: 8px;
    }

    a{
      color: #022437;

      &:hover{
        text-decoration: none;
      }
    }
  }
  .social{
    margin-top: 48px;
    margin-bottom: 72px;

    @media #{$mediaSmallQuery} {
      margin-top: 0;
      margin-bottom: 16px;
    }

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

  @media #{$mediaSmallQuery} {
    margin-top: 12vw;
  }

  h3{
    color: #F1931B;
    font-size: 44px;
    line-height: 1.5;
    margin-bottom: 24px;
  }

  p{
    font-size: 32px;
    line-height: 39px;

    @media #{$mediaSmallQuery} {
      font-size: 14px;
      line-height: 24px;
    }
  }
}

html[lang='ru'] h3{
  font-family: 'Breaf', sans-serif;
  text-shadow: 1px 1px 8px rgb(0 0 0 / 40%);
  letter-spacing: 2px;
  font-size: 50px;

  @media #{$mediaSmallQuery} {
    font-size: 7vw;
  }
}
html[lang='en'] h3{
  font-family: 'Anton', sans-serif;
}
</style>