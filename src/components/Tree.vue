<template>
  <a-tree
    v-model:checkedKeys="storeList.checkedProductInTree"
    checkable
    :height="620"
    :tree-data="storeList.treeData"
    :field-names="fieldNames"
  >
  </a-tree>
</template>

<script setup>
import { listStore } from "./../store/listStore";

const storeList = listStore();
const fieldNames = {
  key: "id",
  title: "name",
};
</script>

<style>
.ant-tree .ant-tree-treenode {
  padding: 0 0 20px 0;
}
.ant-tree-title {
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #001529;
}
.ant-tree-checkbox-inner {
  border: 1px solid #029aad !important;
  border-radius: 3px !important;
}
.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
  background-color: #029aad !important;
}

.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
  background-color: #029aad !important;
}
</style>