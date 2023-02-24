<template>
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
</template>

<script>
export default {
  name: 'StaticPart',
  data () {
    return {
      iconsDesc: ['超市便利', '菜市场', '水果店', '鲜花绿植', '医药健康', '家居时尚', '烘培蛋糕', '签到', '大牌免运', '红包套餐']
    }
  }
}
</script>

<style lang="scss">
@import '../../style/var.scss';
@import '../../style/mixins.scss';

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
</style>
