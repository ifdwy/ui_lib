<template>
    <div id="app">
        <wg-check-table
            :tableWidth="tableWidth"
            :tableHeight="tableHeight"
            :theadData="theadData"
            :tableData="tableData"
            @selectAllEvent="selectAllEvent"
            @selectChangeEvent="selectChangeEvent"
            @getRowSortTable="getRowSortTable"
            @editRowEvent="editRowEvent"
            @removeRowEvent="removeRowEvent"
        >
            <!--role_default  test-->
            <template #role_default="row">
                {{row.data.role + '----test'}}
            </template>
            <!--操作栏 插槽-->
            <!-- <template #operate="row">
                <el-button type="text">{{row}}</el-button>
            </template> -->
        </wg-check-table>
    </div>
</template>

<script>
import configData from '../utils/tableConfig';
export default {
    name: "App",
    data() {
        return {
            tableWidth: configData.tableWidth,
            tableHeight: configData.tableHeight,
            theadData: configData.theadData,
            tableData: configData.tableData,
        };
    },
    created() {},
    methods: {
        // 行编辑
        editRowEvent(row) {
            console.log("行编辑=========>", row);
        },
        // 删除一行
        removeRowEvent(row) {
            console.log("删除一行=========>", row);
        },
        // 获取行拖拽后的表格数据
        getRowSortTable(e) {
            console.log("获取行拖拽后的表格数据==========>", e);
        },
        // 表格全选
        selectAllEvent(data) {
            console.log("表格全选 ===============>", data);
        },
        // 勾选事件/取消事件
        selectChangeEvent(records) {
            console.log(records);
        },
    },
};
</script>

<style lang="less"></style>
