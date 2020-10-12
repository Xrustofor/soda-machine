<template>
  <div class="blok">
    <!-- <vue-audio :file="file"/> -->
    <div class="window">
      <app-glass 
        class="position-glass"
        :full="full"
      />
    </div>
    <div class="list-button">
      <button
        @click="pour()"
        class="btn btn-success btn-lg btn3d"
      >
        Налити
      </button>
      <button 
        @click="drink()"
        class="btn btn-success btn-lg btn3d"
      >
        Випити
      </button>
    </div>
  </div>
</template>
<script>
import appGlass from './appGlass'


export default {
  components: {
    appGlass
  },
    data() {
    return {
      full: false,
    }
  },
  mounted(){
  },
  computed:{
    juice(){
      return this.$store.getters.getJuice
    },
  },
  methods: {
    async pour(){
      const permission = this.$store.getters.getPermission
      if(permission){
        this.$store.dispatch('setPour');
        this.full = true;
      }      
    },
    drink(){
      const done = this.$store.getters.getDone;
      const empty = this.$store.getters.getEmpty;
      if(!done && !empty){
        this.$store.dispatch('setDrink');
        this.full = false
      }
    }
  }
}
</script>
<style scoped>
  .blok{
    min-width: 180px;
    height: 250px;
    background: #c6aca8;
    border: 1px solid #8c8989;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .window{
    height: 150px;
    width: 120px;
    overflow: hidden;
    margin: 15px auto;
    background: slategrey;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 19px;
    padding-top: 40px;
  }
  .list-button{
    margin-bottom: 15px;
    padding: 5px 5px;
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
</style>