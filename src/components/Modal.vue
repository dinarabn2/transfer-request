<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
    <div v-if="show" class="overlay">
        <div class="modal">
            <div class="modal__close" @click="$emit('close')">
                <img src="./../assets/close.svg" alt="close">
                <p>Закрыть</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    z-index: 2;
}
.modal {
    position: fixed;
    width: 1300px;
    background-color: #fff;
    height: 100vh;
    z-index: 5;
    right: 0;
    &__close {
        display: flex;
        align-items: center;
        padding: 12.5px 19px;
        position: absolute;
        width: 130px;
        height: 40px;
        top: 30px;
        background: #029AAD;
        border-radius: 10px 0px 0px 10px;
        left: -130px;
        cursor: pointer;
        p {
            display: inline-block;
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            color: #FFFFFF;
            margin-left: 10px;
        }
    }
}

</style>