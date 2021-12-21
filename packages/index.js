
import './fonts/iconfont.css';
import wgButton from './button/src/main.vue';
import wgTable from './table/src/main.vue';
import wgPagination from './pagination/src/main.vue';
import wgCheckTable from './vxeCheckTable/src/main.vue';
import wgRadioTable from './vxeRadioTable/src/main.vue';
import wgRadioEditTable from './vxeRadioEditTable/src/main.vue';
import wgCheckEditTable from './vxeCheckEditTable/src/main.vue';
import wgPopTable from './popTable/src/main.vue';

const components = [
    wgButton,
    wgTable,
    wgPagination,
    wgCheckTable,
    wgRadioTable,
    wgRadioEditTable,
    wgCheckEditTable,
    wgPopTable,
];
// 定义install方法
const install = function(Vue) {
    // 注册所有的组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};
// 导出install方法
export default {
    install,
};
