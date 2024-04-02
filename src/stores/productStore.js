import axios from 'axios';
import {defineStore} from 'pinia';
import {userProductsApi, userCartApi, userCouponApi, userOrderApi} from '@/utils/path'
export default defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      const url = `${userProductsApi}`;
      // this.isLoading = true;
      axios.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        // this.isLoading = false;
      });
    },
  },
});