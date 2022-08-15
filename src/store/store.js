import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useStore = defineStore('main', () => {
    const headers = {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aF9zZXJ2aWNlL2FwaS9sb2dpbiIsImlhdCI6MTY2MDE5NzkxOCwiZXhwIjoxNjYxMDYxOTE4LCJuYmYiOjE2NjAxOTc5MTgsImp0aSI6IkJSZHROd2NaSW9ETm42S1EiLCJzdWIiOiI1NCIsInBydiI6IjZmYWMxZDlmNTk5NWEzOTE4M2Y2ZGJhN2RjZDI0NmI0YjlkZGYyMWQiLCJpZCI6NTQsImZpcnN0X25hbWUiOiJlcmJvbC50Iiwicm9sZSI6Nn0.1gRW-MeJee4F90volpo_N7OSkMyb42T0GUKHeF3R8zk',
        Accept: 'application/json'
    }
    let modal = ref(false);

    let request = reactive(
        {
            transit_id: '',
            products: [
                {
                    product_id: '',
                    quality_id: '',
                    quantity: ''
                }
            ]
        }
    )

    return {
        headers, request, modal
    }
})