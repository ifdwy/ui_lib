export default {
    tableWidth: "80%",
    tableHeight: "300px", // 支持px,%
    theadData: [
        {
            field: "name",
            title: "Name",
            width: 160,
            align: "left", // 默认left，金额right
            type: "slot", // 插槽
            concrete: "input", // 使用默认input的编辑插槽
            slots: { edit: "name_edit" }, // 具体对应插槽
        },
        {
            field: "role",
            title: "Role",
            type: "slot",
            slots: { edit: "role_edit" },
        },
        {
            field: "sex",
            title: "sex",
            type: "slot",
            concrete: "select", // 使用默认的select的编辑插槽
            slots: { default: "sex_default", edit: "sex_edit" }, // 下拉框有两个插槽,default是值得回填,edit是渲染下拉框
            options: [
                {
                    label: "男",
                    value: "1",
                },
                {
                    label: "女",
                    value: "2",
                },
            ], // 下拉框选项
        },
        {
            field: "age",
            title: "age",
            sortable: true,
            // type: "slot",
            // slots: { edit: "age_edit" },
        },
        {
            field: "address",
            title: "address",
        },
        {
            title: '操作',
            width: 300,
            type: "opt",
            slots: { default: 'operate' }, // 默认有局部更新，查看，编辑，删除，重置
            btnGroup: { isCheck: false, isEdit: true, isDelete: false, isReset: false }
        }
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
};
