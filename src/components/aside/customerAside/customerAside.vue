<template>
<div class="customerAside">

  
<el-row class="tac">
  <el-col>
    <el-menu router :default-active="router" class="el-menu-vertical-demo">
      <el-submenu index="1" v-for="(item , index) in navList" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.mainRouterName}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(items , i) in item.children" :key="i" :index="items.path" @click="getRouterInfo(i)">{{items.menuName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>


</div>
</template>
<script>
export default {
  name: "customer-aside",
  data() {
    return {
      isCollapse: true,
      navList: this.$store.state.ctmManagementList,
      router: this.$router.options.routes.path
    };
  },
  methods: {
    getRouterInfo: function(index) {
      var that = this;
      this.navList.forEach(function(element) {
        that.$store.state.publicHeaderJump.children =
          element.children[index].menuName;
        that.$store.state.publicHeaderJump.parentName = element.mainRouterName;
      });
    }
  },
  beforeMount: function() {}
};
</script>
<style scoped>
.el-submenu {
  width: 200px;
}
.customerAside {
  border-right: 1px solid #ebeef5;
  box-sizing: border-box;
}
.el-submenu {
  border: none;
}
</style>

