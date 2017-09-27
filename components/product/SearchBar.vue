<template>
  <div class="row nav-desktop">
    <div class="p-title">
      <div class="col-xs-2 col-sm-2 col-md-2">
        <!-- <button type="button" class="btn btn-basic category-xs" data-slide="catalogues">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button> -->
        <div class="category">
          <span>
            <i class="fa fa-bars" aria-hidden="true"></i> Danh mục sản phẩm</span>
        </div>
      </div>
      <div class="col-xs-10 col-sm-6 col-md-6">
        <div class="searchbar">
          <form action="" id="searchform">
            <input type="text" placeholder="Bố mẹ đang tìm kiếm gì cho bé ?" id="search">
            <button>
              <i class="fa fa-search" aria-hidden="true"></i>Tìm kiếm
            </button>
          </form>
        </div>
      </div>
      <div class="col-sm-2 col-md-2 sort">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle text-box" type="button" data-toggle="dropdown">Sắp xếp theo giá
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="detail-product"><input type="checkbox"> </a>
            </li>

          </ul>
        </div>
      </div>

      <div class="col-sm-2 col-md-2 sort">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle text-box" type="button" data-toggle="dropdown">Sắp xếp theo tuổi
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="detail-product"><input type="checkbox"> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

