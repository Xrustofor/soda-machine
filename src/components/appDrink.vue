<template>
  <div class="main-blok" :class="(currentId == item.id) && permission ? 'light' : ''">
    <div>{{ item.title }}</div>
    <slot name="left"></slot>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
  },
  computed: {
    currentId(){
      return this.$store.getters.getJuice.id;
    },

    permission(){
      return this.$store.getters.getPermission;
    }
  }
}
</script>
<style scoped>
  .main-blok {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .light{
    background:gold;
  }
  .main-blok>div{
    -webkit-text-stroke: 1px #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    font-size: 1.6rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: oblique;
    font-weight: bold;
  }
</style>