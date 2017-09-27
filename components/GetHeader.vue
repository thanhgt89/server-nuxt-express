<template>
  <header>
    <!-- TOP HEAD -->
    <div class="row menu__info">
      <div class="col-xs-5 col-sm-6 col-md-6 menu__info--item1">
        <span>
          <i class="fa fa-volume-control-phone"></i> Phone: 0988260505 </span>
        <span>
          <i class="fa fa-envelope-o"></i> Email: vanthanhgt89@gmail.com</span>
      </div>

      <div class="col-xs-7 col-sm-6 col-md-6 menu__info--item2">
        <!-- <div class="logged">
              <img src="/image/avarta-s.png" alt="" class="img-responsive avarta-s">
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">{{user_account.user}}</button>
                <ul class="dropdown-menu">
                  <a href='/user'>
                    <li class="dropdown-text user-info">Quản lý tài khoản</li>
                  </a>
                  <li class="dropdown-text sign-out">Đăng xuất</li>
                </ul>
              </div>
            </div> -->
        <div class="register">
          <!-- <button class="" data-toggle="modal" data-target="#register"> Đăng ký</button> -->
          <button type="button" class="btn btn-login" data-toggle="modal" data-target="#register">Đăng ký</button>
          <register></register>
        </div>
        <div class="sign-in">
          <button type="button" class="btn btn-login" data-toggle="modal" data-target="#login">Đăng nhập</button>
          <login></login>

        </div>

      </div>
    </div>
    <!-- END TOP HEAD -->

    <!-- MAIN MENU -->
    <nav class="navbar navbar-default nav-sm">
      <div class="container nav-sm-wrap">
        <div class="col-sm-2 col-md-2 logo">
          <router-link to="/"><img src="~/assets/img/logo/thanhlogo.png"></router-link>
        </div>
        <div class="col-sm-10 col-md-10 menu">
          <ul class="menu--item">

            <template v-for="(item, index) in menu">
              <li v-if="item.id < 3":key="item.id" :class="'list item' + (index + 1) ">
                <router-link :to="item.url">{{item.name}}</router-link>
              </li>
              <li v-else-if="item.id == 3":key="item.id" :class="'list list-item item' + (index + 1)">
                <a :href="item.url">{{item.name}}</a>
                <div class="container product-menu">
                  <div class="col-sm-3 col-md-3" v-for="item1 in category" :key="item1.id">
                     <div class="product-list">
                        <a :href="item1.url"><img :src="convertImg(item1.thumbnail)" alt=""></a >
                    </div>
                      <ul class="product-list">
                        <li><a :href="item1.url"><strong>{{item1.name}}</strong></a></li>
                       
                          <li v-for="sub in item1.sub_category" :key="sub.id">
                            <a :href="sub.url">{{sub.name}}</a>
                            </li>
                      </ul>
                  </div>
                </div>  

              </li>
              <li v-else  :key="item.id" :class="'list item' + (index + 1)">
                <a :href="item.url">{{item.name}}</a>
              </li>

            </template>

          </ul>

          <div class="icon-cart">
            <a href="/cart">
              <button class="btn btn-danger">Giỏ hàng
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </button>
            </a>
            <a href="/favorite">
              <button class="btn btn-info">Yêu thích
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </button>
            </a>

          </div>
        </div>

      </div>
    </nav>

    <!-- END MAIN MENU -->

  </header>
</template>

<script>
import Login from '~/components/modal/Login'
import Register from '~/components/modal/Register'

export default {
  props: ['menu', 'category'],
  components: {
    Login,
    Register
  },
  methods: {
    convertImg (img) {
      return require('~/assets/img/category/' + img)
    }
  }
}
</script>

<style scroped>
.row {
  margin: 0;
}

.btn-login {
  color: white
}
.navbar.nav_sm{
  margin-bottom: 0!important;
}
</style>

