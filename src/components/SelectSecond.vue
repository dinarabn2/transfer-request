<template>
  <a-select
    v-model:value="store.request.receiver_id"
    show-search
    placeholder="Введите или выберите склад"
    style="width: 695px"
    :options="warehouseStore.options"
    :filter-option="filterOption"
  ></a-select>
</template>

<script setup>
import { useStore } from "./../store/store";
import { storeWarehouse } from "./../store/warehouse";

const store = useStore();
const warehouseStore = storeWarehouse();
const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
