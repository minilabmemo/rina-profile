//Pinia 與 Options API 章節
import {defineStore} from 'pinia'


const useUserStore = defineStore('user store', {
  // other options...

  //Data
  state: () => ({wallet: 300, name: 'Eduardo'}),
  //Computed
  getters: {
    getUserName: (state) => `你好，${state.name}`,
  },
  //Methods
  actions: {
    updateName() {
      this.name = "小美"
    },
  },
})

export default useUserStore;