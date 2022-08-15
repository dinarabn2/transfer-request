import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useStore } from './store';

export const listStore = defineStore('list', () => {
    let store = useStore();
    let products = ref([]);
    let checkedProductInTree = ref([]);
    let collectID = ref([]);
    let passId = ref([]);

    async function getList() {
        const list = checkedProductInTree._rawValue.join(',');
        if (list) {
            const res = await fetch(`http://10.10.1.74:80/api/v1/catalog/search/categories-product?categories=${list}`, {
                headers: store.headers
            });

            const data = await res.json();
            products.value = await data;
        } else {
            products.value = [];
        }
    }


    watch(checkedProductInTree, () => {
        getList();
    });

    function reset() {
        products.value = [];
        checkedProductInTree.value = [];
    }

    return {
        checkedProductInTree, getList, products, reset, collectID, passId
    }
})