<template>
  <div class="container">
  <div class="row " id="about">
      <!-- {% for item in display%} -->
      <!-- {% if item.position == 'about'%} -->
    <div class="col-xs-* col-sm-6 col-md-6 about-text">
      <h1 class="about-title text-center">{{about[0].name}}</h1>
      <p>{{about[0].description}}</p>
      <a href="product" class="text-center">
          <button class="btn btn-primary btn-detail ">Xem chi tiết</button>
        </a>
    </div>
    <div class="col-xs-* col-sm-6 col-md-6 about-img">
      <div class='about-img-large' :style="{ 'background-image': 'url(' +  bg + ')' }">
        <div class="about-img-item">

        </div>
      </div>
    </div>
  </div>


</div>
</div>

</template>

<script>
  export default {
    props: ['about'],
    data () {
      return {
        bg: require('~/assets/img/banner/' + this.about[0].url)
      }
    }
  }
</script>

<style scoped>
 #about {
  margin: 50px 0;
}

@media (min-width: 1px) {
  #about {
    margin: 10px 0;
  }
}

@media (min-width: 768px) {
  #about {
    margin: 50px 0;
  }
}

.about-title{
  margin-top:50px;
  text-transform: uppercase;
}

.about-text{
  position: relative;
}
.about-text > p {
  line-height: 30px;
  text-align: justify;
}

@media (min-width: 1px) {

  .about-text > p {
    font-size: 0.8em;
  }
  .about-title {
    font-size: 1.2em;
  }
}

@media (min-width: 768px) {
  .about-title {
    font-size: 2em;
  }

  .about-text > p {
    font-size: 0.8em;
  }
}

@media (min-width: 992px) {
  .about-text > p {
    font-size: 1em;
  }
}

.about-img {
  position: relative;
  margin-top: 30px;
  height: auto;
  display: flex;
}

.about-img-large {
  width: 60%;
  height: 331px;
  display: flex;
  /* background-image: url("../assets/boy/model1.jpg"); */
  background-repeat: repeat;
  background-position: 40% 0;
  background-attachment: fixed;
  border: 1px solid;
  border-radius: 50%;
  margin: auto;
  position: relative;
  overflow: hidden;
}

@media (min-width: 1px) {
  .about-img-large {
    height: 156px;
  }
}
@media (min-width: 375px) {
  .about-img-large {
    height: 189px;
  }
}

@media (min-width: 425px) {
  .about-img-large {
    height: 219px;
  }
}


@media (min-width: 768px) {
  .about-img-large {
    height: 201px;
    background-size: 32%;
  }
}

@media (min-width: 992px) {
  .about-img-large {
    height: 264px;
    background-size: contain;
  }
}

@media (min-width: 1170px) {
  .about-img-large {
    height: 324px;
    background-size: initial;
  }
}

.about-img-item {
  position: absolute;
  content: '';
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;

}

.about-shop {
  width: 40%;
  height: 50px;
  border: 2px solid white;
  margin: auto;
  display: flex;
  border-radius: 5px;
}

.about-shop >a{
  text-transform: uppercase;
  line-height: 45px;
}
@media (min-width: 1px) {
  .about-shop {
    display: none;
  }
}

@media (min-width: 992px) {
  .about-shop {
    display: block;
  }
}


.about-shop:hover {
  border: 2px solid black;
  background: white;
}

.about-shop:hover > a {
  color: black;
}

.about-shop > a {
  display: block;
  margin: auto;
  color: white;
  text-align: center;
}

.btn-detail{
  width: 25%;
  display: block;
  margin: auto;
}
@media (min-width: 1px){
  .btn-detail{
    width: 35%;
  }
}
@media (min-width: 375px){
  .btn-detail{
    width: 29%;
  }
}
@media (min-width: 425px){
  .btn-detail{
    width: 29%;
  }
}
</style>
