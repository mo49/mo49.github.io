<template>
  <div class="additional-information">
    <Ameba :width="500" :height="500" :color="'#9F73FF'" />
    <div class="title">
      <h2>Others</h2>
      <p>その他</p>
    </div>
    <div class="additional-information__content">
      <ul class="additional-information__list">
        <li class="additional-information__item">
          <p>
            <nuxt-link to="/skillset">More details on the skillset</nuxt-link>
          </p>
        </li>
        <li class="additional-information__item">
          <p>
            <a class="link-hover" href="https://www.youracclaim.com/badges/2d19f647-3f90-47ba-84d9-3ac3a941ec84/" target="_blank">Unity Certified Developer</a>
          </p>
        </li>
        <li class="additional-information__item">
          <p>Japanese - Native, English - Basic</p>
        </li>
        <li class="additional-information__item accordion-menu">
          <input type="checkbox" checked>
          <p class="accordion-menu__title">Travel Abroad</p>
          <i></i>
          <ul class="accordion-menu__content">
            <li>China ( Beijing, Shanghai, Xi'an, Shenzhen, Hong Kong )</li>
            <li>Korea ( Seoul )</li>
            <li>Philippine ( Cebu Island )</li>
            <li>Thailand ( Bangkok, Ayutthaya )</li>
            <li>India ( New Delhi, Jaipur, Agra, Haridwar )</li>
            <li>France ( Paris, Mont Saint-Michel )</li>
            <li>UK ( London )</li>
            <li>Italy ( Roma )</li>
            <li>Spain ( Madrid, Barcelona )</li>
            <li>Netherlands ( Amsterdam, Rotterdam, Alkmaar )</li>
            <li>Egypt ( Cairo, Giza, Bahariya, Luxor, Aswan, Abu Simbel )</li>
            <li>Jordan ( Amman, Petra )</li>
            <li>Israel ( Jerusalem )</li>
            <li>USA ( NY, Washington D.C., LA, Las Vegas, Hawaii )</li>
            <li>Canada ( Banff )</li>
            <li>Mexico ( Mexico City )</li>
            <li>Peru ( Lima, Cusco, Huacachina, Nazca, Ollantaytambo, Machu Picchu, Puno )</li>
            <li>Chile ( Santiago, Easter Island )</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Ameba from '~/components/Ameba.vue'
export default {
  components: {
    Ameba,
  }
}
</script>

<style lang="scss" scoped>
*{
  position: relative;
}
.title{
  @include pc-layout{
    left: 0px;
  }
  @include sp-layout{
    left: 20px;
  }
}
canvas{
  top: -80px;
  left: -200px;
}

.additional-information{
  margin-bottom: 200px;
  a{
    // @include link();
    color: $font-color-desc;
    &:visited{
      color: $font-color-desc;
    }
  }
  &__item{
    list-style: disc;
    margin-bottom: 5px;
    margin-left: 20px;
    ul{
      margin-left: 10px;
    }
    li{
      list-style-type: circle;
    }
  }
  .accordion-menu{
    @include accordion-menu('.accordion-menu__content', 2px);
    &__title{
      display: inline-block;
    }
    i{
      margin-top: 0;
      left: 12px;
      top: -11px;
      position: relative;
      display: inline-block;
    }
  }
}
</style>
