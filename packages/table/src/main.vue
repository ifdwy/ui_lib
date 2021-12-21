<template>
    <div class="wg-table">
        <el-table
        ref="multipleTable"
        max-height="450"
        v-bind="$attrs"
        v-on="$listeners"
        :data="tabConfig.tbody"
        highlight-current-row
        @selection-change="handleSelectionChange"
        @row-click="handleClickTableRow">
        <el-table-column v-if="tabConfig.isSelect" type="selection"> </el-table-column>
        <el-table-column v-if="tabConfig.isIndex" type="index" label="序号" width="50"></el-table-column>
        <template v-for="(item, index) in tabConfig.thead">
            <el-table-column
                :key="index"
                :width="item.width?item.width:'150'"
                :property="item.property"
                :label="item.label"
                :align="item.align ? item.align : 'left'"
            ></el-table-column>
        </template>
     </el-table>
     <!-- <div class="pageNation">
        <slot name="btn"></slot>
        <slot name="pageNation"></slot>
     </div> -->
    </div>
</template>

<script>
export default {
    name: 'wgTable',
    props: {
        config: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    watch: {
        config: {
            handler(val, oldVal) {
                this.tabConfig = Object.assign({}, this.tabConfig, val);
            },
            immediate: true,
            deep: true,
        }
    },
    data() {
        return {
            selectData: [],
            tabConfig: {
                isSelect: true,
                isIndex: true,
                thead: [],
                tbody: [],
            }
        };
    },
    methods: {
        // 多选事件
        handleSelectionChange(selection) {
            this.selectData = selection;
            this.$listeners.selectionChange(selection);
        },
        // 行选中
        handleClickTableRow(row, column, event) {
            this.$refs.multipleTable.toggleRowSelection(row);
            this.$listeners.selectRow(row, column, event);
        },
    }
};
</script>
<style lang="less" scoped>
    .wg-table{
        .pageNation{
            display: flex;
            justify-content: space-between;
        }
    }
</style>
