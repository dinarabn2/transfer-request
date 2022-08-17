<script setup>
import { listStore } from "./../store/listStore";

const store = listStore();

function deleteTable(event, product) {
  console.log(event.target);
  if (event.target) {
    store.passId = store.passId.filter((item) => item !== product);
    store.checkboxChecked = store.checkboxChecked.filter(
      (item) => item !== product.id
    );
  }
}
</script>

<template>
  <section
    class="table-product"
    v-for="(product, i) in store.passId"
    :key="product.id"
  >
    <p>{{ i + 1 }}</p>
    <p>{{ product.attributes.full_name }}</p>
    <p class="select__wrapper">
      <select>
        <option value="">Новый (5 шт.)</option>
        <option value="">Брак (5 шт.)</option>
        <option value="">Дефект (5 шт.)</option>
        <option value="">ПослеРемонта (5 шт.)</option>
        <option value="">Распакован (5 шт.)</option>
      </select>
    </p>
    <p>
      <input type="number" value="1" />
    </p>
    <p>
      <img
        src="./../assets/delete.svg"
        alt="delete"
        @click="deleteTable($event, product)"
      />
    </p>
  </section>
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
  &:nth-child(2n + 1) {
    background: #f0f0f0;
  }
  p {
    @include font(400, 17px, 20px, #001529);
    display: flex;
    align-items: center;
    select {
      width: 270px;
      height: 35px;
      background: #ffffff;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      @include font(400, 15px, 17px, #001529);
      padding: 0 10px;
      appearance: none;
      cursor: pointer;
    }
    input {
      width: 270px;
      height: 35px;
      background: #ffffff;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      padding: 0 10px;
      @include font(400, 17px, 20px, #001529);
    }
    img {
      cursor: pointer;
    }
  }
}
.select__wrapper {
  position: relative;
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