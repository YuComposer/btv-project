<template>
    <div class="ctmQuery">
         <!-- <v-publicHeader></v-publicHeader> -->
    <el-main>
      
      <!-- 查询表单 -->
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
           <el-button type="primary" @click="chaxun">查询</el-button>
           </el-form-item>
         </div>
         
         <div class="float_input_item">
           <el-form-item>
           <el-button @click="clearValue">重置</el-button>
           </el-form-item>
         </div>
         </div>
         
       </el-form>

      <!-- 新建按钮 批量操作按钮 -->
       <div class="newButton">
         <router-link to="/ctmManagement/ctmMaintain">
          <el-button type="primary">+ 新建</el-button>
         </router-link>
         
         <el-button @click="show">批量操作</el-button>
       </div>

      <!-- table选择总数 -->
       <div class="totalNumber">
         <div class="totalNumberOption"></div>
         <p class="totalNumberP">已选择{{maxNum}}项</p>
       </div>

  <el-table :data="tableData" style="width: 100%" @selection-change="selectionChange">
    <el-table-column type="selection" v-if="isShow"></el-table-column>
    <el-table-column fixed prop="date" label="客户名称" width="auto"></el-table-column>
    <el-table-column prop="name" label="客户类型" sortable width="120"></el-table-column>
    <el-table-column prop="province" label="客户子类型" width="auto"></el-table-column>
    <el-table-column prop="city" label="录入人" width="auto"></el-table-column>
    <el-table-column prop="address" label="归属人" width="auto"></el-table-column>
    <el-table-column prop="zip" label="录入日期" sortable width="auto"></el-table-column>
    <el-table-column fixed="right" label="操作" width="auto">
      <template slot-scope="scope">
        <router-link to="/ctmManagement/ctmMaintain">
        <el-button type="text">详情</el-button>
        </router-link>
        <el-button type="text">删除</el-button>
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
import axios from "axios";

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
      currentPage4: 4,
      isSelection: "",
      maxNum: 0,
      isShow: false
    };
  },
  methods: {
    clearValue: function() {
      this.textValue = "";
      this.placeholder = "请选择";
    },
    selectionChange: function(index) {
      for (var i = 0; i < index.length; i++) {
        this.maxNum = i + 1;
      }
    },
    show: function() {
      this.isShow = !this.isShow;
    },
    chaxun: function() {
      // console.log(this.textValue);
      // axios.get("/api/customer/adBrand/list").then(function(res) {
      //   console.log(res);
      // });
    }
  },
  beforeMount: function() {},
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
  height: 40px;
}
.block {
  text-align: right;
  padding: 15px 20px 0 0;
}
.el-table {
  text-align: center;
}
.newButton {
  padding: 10px 0 10px 0;
}
.totalNumber {
  width: 100%;
  height: 30px;
  border: 1px solid #409eff;
  position: relative;
  line-height: 5px;
  margin-bottom: 5px;
}
.totalNumberOption {
  width: 100%;
  height: 100%;
  background: #409eff;
  opacity: 0.1;
  position: absolute;
  z-index: -1;
}
.totalNumberP {
  padding-left: 20px;
}
</style>
