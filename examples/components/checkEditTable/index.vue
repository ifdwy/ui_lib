<template>
    <div id="app">
        <wg-check-edit-table
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
            <!--role_edit  input插槽-->
            <template #role_edit="row">
                <el-input v-model="row.data.role" placeholder="role"></el-input>
            </template>
            <!--操作栏 插槽-->
            <!-- <template #operate="row">
                <el-button type="text">{{row}}</el-button>
            </template> -->
        </wg-check-edit-table>
    </div>
</template>

<script>
import configData from '../utils/tableEditConfig';
export default {
    name: "App",
    data() {
        return {
            tableWidth: configData.tableWidth,
            tableHeight: configData.tableHeight,
            theadData: configData.theadData,
            tableData: configData.tableData,
            sexOptions: configData.sexOptions,
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
        // 所有勾选事件/所有取消事件
        selectAllEvent({ checked, records }) {
            console.log(checked ? "所有勾选事件" : "所有取消事件", records);
        },
        // 勾选事件/取消事件
        selectChangeEvent({ checked, records }) {
            console.log(checked ? "勾选事件" : "取消事件", records);
        },
    },
};
</script>

<style lang="less"></style>
