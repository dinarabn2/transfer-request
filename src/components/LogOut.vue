<script setup>
import router from './../router/index'
</script>

<template>
    <div>
        <h4>Выход</h4>
        <img src="./../assets/logout.svg" alt="logout" @click="router.push({path: '/login'})">
    </div>
</template>

<style lang="scss" scoped>
$blue-color: #029AAD;
div {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    h4 {
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        color: $blue-color;
        display: inline-block;
        margin-right: 10px;
    }
    img {
        cursor: pointer;
    }
}
</style>