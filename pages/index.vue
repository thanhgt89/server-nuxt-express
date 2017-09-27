<template>
  <section class="container-fluid">
     <get-header :menu="menu" :category="category"/>
     <banner :banner="banner"/>
    <about :about="about"> </about>
    <top-sale :topSale="topProduct"/>
    <category-product :product="product"/>
    <get-footer/>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import GetHeader from '~/components/GetHeader'
import Banner from '~/components/Banner'
import About from '~/components/home/About'
import topSale from '~/components/home/TopSale'
import categoryProduct from '~/components/home/CategoryProduct'
import getFooter from '~/components/Footer'

export default {
  async asyncData () {
    let { data } = await axios.get(`/api/home`)
    console.log(data.category)
    return {
      menu: data.menu,
      banner: data.banner,
      poster: data.poster,
      about: data.about,
      category: data.category,
      topProduct: data.topProduct,
      product: data.product}
  },
  head () {
    return {
      title: 'Users'
    }
  },
  components: {
    GetHeader,
    Banner,
    About,
    topSale,
    categoryProduct,
    getFooter
  }
}
</script>

<style scoped>
.container{
  padding: 0;
  margin: auto;
}
</style>
