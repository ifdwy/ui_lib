<template>
    <div class="wg-pagination">
        <el-pagination
            background
            layout="prev, total, pager, next, sizes"
            v-bind="$attrs"
            v-on="$listeners"
            @current-change="currentChange"
            @size-change="handleSizeChange">
            </el-pagination>
    </div>
</template>
<script>
export default {
    name: "wgPagination",
    props: {
        isCancelBtn: {
            type: Boolean,
            default: true,
        },
        isSubmitBtn: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        // 当前页切换
        currentChange(val) {
            console.log("val====当前页切换=======>", val);
            this.$listeners.currentChange(val);
        },
        // 页码切换
        handleSizeChange(val) {
            console.log("val=====页码切换====>", val);
            this.$listeners.sizeChange(val);
        }
    }
};
</script>
<style lang="less" scoped>
    .wg-pagination{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
</style>
