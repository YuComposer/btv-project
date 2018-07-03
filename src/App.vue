<template>
<div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">

      <!-- 侧边栏template -->
      <v-customerAside></v-customerAside>
      <!-- 主体 -->
      <template>
        <router-view></router-view>
      </template>

    </el-container>
  </div>
</template>

<script>
import customerAside from "@/components/aside/customerAside/customerAside";
import store from "@/assets/js/store/store.js";
export default {
  name: "App",
  data() {
    return {
      msg: this.$store.state.ctmManagementList.ctmManagementList
    };
  },
  methods: {},
  components: {
    "v-customerAside": customerAside
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  color: #333;
}
.el-container {
  height: 100%;
}
div {
  display: block;
}
.el-header {
  line-height: 0;
  padding: 0;
  margin: 0;
}
</style>
