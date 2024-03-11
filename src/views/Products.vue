<template>
  <div>
    <div class="text-end">
      <button class="btn btn-primary " type="button" @click="openModal(true)"> 增加一個產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="item in products" :key="item.id">

          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price }}
          </td>
          <td class="text-right">
            {{ item.price }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal" :item="tempProduct" @del-item="deleteProduct"></DelModal>
</template>


<script>
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
import {adminProductApi} from '@/utils/uri'
export default {
  components: {ProductModal, DelModal},
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
    }
  },

  methods: {

    getProducts() {
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products`
      console.log("login", url)
      this.axios.get(url).then((response) => {
        if (response.data.success) {
          //console.log(response.data)
          this.products = response.data.products;
        }

      })
    },
    openModal(isNew, item) {
      console.log(isNew, item)
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = {...item};
      }
      this.isNew = isNew;
      const productModal = this.$refs.productModal;
      productModal.showModal();
    },
    openDelModal(item) {

      this.tempProduct = {...item};
      const delModal = this.$refs.delModal;
      console.log(this.$refs)
      console.log(delModal)
      delModal.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, {data: this.tempProduct}).then((response) => {
        console.log(response);
        productComponent.hideModal();
        this.getProducts();
      });

    },
    deleteProduct() {

      let api = `${adminProductApi}/${this.tempProduct.id}`;
      this.$http.delete(api).then((response) => {
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });

    }

  },
  created() {
    this.getProducts();
  },
}

</script>