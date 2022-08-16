<script setup>
import ModalInput from "./ModalInput.vue";
import ModalContent from "./ModalContent.vue";
import Button from "./Button.vue";
import Tree from "./Tree.vue";
import PoductListInModal from "./PoductListInModal.vue";
import { useStore } from "./../store/store";
import { listStore } from "./../store/listStore";

const store = useStore();
const storeList = listStore();
const props = defineProps({
  show: Boolean,
});

function closeBtn() {
  store.modal = false;
  storeList.reset();
}

function postData() {
  if (storeList.collectID) {
    store.modal = false;
    storeList.passId = storeList.collectID;
  } else {
    store.modal = true;
  }
}
</script>

<template>
  <section
    v-if="store.modal"
    class="overlay"
    @click.self="store.modal = !store.modal"
  >
    <div class="modal">
      <button class="modal__close" @click="closeBtn()">
        <img src="./../assets/close.svg" alt="close" />
        <p>Закрыть</p>
      </button>
      <ModalInput />
      <div class="modal__list">
        <Tree />
        <PoductListInModal />
      </div>
      <Button class="btn" text="Выбрать товар" @click="postData()" />
    </div>
  </section>
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
  padding: 50px;
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
    background: #029aad;
    border-radius: 10px 0px 0px 10px;
    left: -130px;
    cursor: pointer;
    border: none;
    p {
      display: inline-block;
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 550px 550px;
    column-gap: 50px;
  }
}
.btn {
  width: 202px;
  height: 50px;
}
</style>