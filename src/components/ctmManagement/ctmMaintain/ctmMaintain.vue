<template>
    <div class="ctmMaintain">
         <v-publicHeader></v-publicHeader>
    </div>
</template>
<script>
import store from "@/assets/js/store/store.js";
import publicHeader from "@/components/publicHeader/displayHeader.vue";
export default {
  name: "ctmMaintain",
  components: {
    "v-publicHeader": publicHeader
  }
};
</script>
<style lang="scss" scoped>
.ctmMaintain {
  width: 100%;
}
</style>

