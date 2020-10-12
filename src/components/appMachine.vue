<template>
  <div class="background-machine">
    <app-purse class="information-table"/>
    <div class="position-wrap">
      <app-main-menu />
      <app-delivery-goods/>
    </div>
  </div>
</template>

<script>

import appMainMenu from "./appMainMenu"
import appPurse from "./appPurse"
import appDeliveryGoods from './appDeliveryGoods'

export default {
  components: {
    appMainMenu,
    appPurse,
    appDeliveryGoods
  },
}
</script>
<style scoped>
  .background-machine {
    background: #e2472f;
    width: 500px;
    height: 800px;
    margin-top: 25px;
    position: relative;
    z-index: 1;
    border-radius: 15px;
    border: 10px solid #d18377;
    box-shadow: 10px 10px 0px #e2472f;
  }
  .position-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
  }
  .information-table{
    margin: 25px auto;
    max-width: 300px;
    padding: 15px 25px;
    border-radius: 5px;
  }
</style>