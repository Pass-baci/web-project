<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe600;</span>
        北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼
        <span class="iconfont position__notice">&#xe627;</span>
      </div>
      <div class="search">
        <span class="iconfont search__icon">&#xe7b3;</span>
        <input class="search__input" type="search" placeholder="山姆会员商店优惠商品" />
      </div>
      <div class="banner">
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
      </div>
    </div>
    <div class="docker">
      <span class="docker__item docker__item--active">
        <div class="iconfont">&#xeaf0;</div>
        <div class="docker__title">首页</div>
      </span>
      <span class="docker__item">
        <div class="iconfont">&#xe63f;</div>
        <div class="docker__title">购物车</div>
      </span>
      <span class="docker__item">
        <div class="iconfont">&#xe897;</div>
        <div class="docker__title">订单</div>
      </span>
      <span class="docker__item">
        <div class="iconfont">&#xe8a0;</div>
        <div class="docker__title">我的</div>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/var.scss';
@import './style/mixins.scss';

.wrapper {
  position: absolute;
  top: 0;
  bottom: .49rem;
  left: 0;
  right: 0;
  padding: 0 .18rem;

  .position {
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    text-align: center;
    @include ellipsis;
    color: $content-fontcolor;

    &__icon {
      position: relative;
      top: .01rem;
      float: left;
      font-size: .2rem;
    }

    &__notice {
      position: absolute;
      right: 0;
      top: .17rem;
      font-size: .2rem;
    }
  }

  .search {
    position: relative;
    font-size: .14rem;
    background: #F5F5F5;
    border-radius: 16px;
    height: .32rem;

    .iconfont {
      font-size: .25rem;
      color: #B7B7B7;
    }

    &__icon {
      margin: .08rem 0 .08rem .16rem;
    }

    &__input {
      width: 80%;
      position: relative;
      bottom: .02rem;
      left: .12rem;
      border: none;
      outline: none;
      background: #F5F5F5;
    }
  }

  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;

    &__img {
      width: 100%;
    }
  }
}

.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  background: #FFFFFF;
  box-shadow: 0 -1px 1px 0 #F1F1F1;
  color: $content-fontcolor;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }

    &--active {
      color: #1FA4FC;
    }
  }

  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
