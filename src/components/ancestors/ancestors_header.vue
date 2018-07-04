<template>
    <div class="ancestors_header">
        <ul class="oneRouter_ul">
            <li class="oneRouter_li" v-for="(item , index) in router_list" :key="index" @click="submitIndex(index)">
                <a href="javascript:;">
                    {{item.mainRouterName}}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "ancestors_header",
  data() {
    return {
      router_list: this.$store.state.ctmManagementList.partenRouter_path
    };
  },
  methods: {
    submitIndex: function(index) {
      //   console.log(this.$store.state.parentJumpChildIndex);
      this.$store.state.parentJumpChildIndex = this.$store.state.ctmManagementList.childrenRouter_path[
        index
      ];
      console.log(1);
      console.log(this.$store.state.parentJumpChildIndex);
    }
  },
  beforeMount: function() {
    // console.log(this.router_list);
    // console.log("父类路由跳转");
    // console.log(this.router_list.mainRouterName);
    // this.$http
    //   .get("http://datainfo.duapp.com/shopdata/getGoods.php")
    //   .then(function(res) {
    //     console.log(res);
    //   });
    // console.log(this.router_list.ctmManagementList);
  }
};
</script>
<style spoded>
.ancestors_header {
  height: 100%;
}
.oneRouter_ul {
  width: 100%;
  height: 100%;
  background: red;
  display: flex;
}
.oneRouter_li {
  flex: 1;
  height: 98px;
  font-size: 20px;
  text-align: center;
  line-height: 100px;
  border: 1px solid;
}
</style>

