<template>
    <div class="ctmQuery">
         <v-publicHeader></v-publicHeader>
         <el-main>

       <el-form>
         <div class="from_max">
         <div class="float_input_item float_input_itemOne">
           <el-form-item>       
           <el-input placeholder="请输入内容"  v-model="textValue" clearable>
             <template slot="prepend">客户名称：</template>
           </el-input>
           </el-form-item>
         </div>

         <div class="float_input_item">
           <el-form-item>
           客户类型：<el-select v-model="value" :placeholder="placeholder" class="ctmQ_select">
             <template slot="prepend">客户类型：</template>
             <el-option v-for="item in options" :key = "item.value" :label="item.label" :value="item.value"></el-option>
           </el-select>
         </el-form-item>
         </div>

         <div class="float_input_item">
           <el-form-item>
           <el-button type="primary">查询</el-button>
           </el-form-item>
         </div>
         
         <div class="float_input_item">
           <el-form-item>
           <el-button @click="clearValue">重置</el-button>
           </el-form-item>
         </div>
         </div>
         
       </el-form>



  <el-table
  border
    :data="tableData"
    style="width: 100%">
    <el-table-column type="selection"></el-table-column>
    <el-table-column
      fixed
      prop="date"
      label="客户名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="客户类型"
      sortable
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="客户子类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="录入人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="归属人"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="录入日期"
      sortable
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small">详情</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  <div class="block">
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>






         </el-main>
    </div>
</template>
<script>
import store from "@/assets/js/store/store.js";
import publicHeader from "@/components/publicHeader/displayHeader.vue";

export default {
  name: "ctmQuery",
  data() {
    return {
      // tableData: this.$store.state.name
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      textValue: "",
      placeholder: "请选择",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    clearValue: function() {
      this.textValue = "";
      this.placeholder = "请选择";
    }
  },
  beforeMount: function() {
    // console.log(this.tableData);
  },
  components: {
    "v-publicHeader": publicHeader
  }
};
</script>
<style lang="scss" scoped>
.ctmQuery {
  width: 100%;
}
* {
  font-size: 14px;
}
.from_max {
  display: flex;
  flex-wrap: wrap;
}
.float_input_item {
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;
}
.block {
  text-align: right;
  padding: 15px 20px 0 0;
}
.el-table {
  text-align: center;
}
</style>
