<template>
  <div class="container-item">
    <div :id="'carousel-'+ id" class="carousel slide" data-ride="carousel" data-interval="false">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li v-for="(img, index) in item.images" :key="index" v-if="index === 0" :data-target="'#carousel-'+ id" :data-slide-to="index" class="active"></li>
        <li v-else :data-target="'#carousel-'+ id" :data-slide-to="index" class="active"></li>

      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <!-- <h1>{{item}}</h1> -->
        <div class="item active" v-for="(img, index) in item.images" :key="index" v-if="index === 0">
          <router-link to="/chi-tiet-sp"><img :src="convertImg(img.url)" alt="..."></router-link>

        </div>
        <div class="item" v-else>
          <router-link to="/chi-tiet-sp"><img :src="convertImg(img.url)" alt="item.name"></router-link>

        </div>
      </div>
    </div>
    <div class="info">
      <a href="" class="name">{{item.name}}</a>
      <a href="" class="price">{{item.price}} </a>
    </div>
    <div class="cart-s">
      <button class="btn btn-info couter-heart">Yêu thích
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
      <button class="btn btn-danger" data-toggle="modal" data-target="#quickbuy">Mua hàng
        <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import searchBar from './SearchBar'
export default {
  props: ['item', 'id'],
  components: { searchBar },
  methods: {
    convertImg (img) {
      return require('~/assets/img/product/' + img)
    }
  }
}
</script>

<style scoped>
.row {
  margin: 30px;
}

ol {
  bottom: -15px;
}

ol>li {
  background: #555555;
}

li.active {
  background: green;
}

.container-item {
  position: relative;
  border: 1px solid rgba(85, 85, 85, 0.18);
  margin: 20px 0;
}


.info {
  text-align: center;
  width: 100%;
  margin: auto;
}

.info>a {
  display: block;
  margin: auto;
}

.name {
  font-size: 1em;
}

.price {
  font-size: 1.2em;
  color: red;
  font-weight: 0;
}

.cart-s {
  width: 100%;
  position: absolute;
  bottom: -40px;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
}

.cart-s>button {
  display: block;
}


.container-item:hover .cart-s {
  transform: translateY(-50px);
  opacity: 1;
}

.container-item:hover .info {
  visibility: hidden;
}

.container-item:hover {
  -webkit-box-shadow: 0px 9px 19px 0px rgba(48, 57, 60, 0.75);
  -moz-box-shadow: 0px 9px 19px 0px rgba(48, 57, 60, 0.75);
  box-shadow: 0px 9px 19px 0px rgba(48, 57, 60, 0.75);
}
</style>
