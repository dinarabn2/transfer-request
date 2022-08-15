<script setup>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
import { useStore } from "./../store/store";

const store = useStore();
</script>

<template>
  <section class="product">
    <h4>Товар(-ы):</h4>
    <button class="product__btn" @click="store.modal = true">
      Нажмите, чтобы выбрать товар
    </button>
  </section>
  <Modal />
</template>

<style lang="scss" scoped>
@mixin font($weight, $size, $height, $color) {
  font-weight: $weight;
  font-size: $size;
  line-height: $height;
  color: $color;
}
.product {
  margin-top: 30px;
  h4 {
    @include font(400, 17px, 20px, #7f7f7f);
  }
  &__btn {
    width: 100%;
    height: 60px;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 1px 4px rgba(219, 219, 219, 0.3);
    border-radius: 5px;
    @include font(500, 20px, 24px, #029aad);
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>