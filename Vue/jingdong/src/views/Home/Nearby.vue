<template>
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
</template>

<script>
export default {
  name: 'NearBy'
}
</script>

<style lang="scss">
@import '../../style/var.scss';

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

                &__light {
                    margin: .08 0 0 0;
                    color: #E93B3B;
                }
            }
        }
    }
}
</style>
