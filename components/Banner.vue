<template >
  <div class="container-fluid banner" :style="{ 'background-image': 'url(' +  src + ')' }">
    <!-- <img :src="/assets/img/banner/{{img.url}}" alt=""> -->
    <!-- <img src="~/assets/img/banner/home-banner.jpg" alt=""> -->
    <!-- <img :src="src" alt="">  -->
    <div class="b-text" id="b-text-item.id">
    </div>
    <div id='shop'>
      <h1 class="title-banner">NEW COLLECTION SUMMER
      </h1>
      <div class="shop-button">
        <a href="/san-pham" class="shop">Xem chi tiết</a>
      </div>
    </div>
    <div id="go-down">
      <a href="#" id="go-about"></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['banner'],
  data () {
    return {
      img: this.banner[0],
      src: require('~/assets/img/banner/' + this.banner[0].url)
    }
  }
}
</script>

<style scoped>
.title-banner {
  text-transform: uppercase
}

.title-banner::after {
  content: '';
  background: #00dccb;
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  height: 12px;
  z-index: -1;
}
</style>
