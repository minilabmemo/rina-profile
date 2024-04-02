<template>
  <div>
    <div>不解構的用法 </div>
    <code>const user = useUserStore();</code>
    {{ user.name }}
    <div> {{ user.getUserName }}</div>
    <button type="button" @click="user.updateName">按我觸發 updateName</button>


    <div>解構的用法</div>
    {{ name }} {{ wallet }}
    <button type="button" @click="updateName">按我觸發 updateName</button>

    <button type="button" @click="updateData">按我觸發 updateData</button>
    <button type="button" @click="reset">按我觸發 reset</button>
  </div>
</template>


<script>
import useUserStore from '@/stores/user'
import {storeToRefs} from 'pinia'
export default {
  setup() {
    const user = useUserStore();
    user.name = "被我改名了"

    const {name, wallet} = storeToRefs(user);
    name.value = "換個解構取值"

    const {updateName} = user;

    function updateData() {
      user.$patch(
        {
          name: "資料 patch 更名了"
        }
      )
    }
    function reset(params) {
      user.$reset();

    }

    return {user, name, wallet, updateName, updateData, reset}
  }

}
</script>