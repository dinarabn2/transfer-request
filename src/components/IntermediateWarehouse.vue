<script setup>
import { useStore } from "./../store/store";
import { storeWarehouse } from "./../store/warehouse";

const store = useStore();
const warehouseStore = storeWarehouse();
defineProps({
  show: Boolean,
});

const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<template>
  <section v-if="show">
    <h4>Промежуточный склад:</h4>
    <a-select
      v-model:value="store.request.transit_id"
      show-search
      placeholder="Введите или выберите склад"
      style="width: 695px"
      :options="warehouseStore.options"
      :filter-option="filterOption"
    ></a-select>
  </section>
</template>

<style lang="scss" scoped>
h4 {
  margin-top: 30px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #7f7f7f;
}
select {
  width: 665px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-shadow: 0px 1px 4px rgba(219, 219, 219, 0.3);
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #c4c4c4;
  padding: 0 20px;
  appearance: none;
  cursor: pointer;
  color: #001529;
}
.select__wrapper {
  margin-top: 20px;
  position: relative;
  width: 665px;
  &::after {
    content: url("./../assets/Open.svg");
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    pointer-events: none;
  }
}
</style>