<template>
  <div class="glass">
    <div 
      class="product"
      :class="full ? 'full': ''"
      :style="`background: ${juice.color}`"
    >
      <img src="../assets/glass.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    full: {
      type: Boolean
    }
  },
  computed: {
    juice(){
      return this.$store.getters.getJuice
    }
  }

}
</script>
<style scoped>
  .product{
    width: 60px;
    height: 0;
    margin: 0 auto;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  .full{
    height: 90px;
    transition: 5s height;
  }
  img{
    position:absolute;
    bottom: 0;
    left: 13px;
  }


</style>