<template>
  <div class="container" id="page">
    <ul class="pagination" v-if="pages > 1">

      <template v-for="index in pages">
        <li :key="index" v-if=" index == currentPage" class="active" @click="changePage(index)">
          <nuxt-link :to="{path: url, query: {page: index}} ">{{index}}</nuxt-link>
        </li>
        <li :key="index" @click="changePage(index)" v-else>
          <nuxt-link :to="{path: url, query: {page: index}}">{{index}}</nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['url', 'pages', 'currentPage'],
  methods: {
    changePage (item) {
      this.$emit('changed', item)
    }
  }
}
</script>

<style scoped>
#page>ul {
  margin-right: 100px;
  float: right;
}
</style>
