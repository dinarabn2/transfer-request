<script setup>
import ProductTable from "./ProductTable.vue";
import { listStore } from "./../store/listStore";

const store = listStore();
</script>

<template>
  <section class="border" v-if="store.passId.length != 0">
    <div class="table">
      <p>№</p>
      <p>Название</p>
      <p>Качество</p>
      <p>Количество</p>
    </div>
    <ProductTable />
  </section>
</template>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: 25px 600px 270px 270px;
  column-gap: 50px;
  padding: 16px;
  height: 50px;
  background: #ddeef2;
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #029aad;
  }
}
.border {
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
}
</style>