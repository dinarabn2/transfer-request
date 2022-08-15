<script setup>
import Header from './Header.vue'
import MainContent from './MainContent.vue'
import Button from './Button.vue'
</script>

<template>
    <section class="main">
        <Header />
        <MainContent />
        <Button text="Создать перемещение" />
    </section>
</template>

<style lang="scss" scoped>
.main {
    padding: 30px 80px 30px 330px;
}
</style>