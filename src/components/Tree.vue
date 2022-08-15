<template>
  <a-tree
    v-model:checkedKeys="checkedKeys"
    checkable
    :height="620"
    :tree-data="treeData"
    :field-names="fieldNames"
  >
    <template #title="{ name, key }">
      <span v-if="key === '0-0-1'" style="color: #1890ff">{{ name }}</span>
      <template v-else>{{ name }}</template>
    </template>
  </a-tree>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "./../store/store";
import { listStore } from "./../store/listStore";

const store = useStore();
const storeList = listStore();
const checkedKeys = ref([]);
const fieldNames = {
  key: "id",
  title: "name",
};
let treeData = ref([]);

async function getProduct() {
  const res = await fetch("http://10.10.1.74:80/api/v1/catalog/categories", {
    headers: store.headers,
  });

  const data = await res.json();
  treeData.value = await data;
}

onMounted(() => {
  getProduct();
});

watch(checkedKeys, () => {
  storeList.checkedProductInTree = checkedKeys._rawValue;
});
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
</style>