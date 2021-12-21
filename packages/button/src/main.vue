<template>
    <button class="wg-button" :class="[`wg-button-${type}`,
    {'is-plain': plain},
    {'is-round': round},
    {'is-circle': circle}]">
        <i v-if="icon" class="wg-icon iconfont" :class="icon"></i>
        <span  v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'wgButton',
    props: {
        type: {
            type: String,
            default: 'default',
        },
        plain: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
        circle: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        }
    },
    created() {
        console.log('this.icon===========>', this.icon);
    }
};
</script>
<style lang="less" scoped>
@import './main.less';
</style>
