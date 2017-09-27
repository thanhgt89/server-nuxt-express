<template>
  
  <!-- nav mobile-->
  <nav class="navbar navbar-default nav-phone">
    <button type="button" class="navbar-toggle" id="menu" data-toggle="collapse" data-target="#menu-phone"><i class="fa fa-bars" aria-hidden="true"></i>
</button>
    <a href=""><img src="/image/logo/thanhlogo.png"></a>

    <div class="collapse navbar-collapse" id="menu-phone">
      <ul class="menu--xs">
        <!-- {%for item in datas.main_menu%} -->
        <li class="list-xs"><a href="{{item.path}}">{{item.title}}</a></li>
        
        <!-- {% endfor%} -->
      </ul>
    </div>
    <div class="icon-cart-xs">
      <a href="/cart"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
 </a>
      <a href="/favorite"> <i class="fa fa-heart-o" aria-hidden="true"></i>
 </a>
      <a href="/search"> <i class="fa fa-search" aria-hidden="true"></i>
 </a>
    </div>
  </nav>
  <!--end nav mobile-->
</template>
