<template>
<div id="app">
    <!-- <el-container style="height: 100%; border: 1px solid #eee">

      <v-customerAside></v-customerAside>
      <template>
        <router-view></router-view>
      </template>

    </el-container> -->
    <div class="ancestors_top">
      <div class="ancestors_icon">
        <span>btvlogo</span>
      </div>
      <div class="ancestors_header">
        <v-ancestorsHeader></v-ancestorsHeader>
      </div>
    </div>

    <div class="ancestors_bottom">
      <div class="ancestors_left">
        <v-ancestorsAside></v-ancestorsAside>
      </div>
      <div class="ancestors_right">
        <router-view></router-view>
      </div>
    </div>


  </div>
</template>

<script>
import customerAside from "@/components/aside/customerAside/customerAside";
import store from "@/assets/js/store/store.js";
import ancestorsHeader from "@/components/ancestors/ancestors_header";
import ancestorsAside from "@/components/ancestors/ancestors_aside";
export default {
  name: "App",
  data() {
    return {
      msg: this.$store.state.ctmManagementList.ctmManagementList
    };
  },
  methods: {},
  components: {
    "v-customerAside": customerAside,
    "v-ancestorsHeader": ancestorsHeader,
    "v-ancestorsAside": ancestorsAside
  },
  beforeMount: function() {
    console.log("这是store里面的所有数据️⤵️");
    console.log(this.$store.state);
    console.log("这是所有的router信息⤵️");
    console.log(this.$router.options.routes);
  }
};
</script>
<style lang="scss">
@import "./assets/css/updataElementUi.css";
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
body,
html {
  -webkit-text-size-adjust: none;
  width: 100%;
  height: 100%;
}
* {
  text-decoration: none;
  list-style: none;
}
img {
  border: 0px;
}
ul,
li,
dl,
dd,
dt,
ol,
h1,
h2,
h3,
h4,
h5 {
  font-size: 12px;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.ancestors_top {
  display: flex;
}
.ancestors_icon {
  flex: 1.3;
  background: aqua;
  height: 100px;
  min-width: 150px;
}
.ancestors_header {
  flex: 8.7;
  background: yellowgreen;
  min-width: 600px;
}
.ancestors_bottom {
  display: flex;
}
.ancestors_left {
  flex: 1.3;
  background: pink;
  min-width: 150px;
}
.ancestors_right {
  flex: 8.7;
  background: orchid;
  min-width: 600px;
  overflow-y: scroll;
}

// .el-header {
//   background-color: #b3c0d1;
//   color: #333;
// }

// .el-aside {
//   color: #333;
// }
// .el-container {
//   height: 100%;
// }
// div {
//   display: block;
// }
// .el-header {
//   line-height: 0;
//   padding: 0;
//   margin: 0;
// }
</style>
