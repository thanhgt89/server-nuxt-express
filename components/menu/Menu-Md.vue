<template>
   <nav class="navbar navbar-default nav-sm">
    <div class="container nav-sm-wrap">
      <div class="col-sm-2 col-md-2 logo">
        <a href="/"><img src="~/assets/img/logo/thanhlogo.png"></a>
      </div>
       <!-- <div class="col-sm-10 col-md-10 menu">
        <ul class="menu--item">

          {% for item in menu %}
 
          {% if item.id < 3 %}

          <li class="{{item.style + item.id}}">
            <a href="{{item.url}}">{{item.name}}</a>
          </li>

          {% elif item.id == 3 and item.id <= 6 %}
          <li class="{{item.style + item.id}}">
              <a href="{{item.url}}">{{item.name}}</a>
              <div class="container product-menu">
                {% for item in category %}
                <div class="col-sm-3 col-md-3">
                   <div class="product-list">
                      <a href="{{item.url}}"><img src="/image/category/{{item.thumbnail}}" alt=""></a >
                  </div>
                    <ul class="product-list">
                      <li><a href="{{item.url}}"><strong>{{item.name}}</strong></a></li>
                      {% for sub in item.sub_category%}
                     
                        <li><a href="{{sub.url}}">{{sub.name}}</a></li>

                      {% endfor %}
                    </ul>
                </div>
                {% endfor%}
              </div> 
          </li>

          {%else%}
          <li class="{{item.style + item.id}}">
          <a href="{{item.url}}">{{item.name}}</a>
          </li>
          
          {% endif%} 
          {% endfor %}
          </ul>
          <div class="icon-cart">
            <a href="/cart">
               <button class="btn btn-danger">Giỏ hàng  <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </a>
            <a href="/favorite"> 
              <button class="btn btn-info">Yêu thích <i class="fa fa-heart-o" aria-hidden="true"></i></button>
            </a>
              
          </div>
      </div>  -->

     </div> 
  </nav>

</template>


<style scroped>
.nav-sm-wrap{
  margin: auto;
  padding: 0;
}


</style>

