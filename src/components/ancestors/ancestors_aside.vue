<template>
    <div class="ancestors_aside">
        <ul class="twoRouer_ul">
            <li class="twoRouter_li" v-for="(item , index) in this.$store.state.parentJumpChildIndex" :key="index" border="1px" @click="a">
               <router-link :to="item.path">
                   {{item.menuName}}
               </router-link> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "ancestors_aside",
  data() {
    return {
      // router_list: this.$store.state.parentJumpChildIndex
    };
  },
  methods: {
    a: function() {
      //   console.log(this.router_list);
    }
  },
  beforeMount: function() {
    // console.log(this.router_list);
  }
};
</script>
<style scoped>
.ancestors_aside {
  width: 100%;
  height: auto;
}
.twoRouer_ul {
  width: 100%;
}
.twoRouter_li {
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid;
}
</style>

