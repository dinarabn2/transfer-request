<script setup>
import { listStore } from "./../store/listStore";

const store = listStore();

function changeCheckbox(event, id) {
  if (event.target.checked) {
    event.target.parentElement.classList.toggle("blue");
    store.collectID.push(id);
  } else {
    store.collectID = store.collectID.filter((item) => item !== id);
    event.target.parentElement.classList.remove("blue");
  }
}
</script>

<template>
  <section v-if="store.products">
    <div class="border">
      <p v-for="list in store.products" :key="list.id">
        <input
          type="checkbox"
          @change="changeCheckbox($event, list)"
          :value="list.id"
          v-model="store.checkboxChecked"
        />
        <span>{{ list.attributes.full_name }}</span>
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 620px;
  overflow: auto;
}
span {
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  margin-left: 15px;
  margin-bottom: 20px;
}
input {
  cursor: pointer;
}
.border {
  border-left: 1px solid #029aad;
  padding-left: 50px;
}
.blue {
  color: #029aad;
}
</style>
