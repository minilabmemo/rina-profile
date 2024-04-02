import axios from 'axios';
import {defineStore} from 'pinia';
import {userProductsApi} from '@/utils/path'
import statusStore from './statusStore';
const status = statusStore();

export default defineStore('productStore', {

  state: () => ({
    products: [],
  }),
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price),
  },
  actions: {
    getProducts() {
      const url = `${userProductsApi}`;
      status.isLoading = true;
      axios.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        status.isLoading = false;
      });
    },
  },
});