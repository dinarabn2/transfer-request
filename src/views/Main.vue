<script setup>
import Menu from './../components/Menu.vue'
import MainPage from './../components/MainPage.vue'
</script>

<template>
   <section class="app">
        <Menu />
        <MainPage />
   </section>
</template>

<style lang="scss" scoped>
.app {
    width: 1920px;
    margin: 0 auto;
}
</style>