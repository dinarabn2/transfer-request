<template>
    <div class="table-product">
        <p>1</p>
        <p>Название товара в одну строку, название товара в одну строку</p>
        <p class="select__wrapper">
            <select>
                <option value="">Новый (5 шт.)</option>
            </select>
        </p>
        <p>
            <input type="text">
        </p>
        <p>
            <img src="./../assets/delete.svg" alt="delete">
        </p>
    </div>
    <div class="table-product">
        <p>2</p>
        <p>Название товара в одну строку, название товара в одну строку</p>
        <p class="select__wrapper">
            <select>
                <option value="">Новый (5 шт.)</option>
            </select>
        </p>
        <p>
            <input type="text">
        </p>
        <p>
            <img src="./../assets/delete.svg" alt="delete">
        </p>
    </div>
    <div class="table-product">
        <p>3</p>
        <p>Название товара в одну строку, название товара в одну строку</p>
        <p class="select__wrapper">
            <select>
                <option value="">Новый (5 шт.)</option>
            </select>
        </p>
        <p>
            <input type="text">
        </p>
        <p>
            <img src="./../assets/delete.svg" alt="delete">
        </p>
    </div>
    <div class="table-product">
        <p>4</p>
        <p>Название товара в одну строку, название товара в одну строку</p>
        <p class="select__wrapper">
            <select>
                <option value="">Новый (5 шт.)</option>
            </select>
        </p>
        <p>
            <input type="text">
        </p>
        <p>
            <img src="./../assets/delete.svg" alt="delete">
        </p>
    </div>
</template>

<style lang="scss" scoped>
@mixin font($weight, $size, $height, $color) {
    font-weight: $weight;
    font-size: $size;
    line-height: $height;
    color: $color;
}
.table-product {
    display: grid;
    grid-template-columns: 25px 600px 270px 270px auto;
    column-gap: 50px;
    padding: 16px;
    height: 67px;
    &:nth-child(2n+1) {
        background: #F0F0F0;
    }
    p {
        @include font(400, 17px, 20px, #001529);
        display: flex;
        align-items: center;
        select {
            width: 270px;
            height: 35px;
            background: #FFFFFF;
            border: 1px solid #C4C4C4;
            border-radius: 5px;
            @include font(400, 15px, 17px, #001529);
            padding: 0 10px;
            appearance: none;
            cursor: pointer;
        }
        input {
            width: 270px;
            height: 35px;
            background: #FFFFFF;
            border: 1px solid #C4C4C4;
            border-radius: 5px;
            padding: 0 10px;
            @include font(400, 17px, 20px, #001529);
        }
    }
}
.select__wrapper {
    position: relative;
    &::after {
        content: url('./../assets/Open.svg');
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        pointer-events: none;
    }
}
</style>