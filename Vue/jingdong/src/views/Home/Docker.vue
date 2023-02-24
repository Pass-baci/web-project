<template>
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
</template>

<script>
export default {
  name: 'Docker-1'
}
</script>

<style lang="scss">
@import '../../style/var.scss';
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
