<script setup>
import {onMounted, reactive, ref} from 'vue'
import {useStore} from '../store/store'

const store = useStore();
let warehouses = ref([]);
let warehouse = reactive({});

async function getHouses() {
    const res = await fetch('http://10.10.1.74:80/api/v1/handbook/warehouses/list', {
        headers : store.headers
    })

    const data = await res.json()
    warehouses.value = await data;
}

onMounted(()=> getHouses())
</script>

<template>
    <section class="select__wrapper">
        <select v-model="store.request.sender_id">
            <option disabled selected value="">Введите или выберите склад</option>
            <option v-for="warehouse in warehouses" :key="warehouse.id" :value="warehouse.id">
                {{ warehouse.name }}
            </option>
        </select>
    </section>
</template>

<style lang="scss" scoped>
.select__wrapper::after {
    content: url('./../assets/Open.svg');
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    pointer-events: none;
}
select {
    width: 695px;
    height: 60px;
    background:#FFFFFF;
    border: 1px solid #C4C4C4;
    box-shadow: 0px 1px 4px rgba(219, 219, 219, 0.3);
    border-radius: 10px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #C4C4C4;
    padding-left: 20px;
    appearance: none;
    cursor: pointer;
    color: #001529;
}
</style>