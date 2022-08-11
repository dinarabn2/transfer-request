<script setup>
import Modal from '../components/Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
    <div class="product">
        <h4>Товар(-ы):</h4>
        <button class="product__btn" @click="showModal = true">Нажмите, чтобы выбрать товар</button>
    </div>
    <Modal :show="showModal" @close="showModal = false" />
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
        @include font(400, 17px, 20px, #7F7F7F);
    }
    &__btn {
        width: 100%;
        height: 60px;
        background: #FFFFFF;
        border: 1px solid #C4C4C4;
        box-shadow: 0px 1px 4px rgba(219, 219, 219, 0.3);
        border-radius: 5px;
        @include font(500, 20px, 24px, #029AAD);
        margin-top: 20px;
        cursor: pointer;
    }

}
</style>