<template>
  <section class="container-fluid">
    <!-- <keep-alive> -->
    <get-header :menu="menu" :category="category" />
    <banner :banner="banner" />
    <side-nav :category="category" :product="product" />
    <pagination :url="url" :pages="pages" @changed="fetchDataPage()" :currentPage="currentPage" />
    <get-footer/>
    <!-- </keep-alive> -->
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import GetHeader from '~/components/GetHeader'
import Banner from '~/components/Banner'
import SideNav from '~/components/product/Side-Nav'
import Pagination from '~/components/Pagination'
import getFooter from '~/components/Footer'

export default {
  async asyncData ({ query }) {
    if (query.page === undefined) {
      query.page = 1
      console.log('query category', query.page)
    }
    let { data } = await axios.get(`/api/product?page=${query.page}`)
    // console.log(data)
    return {
      menu: data.menu,
      banner: data.banner,
      category: data.category,
      product: data.product,
      pages: data.pages
    }
  },
  data () {
    return {
      currentPage: this.$route.query.page || 1,
      url: '/san-pham'
    }
  },
  methods: {
    fetchDataPage (index) {
      console.log(index)
      axios.get(`/api/product?page=${index}`)
        .then(result => {
          // console.log(this.product)
          this.product = result.data.product
        })
        .catch(err => {
          throw new Error('Err from changed page', err)
        })
    }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  components: {
    GetHeader,
    Banner,
    SideNav,
    Pagination,
    getFooter
  }
}
</script>