<template>
  <div class="tableHeightAuto" :style="{ width: tableWidth, height: tableHeight }">
    <vxe-table
      ref="xTable"
      border
      stripe
      row-key
      column-key
      show-header-overflow
      show-overflow
      auto-resize
      keep-source
      height="auto"
      v-on="$listeners"
      :radio-config="radioConfig"
      :row-config="rowConfig"
      :column-config="columnConfig"
      :keyboard-config="{
        isArrow: true,
        isDel: true,
        isEnter: true,
        isTab: true,
        isEdit: true,
        isChecked: true,
      }"
      :mouse-config="{ selected: true }"
      :edit-config="{
        mode: 'cell',
        trigger: 'dblclick',
        showStatus: true,
        icon: 'fa fa-file-text-o',
      }"
      :sort-config="sortConfig"
      :data="data"
      @radio-change="selectChangeEvent"
    >
      <vxe-column width="60">
        <template #default>
          <span class="drag-btn">
            <i class="vxe-icon--menu"></i>
          </span>
        </template>
        <template #header>
          <vxe-tooltip v-model="showHelpTip" content="按住后可以上下拖动排序！" enterable>
            <i class="vxe-icon--question" @click="showHelpTip = !showHelpTip"></i>
          </vxe-tooltip>
        </template>
      </vxe-column>
      <vxe-column type="radio" width="60"></vxe-column>
      <vxe-column type="seq" title="序号" width="60"></vxe-column>
      <template v-for="(item, index) in thData">
        <vxe-column
          v-if="item.type === 'slot'"
          :key="index"
          :field="item.field"
          :title="item.title"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :sortable="item.sortable"
          :edit-render="{ autofocus: '.myinput' }"
        >
          <template v-if="item.slots.default !== undefined" #default="scope">
            <slot :name="item.slots.default" :data="scope.row">
              <!--select回填-->
              <span v-if="item.concrete === 'select'">{{ formatSelect(scope.row[item.field], item.options) }}</span>
            </slot>
          </template>
          <template v-if="item.slots.edit !== undefined" #edit="scope">
            <slot :name="item.slots.edit" :data="scope.row">
              <!--input插槽-->
              <el-input v-if="item.concrete === 'input'" v-model="scope.row[item.field]"></el-input>
              <!--select插槽-->
              <vxe-select v-else-if="item.concrete === 'select'" v-model="scope.row[item.field]">
                <vxe-option
                  v-for="item in item.options"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></vxe-option>
              </vxe-select>
            </slot>
          </template>
        </vxe-column>
        <vxe-column
          v-else-if="item.type === 'opt'"
          :key="index"
          :title="item.title"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :edit-render="{ autofocus: '.myinput' }"
        >
          <template v-if="item.slots.default !== undefined" #default="scope">
            <slot :name="item.slots.default" :data="scope.row">
              <template v-if="$refs.xTable.isUpdateByRow(scope.row) && item.btnGroup.isDepatSave">
                <el-button type="text">局部保存</el-button>
              </template>
              <el-button v-if="item.btnGroup.isCheck" type="text">查看</el-button>
              <el-button v-if="item.btnGroup.isEdit" type="text" @click.stop="editRowEvent(scope.row)">编辑</el-button>
              <el-button v-if="item.btnGroup.isDelete" type="text" @click.stop="removeRowEvent(scope.row)">删除</el-button>
              <el-button v-if="item.btnGroup.isReset" type="text">重置</el-button>
            </slot>
          </template>
        </vxe-column>
        <vxe-column
          v-else
          :key="index"
          :field="item.field"
          :title="item.title"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :sortable="item.sortable"
        ></vxe-column>
      </template>
    </vxe-table>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table';
import Sortable from 'sortablejs';
export default {
  name: 'wgRadioEditTable',
  props: {
    sortConfig: {
      // 排序配置
      type: Object,
      default() {
        return {
          orders: ['desc', 'asc', null],
        };
      },
    },
    columnConfig: {
      // 列配置
      type: Object,
      default() {
        return {
          resizable: true,
        };
      },
    },
    rowConfig: {
      // 行配置
      type: Object,
      default() {
        return {
          isCurrent: true,
          isHover: true,
          height: 36,
        };
      },
    },
    radioConfig: {
      // 复选框配置
      type: Object,
      default() {
        return {
          trigger: 'row',
          highlight: true,
        };
      },
    },
    tableWidth: {
      type: String,
      default: '',
    },
    tableHeight: {
      type: String,
      default: '',
    },
    theadData: {
      type: Array,
      default() {
        return [];
      },
    },
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    columnConfig(val) {
      this.columnConfig = Object.assign(this.columnConfig, val);
    },
    rowConfig(val) {
      this.rowConfig = Object.assign(this.rowConfig, val);
    },
    radioConfig(val) {
      this.radioConfig = Object.assign(this.radioConfig, val);
    },
    theadData: {
      handler(val, oldVal) {
        this.thData = val;
      },
      immediate: true,
      deep: true,
    },
    tableData: {
      handler(val, oldVal) {
        this.data = val;
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      sortable: null,
      initTime: null,
      showHelpTip: false,
      thData: [],
      data: [],
    };
  },
  created() {
    this.$nextTick(() => {
      // 加载完成之后在绑定拖动事件
      this.initTime = setTimeout(() => {
        this.rowDrop();
        this.columnDrop();
      }, 500);
    });
  },
  methods: {
    // 列拖拽
    columnDrop() {
      const $grid = this.$refs.xTable;
      this.sortable = Sortable.create($grid.$el.querySelector('.body--wrapper>.vxe-table--header .vxe-header--row'), {
        handle: '.vxe-header--column:not(.col--fixed)',
        onEnd: (sortableEvent) => {
          const targetThElem = sortableEvent.item;
          const newIndex = sortableEvent.newIndex;
          const oldIndex = sortableEvent.oldIndex;
          const { fullColumn, tableColumn } = $grid.getTableColumn();
          const wrapperElem = targetThElem.parentNode;
          const newColumn = fullColumn[newIndex];
          if (newColumn.fixed) {
            // 错误的移动
            const oldTrElement = wrapperElem.children[oldIndex];
            if (newIndex > oldIndex) {
              wrapperElem.insertBefore(targetThElem, oldTrElement);
            } else {
              wrapperElem.insertBefore(oldTrElement, targetThElem);
            }
            return VXETable.modal.message({
              content: '固定列不允许拖动！',
              status: 'error',
            });
          }
          // 转换真实索引
          const oldColumnIndex = $grid.getColumnIndex(tableColumn[oldIndex]);
          const newColumnIndex = $grid.getColumnIndex(tableColumn[newIndex]);
          // 移动到目标列
          const currRow = fullColumn.splice(oldColumnIndex, 1)[0];
          fullColumn.splice(newColumnIndex, 0, currRow);
          $grid.loadColumn(fullColumn);
        },
      });
    },
    // 行拖拽
    rowDrop() {
      this.sortable = Sortable.create(this.$refs.xTable.$el.querySelector('.body--wrapper>.vxe-table--body tbody'), {
        handle: '.drag-btn',
        onEnd: (sortableEvent) => {
          const newIndex = sortableEvent.newIndex;
          const oldIndex = sortableEvent.oldIndex;
          const currRow = this.data.splice(oldIndex, 1)[0];
          this.data.splice(newIndex, 0, currRow);
          this.$listeners.getRowSortTable(this.data);
        },
      });
    },
    selectChangeEvent({ row }) {
      this.selectRow = row;
      this.$listeners.selectChangeEvent({ row });
    },
  },
  destroyed() {
    clearTimeout(this.initTime);
    if (this.sortable) {
      this.sortable.destroy();
    }
  },
};
</script>

<style lang="less">
.tableHeightAuto {
  overflow: hidden;
}
.drag-btn {
  cursor: move;
  font-size: 12px;
}
.vxe-body--row.sortable-ghost,
.vxe-body--row.sortable-chosen {
  background-color: #dfecfb;
}
</style>
