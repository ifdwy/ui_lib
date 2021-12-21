<template>
    <div id="app">
        <!-- <wg-button>button1</wg-button>
        <wg-button plain type="primary">primary</wg-button>
        <wg-button round type="success">success</wg-button>
        <wg-button type="info" icon="icon-huanfu">info</wg-button>
        <wg-button type="danger">danger</wg-button>
        <wg-button circle type="warning">warning</wg-button> -->
        <el-input
            placeholder="请输入内容"
            v-model="input"
            @input="search"
            @keyup.native="tabKey"
            clearable
        >
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <wg-table
            style="margin-top: 20px;"
            :border="true"
            :stripe="true"
            v-loading="loadingFlag"
            element-loading-text="拼命加载中"
            :config="config"
            :tabKeyFlag="tabKeyFlag"
            @selectRow="selectRow"
            @selectionChange="selectionChange"
            >
            </wg-table>
        <wg-pagination
            :isCancelBtn="true"
            :isSubmitBtn="true"
            :page-size="20"
            :total="500"
            :current-page="1"
            :page-sizes="[5,15,25,35]"
            :pager-count="5"
            @currentChange="currentChange"
            @sizeChange="handleSizeChange"
            @cancelPageBtn="cancelPageBtn"
            @submitPageBtn="submitPageBtn"></wg-pagination>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            loadingFlag: true,
            input: "",
            selectArr: [],
            config: {
                // isSelect: false,
                // isIndex: false,
                tabKeyFlag: false,
                thead: [
                    {
                        width: "250", // 列宽，默认150
                        property: "date", // 列名
                        label: "日期", // 列中文名
                    },
                    {
                        width: "250", // 列宽，默认150
                        property: "name", // 列名
                        label: "姓名", // 列中文名
                    },
                    {
                        width: "250", // 列宽，默认150
                        property: "address", // 列名
                        label: "地址", // 列中文名
                    },
                    {
                        width: "250", // 列宽，默认150
                        property: "date", // 列名
                        label: "日期", // 列中文名
                    },
                    {
                        width: "250", // 列宽，默认150
                        property: "name", // 列名
                        label: "姓名", // 列中文名
                    },
                    {
                        width: "250", // 列宽，默认150
                        property: "address", // 列名
                        label: "地址", // 列中文名
                    },
                ],
                tbody: [],
            },
        };
    },
    created() {
        // this.initTabTbody();
    },
    methods: {
        tabKey(e) {
            console.log("e=========>", e);
        },
        cancelPageBtn() {
            console.log("分页左侧取消按钮");
        },
        submitPageBtn() {
            console.log("分页左侧确定按钮=======>", this.selectArr);
        },
        // 当前页切换
        currentChange(val) {
            console.log("val====app当前页切换=======>", val);
        },
        // 页码切换
        handleSizeChange(val) {
            console.log("val=====app页码切换====>", val);
        },
        // 选中值变化
        selectionChange(selection) {
            console.log("selection===app======>", selection);
            this.selectArr = selection;
        },
        // 行选中事件
        selectRow(event) {
            console.log("event====app=====>", event);
        },
        // input值发生改变
        search(val) {
            console.log("val======>", val);
            setTimeout(() => {
                this.initTabTbody();
                this.loadingFlag = false;
            }, 1000);
        },
        // 给tbody赋值
        initTabTbody() {
            this.config.tbody = [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                },
            ];
        },
    },
};
</script>

<style lang="less"></style>
