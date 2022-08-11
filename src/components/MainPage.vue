<template>
    <section class="main">
        <Header />
        <MainContent />
        <Button />
    </section>
</template>

<script setup>
import Header from './Header.vue'
import MainContent from './MainContent.vue'
import Button from './Button.vue'
</script>

<style lang="scss" scoped>
.main {
    padding: 30px 80px 30px 330px;
}
</style>