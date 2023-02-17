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
      <div class="icons">
        <div class="icons__item" v-for="(desc, index) in iconsDesc" :key="index">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
          <p class="icons__item__desc">{{ desc }}</p>
        </div>
      </div>
      <div class="gap"></div>
      <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item">
          <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="nearby__item__img" />
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tags">
              <span class="nearby__item__content__tags__tag">月售1万+</span>
              <span class="nearby__item__content__tags__tag">起送￥0</span>
              <span class="nearby__item__content__tags__tag">基础运费￥5</span>
              <p class="nearby__item__content__tags__light">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
          </div>
        </div>
        <div class="nearby__item">
          <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="nearby__item__img" />
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tags">
              <span class="nearby__item__content__tags__tag">月售1万+</span>
              <span class="nearby__item__content__tags__tag">起送￥0</span>
              <span class="nearby__item__content__tags__tag">基础运费￥5</span>
              <p class="nearby__item__content__tags__light">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
          </div>
        </div>
        <div class="nearby__item">
          <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="nearby__item__img" />
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tags">
              <span class="nearby__item__content__tags__tag">月售1万+</span>
              <span class="nearby__item__content__tags__tag">起送￥0</span>
              <span class="nearby__item__content__tags__tag">基础运费￥5</span>
              <p class="nearby__item__content__tags__light">VIP尊享满89元减4元运费券（每月3张）</p>
            </div>
          </div>
        </div>
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

<script>
export default {
  name: 'App',
  data () {
    return {
      iconsDesc: ['超市便利', '菜市场', '水果店', '鲜花绿植', '医药健康', '家居时尚', '烘培蛋糕', '签到', '大牌免运', '红包套餐']
    }
  }
}
</script>

<style lang="scss">
@import './style/var.scss';
@import './style/mixins.scss';

.wrapper {
  overflow-y: auto;
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

  .icons {
    display: flex;
    flex-wrap: wrap;
    font-size: .12rem;
    margin-top: .16rem;

    &__item {
      width: 20%;

      &__img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }

      &__desc {
        margin: .06rem 0 .16rem 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }

  .gap {
    height: .1rem;
    background: $content-bgcolor;
    margin: 0 -.18rem;
  }

  .nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      font-weight: normal;
      color: $content-fontcolor;
    }
    &__item {
      display: flex;
      padding: .12rem 0 0 0;
      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }
      &__content {
        flex: 1;
        border-bottom: .01rem solid $content-bgcolor;
        &__title {
          font-size: .16rem;
          margin-bottom: .08rem;
        }
        &__tags {
          font-size: .13rem;
          &__tag {
            margin-right: .16rem;
          }
          &__light{
            margin: .08 0 0 0;
            color: #E93B3B;
          }
        }
      }
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
  box-shadow: 0 -1px 1px 0 $content-bgcolor;
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
