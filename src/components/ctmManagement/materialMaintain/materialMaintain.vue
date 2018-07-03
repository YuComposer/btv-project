<template>
<div class="materialMaintain">
  <v-publicHeader></v-publicHeader>
</div>
</template>
<script>
import publicHeader from "@/components/publicHeader/displayHeader.vue";
export default {
  name: "materialMaintain",
  components: {
    "v-publicHeader": publicHeader
  }
};
</script>
<style lang="scss" scoped>
.materialMaintain {
  width: 100%;
}
</style>