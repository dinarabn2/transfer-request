<script setup>
import { onMounted, reactive, ref } from "vue";
import { useStore } from "../store/store";

const props = defineProps({
  show: Boolean,
});

const store = useStore();
let warehouses = ref([]);
let warehouse = reactive({});

async function getHouses() {
  const res = await fetch(
    "http://10.10.1.74:80/api/v1/handbook/warehouses/list",
    {
      headers: store.headers,
    }
  );

  const data = await res.json();
  warehouses.value = await data;
}

onMounted(() => getHouses());
</script>

<template>
  <section v-if="show">
    <h4>Промежуточный склад:</h4>
    <div class="select__wrapper">
      <select v-model="store.request.transit_id">
        <option disabled selected value="">
          Выберите промежуточный склад...
        </option>
        <option
          v-for="warehouse in warehouses"
          :key="warehouse.id"
          :value="warehouse.id"
        >
          {{ warehouse.name }}
        </option>
      </select>
    </div>
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