<template>
    <div id="app">
        <wg-radio-edit-table
            :tableWidth="tableWidth"
            :tableHeight="tableHeight"
            :theadData="theadData"
            :tableData="tableData"
            @selectChangeEvent="selectChangeEvent"
            @getRowSortTable="getRowSortTable"
        >
            <!--input插槽-->
            <template v-slot:age_edit="row">
                <el-input
                    v-model="row.data.age"
                    placeholder="age"
                    @input="ageChange($event, row)"
                />
            </template>
            <!--input插槽-->
            <template v-slot:name_edit="row">
                <el-input v-model="row.data.name" placeholder="name" />
            </template>
            <!--select插槽 选中值回填-->
            <template v-slot:sex_default="row">
                <span>{{ formatSex(row.data.sex) }}</span>
            </template>
            <!--select插槽 编辑下拉框-->
            <template v-slot:sex_edit="row">
                <vxe-select v-model="row.data.sex">
                    <vxe-option
                        v-for="item in sexOptions"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label"
                    ></vxe-option>
                </vxe-select>
            </template>
        </wg-radio-edit-table>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            tableWidth: "80%",
            tableHeight: "300px", // 支持px,%
            theadData: [
                {
                    field: "name",
                    title: "Name",
                    width: 160,
                    align: "left", // 默认left，金额right
                    type: "slot",
                    concrete: "input",
                    slots: { edit: "name_edit" },
                },
                {
                    field: "role",
                    title: "Role",
                    type: "input",
                    slots: { edit: "role_edit" },
                },
                {
                    field: "sex",
                    title: "sex",
                    type: "slot",
                    slots: { default: "sex_default", edit: "sex_edit" },
                },
                {
                    field: "age",
                    title: "age",
                    sortable: true,
                    type: "slot",
                    slots: { edit: "age_edit" },
                },
                {
                    field: "address",
                    title: "address",
                },
            ],
            tableData: [
                {
                    id: 10001,
                    name: "Test1cxcxzcddsdvdfgeerg",
                    role: "Develop",
                    sex: "1",
                    age: 28,
                    address: "test abc",
                },
                {
                    id: 10002,
                    name: "Test2",
                    role: "Test",
                    sex: "2",
                    age: 2233333333333,
                    address: "Guangzhou",
                },
                {
                    id: 10003,
                    name: "Test3",
                    role: "PM",
                    sex: "1",
                    age: 32,
                    address: "Shanghai",
                },
                {
                    id: 10004,
                    name: "Test4",
                    role: "Designer",
                    sex: "2",
                    age: 24,
                    address: "Shanghai",
                },
                {
                    id: 10001,
                    name: "Test1cxcxzcddsdvdfgeerg",
                    role: "Develop",
                    sex: "1",
                    age: 28,
                    address: "test abc",
                },
                {
                    id: 10002,
                    name: "Test2",
                    role: "Test",
                    sex: "2",
                    age: 2233333333333,
                    address: "Guangzhou",
                },
                {
                    id: 10003,
                    name: "Test3",
                    role: "PM",
                    sex: "1",
                    age: 32,
                    address: "Shanghai",
                },
                {
                    id: 10004,
                    name: "Test4",
                    role: "Designer",
                    sex: "2",
                    age: 24,
                    address: "Shanghai",
                },
            ],
            sexOptions: [
                {
                    label: "男",
                    value: "1",
                },
                {
                    label: "女",
                    value: "2",
                },
            ],
        };
    },
    created() {
        //
    },
    methods: {
        // 下拉框格式化
        formatSex(value) {
            if (value === "1") {
                return "男";
            }
            if (value === "2") {
                return "女";
            }
            return "";
        },
        // age input值改变
        ageChange(val, row) {
            console.log("val=========>", val);
            console.log("row=========>", row);
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
