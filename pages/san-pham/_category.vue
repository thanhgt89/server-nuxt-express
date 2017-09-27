<template>
  <section class="container-fluid">
     <get-header :menu="menu" :category="category"/>
    <banner :banner="banner"/>
     <side-nav  :category="category" :product="product"/> 
    <pagination :url="url" :pages="pages" @changed="fetchDataPage()" :currentPage="currentPage" />
    <get-footer/> 
    <!-- <h1>{{this.$route.params.id}}</h1> -->
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
  async asyncData ({params, query}) {
    // console.log('query daD', query.page)
    if (query.page === undefined) {
      query.page = 1
      // console.log('query daD', query.page)
    }
    let { data } = await axios.get(`/api/product/${params.category}?page=${query.page}`)
    // console.log(data)
    // console.log('data', data.pages)
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
      url: '/san-pham/' + this.$route.params.category,
      currentPage: this.$route.query.page || 1
    }
  },
  methods: {
    fetchDataPage (index) {
      console.log('===', index)
      axios.get(`/api/product/${this.$route.params.category}?page=${index}`)
        .then(result => {
          // console.log(this.product)
          this.product = result.data.product
        })
        .catch(err => {
          throw new Error('Err from changed page', err)
        })
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