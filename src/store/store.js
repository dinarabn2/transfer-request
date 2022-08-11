import {defineStore} from 'pinia';
import { reactive } from 'vue';

export const useStore = defineStore('main', () => {
    const headers = {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aF9zZXJ2aWNlL2FwaS9sb2dpbiIsImlhdCI6MTY1OTUxMzExNSwiZXhwIjoxNjYwMzc3MTE1LCJuYmYiOjE2NTk1MTMxMTUsImp0aSI6IkdoWFRaNXFqYUFRaVZhTGMiLCJzdWIiOiI3IiwicHJ2IjoiNmZhYzFkOWY1OTk1YTM5MTgzZjZkYmE3ZGNkMjQ2YjRiOWRkZjIxZCIsImlkIjo3LCJmaXJzdF9uYW1lIjoic3VwZXJ2YWl6ZXIuciIsInJvbGUiOjZ9.8u3gPhhgEB_6SX5EzDEPw54cxWUFuoxgKqfayNFtgHc',
        Accept: 'application/json'
    }

    let request = reactive(
        {
            sender_id: '',
            receiver_id: '',
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
        headers, request
    }
})