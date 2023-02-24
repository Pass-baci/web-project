<template>
    <div>
        <div class="wrapper">
            <StaticPart />
            <NearBy />
            <Docker />
        </div>
    </div>
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearBy from './Nearby.vue'
import Docker from './Docker.vue'

export default {
  name: 'Home-1',
  components: { StaticPart, NearBy, Docker }
}
</script>

<style lang="scss">
@import '../../style/var.scss';
@import '../../style/mixins.scss';

.wrapper {
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: .49rem;
    left: 0;
    right: 0;
    padding: 0 .18rem;

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
}
</style>
