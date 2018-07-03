<template>
    <div class="materialQuery">
      <v-publicHeader></v-publicHeader>
    </div>
</template>
<script>
import publicHeader from "@/components/publicHeader/displayHeader.vue";
export default {
  name: "materialQuery",
  components: {
    "v-publicHeader": publicHeader
  }
};
</script>
<style lang="scss" scoped>
.materialQuery {
  width: 100%;
}
</style>