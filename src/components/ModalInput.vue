<script setup>
import { listStore } from "../store/listStore";

const storeList = listStore();
</script>

<template>
  <input
    type="text"
    placeholder="Введите товар..."
    v-model="storeList.search"
    @input="storeList.getList"
  />
</template>

<style lang="scss" scoped>
input {
  width: 1200px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 0px 30px rgba(2, 154, 173, 0.15);
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  padding: 18.5px 20px;
  margin-bottom: 50px;
}
</style>