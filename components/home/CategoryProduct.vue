<template >
  <!-- Baby product -->
   <!-- <h1 >{{product}}</h1>  -->

 <div class="container" >
    <div v-for="item in product" :key="item.name">
    <div class="row" >
        <div class="product-title">
            <div class="title-left">
                <span class="">{{item.name}}</span>
            </div>
            <div class="title-right">
                <a href="/san-pham">Toàn bộ sản phẩm  <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>


    <div class="row" v-if="item.position == 'left'">
        <div class="col-xs-* col-sm-5 col-md-5">

            <div class="product-item-l">
                <a href="/san-pham"> <img :src="convertImg2(item.url)" alt="poster" class="img-responsive"></a>

            </div>
        </div>


        <div class="col-xs-* col-sm-7 col-md-7">
            <div class="col-xs-* col-sm-4 col-md-4" style="overflow:hidden" v-for="item1 in item.list_product" :key="item1.name">
                <div class="product-item-s animate-left">
                    <a :href="'/san-pham/' + item1.path"><img :src="convertImg(item1.image)" class="img-responsive img-item" alt=""></a>
                    <div class="description">
                        <div class="name">
                            <span> {{item1.name}}</span>
                        </div>
                        <div class="price">
                            <ins>{{item1.price}}đ</ins>
                            <del>{{item1.sale}}đ</del>
                        </div>

                    </div>
                    <div class="cart-s">
                        <button class="btn btn-info btn-cart">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i></button>
                        <button class="btn btn-danger btn-cart" data-toggle="modal" data-target="#quickbuy">Mua hàng <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div class="row" v-else>
        <div class="col-xs-* col-sm-7 col-md-7">
            <div class="col-xs-* col-sm-4 col-md-4" v-for="item1 in item.list_product" :key="item1.name">
                <div class="product-item-s animate-right">
                    <a :href="'/san-pham/' + item1.path"><img :src="convertImg(item1.image)" class="img-responsive img-item" alt=""></a>
                    <div class="description">
                        <div class="name">
                            <span> {{item1.name}}</span>
                        </div>
                        <div class="price">
                            <ins>{{item1.price}}đ</ins>
                            <del>{{item1.sale}}đ</del>
                        </div>
                        <div class="effect"></div>

                    </div>
                    <div class="cart-s">
                        <button class="btn btn-info btn-cart">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i></button>
                        <button class="btn btn-danger btn-cart" data-toggle="modal" data-target="#quickbuy">Mua hàng <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                    </div>

                </div>

            </div>
        </div>


        <div class="col-xs-* col-sm-5 col-md-5">

            <div class="product-item-l">
                <a href="san-pham"> <img :src="convertImg2(item.url)" alt="poster" class="img-responsive"></a>

            </div>
        </div>

    </div>


    </div>
 </div> 
<!-- end baby product -->
</template>

<script>
export default {
  props: ['product'],
  methods: {
    convertImg (img) {
      return require('~/assets/img/product/' + img)
    },
    convertImg2 (img) {
      return require('~/assets/img/large-img/' + img)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row .product-title {
  height: 50px;
  line-height: 50px;
  margin-top: 30px;
  border-bottom: 2px solid orange;
  text-transform: capitalize;
}

.title-left {
  background: #F08113;
  float: left;
  text-align: center;
  color: white;
  width: 20%;
  padding: 0 15px
}

.title-right {
  float: right;
  padding: 0 15px;
  color: black;
}

@media (min-width: 1px) {
  .title-right {
    display: none;
  }
  .title-left {
    width: 70%;
  }
}

@media (min-width: 425px) {
  .title-right {
    display: block;
    padding: 0 15px;
  }
  .title-left {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .title-left {
    width: 30%;
  }
}

@media (min-width: 992px) {
  .title-left {
    width: 20%;
  }
}

.product-item-l {
  border: 1px solid rgba(85, 85, 85, 0.18);
  height: 520px;
  margin-top: 10px;
}

.product-item-s {
  border: 1px solid rgba(85, 85, 85, 0.18);
  height: 250px;
  margin: 10px 0;
  overflow: hidden;
}

.img-item {
  margin: auto;
}

.product-item>img {
  display: block;
}

.product-item-s>img {
  display: block;
}

@media (min-width: 768px) {
  .product-item-s>img {
    height: 86px;
  }
}

@media (min-width: 992px) {
  .product-item-s>img {
    height: 133px;
  }
}

@media (min-width: 1170px) {
  .product-item-s>img {
    height: 166px;
  }
}

.info {
  margin: 9px 0;
}

@media (min-width: 768px) {
  .title {
    font-size: 0.5em;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 0.6em;
  }
}

@media (min-width: 1170px) {
  .title {
    font-size: 0.8em;
  }
}

.description {
  padding: 0 5px;
}

.name {
  padding-top: 5px;
  height: 37px;
  /* line-height: 37px; */
}

.price {
  height: 20px;
}

.price>ins {
  display: inline-block;
  width: 50%;
  font-size: 1em;
  color: red;
}

.price>del {
  width: 50%;
  font-size: 1em;
  color: black;
}

.cart-s {
  /* width: 86%;
  position: absolute;
  bottom: 0;
  left: 8%; */
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.5s linear;
}

.btn-cart {
  width: 100%;
  padding: 5px 12px;
}

.product-item-s:hover .cart-s {
  opacity: 1;
  transform: translateY(-60px);
}

@keyframes run1 {
  0% {
    transform: translateX(0px)
  }
  25% {
    transform: translateX(5px)
  }
  50% {
    transform: translateX(-5px)
  }
  75% {
    transform: translateX(3px)
  }
  100% {
    transform: translateX(0px)
  }
}

.animate-left:hover a>img {
  animation: run1 1s linear;
}

.animate-left:hover .info {
  visibility: hidden;
}

.effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(238, 238, 238, 0.2);
  transform: rotate(45deg) translate(0, 120%);
  transition: all 0.3s linear;
}
.animate-right:hover a>img {
  transform: scale(1.05);
  transition: all 0.3s linear;
}
.animate-right:hover .effect {
  transform: rotate(45deg) translate(0, -120%);
}
</style>
