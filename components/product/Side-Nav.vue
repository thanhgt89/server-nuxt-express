<template>
  <div class="container content">
    <div class="row">
      <search-bar/>
    </div>

    <div class="row">
      <div class="col-sm-2 col-md-2">
        <div class="list-catalogues">
          <ul>
            <li :class="'list-' + item.id" v-for="item in category" :key="item.id">
              <nuxt-link :to="'/san-pham/' + item.id ">
                <strong>{{item.name}}</strong>
              </nuxt-link>
              <ul>
                <li v-for="item1 in item.sub_category" :key="item1.id">
                  <nuxt-link :to="'/san-pham/sub/' + item1.id">{{item1.name}}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-sm-10">
        <div class="col-md-4" v-for="(item, index) in product" :key="item.id">
          <item :item="item" :id="index" />
        </div>
      </div>

    </div>

  </div>

  <!-- {% endblock%} -->
</template>

<script>
import searchBar from './SearchBar'
import Item from './Item'
export default {
  props: ['url', 'category', 'product'],
  components: { searchBar, Item }
}
</script>