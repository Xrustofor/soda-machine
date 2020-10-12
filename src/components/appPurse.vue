<template>
  <div class="wrap">{{purse}}</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created(){},
  computed: {
    purse(){
      return this.$store.getters.getPurse;
    }
  }
}
</script>
<style scoped>
  .wrap{
    background: #78d739;
  }
</style>