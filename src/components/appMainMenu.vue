<template>
  <div class="style-menu">
    <app-drink 
      v-for="item in items"
      :key="item.id"
      :item="item"
      class="element"
    >
    <template v-slot:left>
      <button
        @click="getOrder(item.id)"
        class="btn btn-success btn-lg btn3d"
      >
        {{ item.price }}
      </button>
    </template>
    </app-drink>
  </div>
</template>

<script>

import appDrink from "./appDrink"
export default {
  components: {
    appDrink,
  },
  data() {
    return {
      items: [],
    }
  },
  created(){
    this.items = this.$store.getters.getProducts
  },
  methods: {
    getOrder(id){
      const emptyGlass = this.$store.getters.getEmpty
      const done = this.$store.getters.getDone
      if(!done && emptyGlass){
        console.log(emptyGlass);
        this.$store.dispatch('setSelectedProduct', id);
      }
    }
  }
}
</script>
<style>
  .style-menu{
    background: #c6aca8;
    width: 250px;
    border-radius: 6px;
    border: 2px solid #a09f9f;
    padding: 15px;
  }
  .element{
    margin-top: 10px;
    border: 1px solid #8c8989;
    padding: 5px 10px;
    border-radius: 15px;
  }

  .btn3d.btn-success {
    box-shadow:0 0 0 1px #31c300 inset, 0 0 0 2px rgba(255,255,255,0.15) inset, 0 8px 0 0 #5eb924, 0 8px 8px 1px rgba(0,0,0,0.5);
    background-color:#78d739;
  }

  .btn3d.btn-success:active, .btn3d.btn-success.active {
    box-shadow:0 0 0 1px #30cd00 inset, 0 0 0 1px rgba(255,255,255,0.15) inset, 0 1px 3px 1px rgba(0,0,0,0.3);
    background-color: #78d739;
  }
  .btn{
    cursor: pointer;
    min-width: 40px;
    cursor: pointer;
  }
  .btn-lg {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 100%;
  }
  .btn3d {
    position:relative;
    top: -6px;
    border:0;
    transition: all 40ms linear;
    margin-top:10px;
    margin-bottom:10px;
    margin-left:2px;
    margin-right:2px;
    background-image:none;
    padding: 7px 10px;
    font-size: 15px;
  }
  .btn3d:active:focus,
  .btn3d:focus:hover,
  .btn3d:focus {
    -moz-outline-style:none;
    outline:medium none;
  }
  .btn3d:active, .btn3d.active {
    top:2px;
  }
  

</style>