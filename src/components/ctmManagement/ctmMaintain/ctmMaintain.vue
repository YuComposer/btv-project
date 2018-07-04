<template>
    <div class="ctmMaintain">
         <v-publicHeader></v-publicHeader>
         <div class="basic_title">
           
         </div>
  <div class="basic_form_contaioner">
  <!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="客户名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
    <el-form-item label="客户类型" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
    <el-form-item label="子类型" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
    <el-form-item label="所属地址" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
    <el-form-item label="归属人" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form> -->

<el-form :rules="rules" :model="form" label-width="300px">
    <el-form-item label="客户名称" prop="">

    </el-form-item>
</el-form>




</div>

    </div>
</template>
<script>
import store from "@/assets/js/store/store.js";
import publicHeader from "@/components/publicHeader/displayHeader.vue";
export default {
  name: "ctmMaintain",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });

      console.log(this.$refs);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  components: {
    "v-publicHeader": publicHeader
  }
};
</script>
<style lang="scss" scoped>
.ctmMaintain {
  width: 100%;
}
.form_contaioner {
  padding: 20px 0 0 0;
}
</style>

