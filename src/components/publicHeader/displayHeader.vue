<template>
<div class="publicHeader">
  <el-header style="text-align: left;">
    <p class="publicHeader-oneP">
      <span>{{publicHeader.parentName}}</span><span>/</span><span>{{publicHeader.children}}</span>
    </p>
    <p class="publicHeader-twoP">
      {{publicHeader.children}}
    </p>
  </el-header>
</div> 
</template>
<script>
export default {
  name: "publicHeader",
  data() {
    return {
      publicHeader: this.$store.state.publicHeaderJump
    };
  },
  beforeMount: function() {
    console.log(this.$store.state.publicHeaderJump);
  }
};
</script>
<style lang="scss" scoped>
.publicHeader {
  width: 100%;
}
.publicHeader-oneP {
  display: inline-block;
  font-size: 12px;
  width: 100%;
  padding: 5px 0 0 20px;
}
.publicHeader-twoP {
  display: inline-block;
  width: 100%;
  padding: 0 0 10px 20px;
  font-weight: 500;
  font-size: 14px;
}
</style>

