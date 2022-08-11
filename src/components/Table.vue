<template>
    <div class="border">
        <div class="table">
            <p>№</p>
            <p>Название</p>
            <p>Качество</p>
            <p>Количество</p>
        </div>
        <ProductTable />
    </div>
</template>

<script setup>
import ProductTable from './ProductTable.vue'
</script>

<style lang="scss" scoped>
.table {
    display: grid;
    grid-template-columns: 25px 600px 270px 270px;
    column-gap: 50px;
    padding: 16px;
    height: 50px;
    background: #DDEEF2;
    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #029AAD;
    }
}
.border {
    margin-top: 30px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
}
</style>