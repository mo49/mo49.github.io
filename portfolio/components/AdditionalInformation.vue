<template>
  <div class="additional-information">
    <h2>ADDITIONAL INFORMATION</h2>
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

<style lang="scss">
@import "~assets/sass/module/additional-information";
</style>
