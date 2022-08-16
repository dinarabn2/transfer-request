import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'
import { useStore } from './store';

export const listStore = defineStore('list', () => {
    let store = useStore();
    let products = ref([]);
    let checkedProductInTree = ref([]);
    let collectID = ref([]);
    let passId = ref([]);
    let treeData = ref([]);
    let search = ref('');
    let checkboxChecked = ref([]);

    async function getProduct() {
        const res = await fetch("http://10.10.1.74:80/api/v1/catalog/categories", {
            headers: store.headers,
        });

        const data = await res.json();
        treeData.value = await data;
    }


    onMounted(() => {
        getProduct();
    });


    async function getList() {
        const list = checkedProductInTree._rawValue.join(',');
        if ((search.value.length > 2 && list) || list || search.value.length > 2) {
            const res = await fetch(`http://10.10.1.74:80/api/v1/catalog/search/categories-product?categories=${list}&search=${search.value.length > 2 ? search.value : ''}`, {
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
        checkedProductInTree, getList, products, reset, collectID, passId, treeData, search, checkboxChecked
    }
})