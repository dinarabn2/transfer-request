<script setup>
import Select from './Select.vue'
import ButtonProduct from './ButtonProduct.vue'
import Table from './Table.vue'
import IntermediateWarehouse from './IntermediateWarehouse.vue'
import SelectSecond from './SelectSecond.vue'
import { ref } from 'vue'
const showSelect = ref(false);
</script>

<template>
    <section class="content">
        <h1>Создание заявки на перемещение</h1>
        <hr>
        <div class="content__wrapper">
            <h4>Откуда:</h4>
            <h4>Куда:</h4>
            <div class="content__wrapper-item">
                <Select />
            </div>
            <div class="content__wrapper-item">
                <SelectSecond />
            </div>
        </div>
        <input  @click="showSelect = showSelect === true ? false : true" type="checkbox"><label>Отправить через РЦ</label>
        <IntermediateWarehouse :show="showSelect" />
        <ButtonProduct />
        <Table/>
    </section>
</template>


<style lang="scss" scoped>
@mixin mt30 {
    margin-top: 30px;
}
@mixin font($weight, $size, $height, $color) {
    font-weight: $weight;
    font-size: $size;
    line-height: $height;
    color: $color;
}
.content {
    @include mt30;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 20px;
    padding: 30px;
    h1 {
        @include font(400, 25px, 29px, #001529);
    }
    hr {
        @include mt30;
        border: 1px solid #DDEEF2;
    }
    h4 {
        @include font(400, 17px, 20px, #7F7F7F);
    }
    label {
        @include font(400, 15px, 17px, #001529);
        margin-left: 8px;
    }
    &__wrapper {
        @include mt30;
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 20px;
        column-gap: 60px;
        &-item {
            position: relative;
        }
    }
    input {
        @include mt30;
        cursor: pointer;
    }
}
</style>