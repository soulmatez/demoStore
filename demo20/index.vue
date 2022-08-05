<template>
  <div class="box">
    <el-cascader
      :options="optionsThree"
      v-model="selectedThree"
      placeholder="省市区三级联动"
      @change="handleChange"
      ref="three"
    ></el-cascader>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";
export default {
  data() {
    return {
      optionsThree: regionData,
      selectedThree: ["120000", "120100", "120102"],
    };
  },
  methods: {
    handleChange() {
      console.log(this.selectedThree);
      console.log(this.$refs.three.getCheckedNodes()[0].pathLabels);
    },
  },
};
</script>