import { defineStore } from 'pinia';
import { useStore } from './store';
import { ref, onMounted } from 'vue'

export const storeWarehouse = defineStore('warehouse', () => {
    const store = useStore();
    let warehouses = ref([]);
    let options = ref([]);

    async function getHouses() {
        const res = await fetch(
            "http://10.10.1.74:80/api/v1/handbook/warehouses/list",
            {
                headers: store.headers,
            }
        );

        const data = await res.json();
        warehouses.value = await data;

        for (let obj of warehouses.value) {
            options.value.push({ value: obj.id, label: obj.name });
        }
    }
    onMounted(() => {
        getHouses();
    });

    return {
        options
    }
})