<script setup>
import router from './../router/index'
</script>

<template>
    <header class="header">
        <div class="header__wrapper">
            <img class="header__arrow" src="./../assets/Arrow.svg" alt="arrow-back">
            <img class="header__search" src="./../assets/search.svg" alt="search">
            <input class="header__input" type="text" placeholder="Поиск">
        </div>
        <div class="header__wrapper">
            <div class="header__notification">
                <img src="./../assets/Notifications.svg" alt="Notification">
            </div>
            <img src="./../assets/Settings.svg" alt="Settings" class="header__setting">
            <img src="./../assets/Ava.png" alt="ava" class="header__ava">
            <div class="header__title">
                <h3>Толганай Акылбекова</h3>
                <h4>Заведующая складом</h4>
            </div>
            <img src="./../assets/logout.svg" alt="logout" class="header__logout" @click="router.push({path: '/login'})" >
        </div>
    </header>
</template>

<style lang="scss" scoped>
@mixin ml30 {
    margin-left: 30px;
}
@mixin flex {
    display: flex;
    align-items: center;
}
@mixin font($weight, $size, $height, $color) {
    font-weight: $weight;
    font-size: $size;
    line-height: $height;
    color: $color;
}
.header {
    @include flex;
    justify-content: space-between;
    &__wrapper {
        @include flex;
    }
    &__search {
        @include ml30;
    }
    &__input {
        margin-left: 20px;
        @include font(400, 20px, 23px, #7F7F7F);
        background-color: #F2F7F8;
        border: none;
        padding: 10px;
        border-radius: 10px;
    }
    &__notification {
        width: 40px;
        height: 40px;
        background: #DDEEF2;
        border-radius: 10px;
        @include flex;
        justify-content: center;
    }
    &__setting {
        @include ml30;
    }
    &__ava {
        @include ml30;
    }
    &__logout {
        margin-left: 15px;
        cursor: pointer;
    }
    &__title {
        margin-left: 10px;
        h3 {
            margin-bottom: 3px;
            @include font(400, 17px, 20px, #001529);
        }
        h4 {
            @include font(400, 13px, 15px, #7F7F7F);
        }
    }
}
</style>