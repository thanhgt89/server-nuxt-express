<template>
  <div class="container">
    <div class="row " id="special-product">
      <div class="box-title">
        <div class="title text-center">
          <span class="title-text ">Sản phẩm bán chạy</span>
        </div>
      </div>

      <ul class="nav nav-pills">
        <li v-for="(item, index) in topSale" :key="item.id" v-if="index == 0" class="active" :data-name="'item' + (index + 1)">
          <a data-toggle="pill" href="#item1">Toàn bộ sản phẩm</a>
        </li>
        <li v-else :data-name="'item' + (index + 1)">
          <a data-toggle="pill" href="#item2">Đồ sơ sinh</a>
        </li>

      </ul>

      <div class="tab-content tab1">

        <div id="item1" class="tab-pane fade in active">
          <div class="row">
            <div class="col-xs-6 col-sm-2 col-md-2" v-for="item in topSale" :key="item.id">
              <div class="container-item">
                <img :src="convertImg(item.url)" alt="item.name" class="img-responsive">
                <router-link to="detail-product" class="name"> {{item.name}}</router-link>
                <router-link to="detail-product" class="price"> {{item.price}}</router-link>
                <div v-if="item.status == 'new'" v-bind:class="tagStatus[0]"></div>
                <div v-else-if="item.status == 'sale'" v-bind:class="tagStatus[1]"></div>
                <div v-else></div>
                <div v-if="item.status == 'new'" v-bind:class="tagName[0]">{{item.status}}</div>
                <div v-else-if="item.status == 'sale'" v-bind:class="tagName[1]">{{item.salePercent}}</div>
                <div v-else></div>
                <div class="icon">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                  <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end item1 -->

        <div id="item2" class="tab-pane fade">
          <div class="row">

          </div>
          <!-- end item2 -->

          <div id="item3" class="tab-pane fade">

          </div>
        </div>
        <!-- end item3 -->

        <div id="item4" class="tab-pane fade">

        </div>
        <!-- end item4 -->

        <div id="item5" class="tab-pane fade">

        </div>
        <!-- end item5 -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['topSale'],
  data () {
    return {
      tagStatus: ['tag-left', 'tag-right'],
      tagName: ['tag-name-left', 'tag-name-right']
    }
  },
  methods: {
    convertImg (img) {
      return require('~/assets/img/product/' + img)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ====== product good sell  ======*/

.box-title {
  width: 100%;
}

.title {
  width: 70%;
  margin: auto;
}

.title-text {
  font-size: 2em;
  padding: 5px;
  border-top: 4px double;
  border-bottom: 4px double;
  text-transform: uppercase;
}

@media (min-width: 1px) {
  #special-product .nav {
    margin: 25px auto;
    display: none;
  }
  .title-text {
    font-size: 1.2em;
  }
}

@media (min-width: 425px) {
  .title-text {
    font-size: 1em;
  }
}

@media (min-width: 768px) {
  #special-product .nav {
    display: block;
  }
  .title-text {
    font-size: 1.5em;
  }
}

@media (min-width: 992px) {
  .title-text {
    font-size: 2em;
  }
}

#special-product .nav>li {
  left: 13%;
  position: relative;
}

#special-product .nav>li>a::before {
  position: absolute;
  color: orange;
  content: '|';
  top: 0;
  right: 0
}

@media (min-width: 768px) {
  #special-product .nav>li {
    left: 0%;
  }

  #special-product .nav>li>a {
    font-size: 0.8em;
  }
}

@media (min-width: 992px) {
  #special-product .nav>li {
    left: 3%
  }

  #special-product .nav>li>a {
    font-size: 1.1em;
  }
}

@media (min-width: 1170px) {
  #special-product .nav>li {
    left: 13%
  }
}

#special-product .nav>li>a {
  text-transform: uppercase;
  padding: 3px 15px;
}

#special-product>ul>li.active>a {
  background: none;
  color: orange;
}

.tab1 {
  margin: 30px 0;
  position: relative;
}



.container-item {
  border: 1px solid rgba(85, 85, 85, 0.18);
  position: relative;
  overflow: hidden;
}

.container-item>img {
  height: 180px;
  opacity: 0.8;
  transform: scale(0.8);
}

.tag-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-image: url('~/assets/img/bgTab/sale.png');
}

.tag-name-right {
  text-transform: uppercase;
  color: #fff;
  font-size: 1.1em;
  position: absolute;
  top: 12px;
  right: 4px;
}

.tag-left {
  position: absolute;
  top: 0;
  left: 0;
  border-style: solid;
  border-color: transparent #336699 transparent;
  border-width: 0 50px 50px 0;
  transform: rotate(270deg);
}

.tag-name-left {
  color: #fff;
  font-size: 0.8em;
  position: absolute;
  transform: rotate(-45deg);
  top: 7px;
  left: 2px;
}

.container-item>a {
  display: block;
  text-align: center;
}

.name {
  text-transform: capitalize;
  font-size: 0.8em;
}

.price {
  font-weight: bold;
  color: red;
  font-size: 1.1em;
}

.icon {
  position: absolute;
  width: 13%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon .fa-heart-o {
  display: block;
  padding: 7px;
  margin: 15px 0;
  width: 30px;
  height: 30px;
  background: #808080;
  border-radius: 50%;
  color: white;
  transform: translateX(30px);
  opacity: 0;
  cursor: pointer;
}

.icon .fa-cart-arrow-down {
  color: white;
  display: block;
  padding: 7px;
  width: 30px;
  height: 30px;
  background: #808080;
  border-radius: 50%;
  opacity: 0;
  transform: translateX(30px);
  cursor: pointer;
}

.container-item:hover .fa-heart-o {
  opacity: 1;
  transform: translateX(-10px);
  transition: all 0.3s linear;
}

.container-item:hover .fa-cart-arrow-down {
  opacity: 1;
  transform: translateX(-10px);
  transition: all 0.3s linear 0.2s;
}

.container-item:hover>img {
  transform: scale(1);
  opacity: 1;
  transition: all 0.3s linear;
}
</style>
