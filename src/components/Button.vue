<script setup>
defineProps({
  text: String
})

</script>

<template>
    <button>{{text}}</button>
</template>

<style lang="scss" scoped>
button {
    width: 277px;
    height: 50px;
    background: #029AAD;
    border: 1px solid #029AAD;
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    display: block;
    margin: 50px auto 0 auto;
    cursor: pointer;
}
</style>