<template>
    <div class="ctmQuery">
    <el-main>
       <el-form>
         <div class="from_max">
         <div class="float_input_item float_input_itemOne">
           <el-form-item>       
           <el-input placeholder="请输入内容"  v-model="userName" clearable>
             <template slot="prepend">客户名称：</template>
           </el-input>
           </el-form-item>
         </div>
         <div class="float_input_item">
        客户类型： 
        <el-cascader :options="options1" change-on-select @change="getSelection"></el-cascader>
         </div>

         <div class="float_input_item">
           <el-form-item>
           <el-button type="primary" @click="checkUser">查询</el-button>
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
          <el-button type="primary" @click="dialogFormVisible = true">+ 新建</el-button>
         <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            批量操作
          <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a" @click="show">删除</el-dropdown-item>
          <el-dropdown-item command="b">导出excel</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
        <el-button v-show="delBtnIsShow" @click="deleteSelectTable">删除</el-button>
        <el-button v-show="delBtnIsShow" @click="cancelSelect">取消</el-button>
         <!-- <el-button @click="show">批量操作</el-button> -->
       </div>

      <!-- 点击新建按钮弹出框 -->
  <el-dialog title="新建" :visible.sync="dialogFormVisible">
  <el-collapse accordion>
    <el-collapse-item>
      <template slot="title">基本信息 <i class="header-icon el-icon-info" style="color:#409EFF"></i>
      </template>
      <el-form>
      <el-form-item label="客户名称" label-width="100px">
        <el-input v-model="newUserModel.userName" auto-complete="off" @blur="nameRepetition"></el-input>
      </el-form-item>
      <el-form-item label="客户类型" label-width="100px">
        <el-select v-model="newUserModel.userClass" placeholder="请选择客户类型">
          <el-option v-for="(item,index) in newUserClass" :key="index"  :label="item.value" :value="item.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="子类型" label-width="100px">
        <el-select v-model="newUserModel.childUserClass" placeholder="请选择子类型">
          <el-option v-for="(item, index) in newChildUserClass" :key="index" :label="item.value" :value="item.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属地址" label-width="100px">
        <el-select v-model="newUserModel.userAddress" placeholder="请选择所属地址">
          <el-option v-for="(item , index) in newUserAddress" :key="index" :label="item.value" :value="item.key"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="归属人" label-width="100px">
        <el-select v-model="newUserModel.personal" placeholder="请选择归属人">
          <el-option v-for="(item , index) in newPersonal" :key="index" :label="item.value" :value="item.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button style="margin-left:400px" class="el-button--primary" @click="getNewUserModel">保存</el-button>
        <el-button @click="clearNewUserModel">清空</el-button>
      </el-form-item>
    </el-form>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">其它信息  <i class="header-icon el-icon-info" style="color:#409EFF"></i>
      </template>
      <el-form :model="form" :inline="true" class="demo-form-inline">
      <el-form-item label="公司法人" label-width="100px">
        <el-input v-model="newOtherModel.legalPerson" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" label-width="100px">
        <el-input v-model="newOtherModel.companyAddress" auto-complete="off"></el-input>
      </el-form-item>
  <el-form-item label="经营性质" label-width="100px">
    <el-select v-model="newOtherModel.Nature" clearable placeholder="请选择经营性质">
        <el-option v-for="(item,index) in newOtherNature" :key="index" :label="item.value" :value="item.key"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="注册资金" label-width="100px">
        <el-input v-model="newOtherModel.capital" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="公司邮箱" label-width="100px">
        <el-input v-model="newOtherModel.email" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="电话传真" label-width="100px">
        <el-input v-model="newOtherModel.phone" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="经营范围" label-width="100px">
  <el-input v-model="newOtherModel.Range" type="textarea" autosize placeholder="请输入内容">
  </el-input>
  </el-form-item>
  <el-form-item label="公司网站" label-width="100px">
        <el-input v-model="newOtherModel.website" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
        <el-button style="margin-left:400px" class="el-button--primary" @click="getNewOtherModel">保存</el-button>
        <el-button @click="clearNewOtherModel">清空</el-button>
  </el-form-item>
    </el-form>
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">附件信息  <i class="header-icon el-icon-info" style="color:#409EFF"></i>
      </template>
        <el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    </el-collapse-item>
  </el-collapse>

    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>

  <!-- 点击编辑按钮弹出框 -->
  <el-dialog title="编辑" :visible.sync="editDisplay">
  <el-form>
      <el-form-item label="客户名称" label-width="100px">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="客户类型" label-width="100px">
        <el-select placeholder="请选择活动区域">
          <el-option v-for="(item,index) in kehuleixing" :key="index"  :label="item.value" :value="item.key"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="子类型" label-width="100px">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属地址" label-width="100px">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="归属人" label-width="100px">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="editDisplay = false">取 消</el-button>
    <el-button type="primary" @click="editDisplay = false">确 定</el-button>
  </div>
</el-dialog>

      <!-- table选择总数 -->
       <!-- <div class="totalNumber">
         <div class="totalNumberOption"></div>
         <p class="totalNumberP">已选择{{maxNum}}项</p>
       </div> -->

      <!-- 客户table -->
  <el-table :data="tableData" style="width: 100%" @selection-change="selectionChange">
    <el-table-column type="selection" v-if="isShow" @click="getTableItem(scope.row)"></el-table-column>
    <el-table-column fixed prop="date" label="客户名称" width="auto"></el-table-column>
    <el-table-column prop="name" label="客户类型" sortable width="120"></el-table-column>
    <el-table-column prop="province" label="客户子类型" width="auto"></el-table-column>
    <el-table-column prop="city" label="录入人" width="auto"></el-table-column>
    <el-table-column prop="address" label="归属人" width="auto"></el-table-column>
    <el-table-column prop="zip" label="录入日期" sortable width="auto"></el-table-column>
    <el-table-column fixed="right" label="操作" width="auto">
      <template slot-scope="scope">
        <el-button type="text" @click="openDetails(scope.row)" >
          <i class="el-icon-zoom-in"></i>
        </el-button>
        <el-button type="text" @click="updataTbaleItem(scope.row)">
          <i class="el-icon-edit"></i>
        </el-button>
        <el-button type="text" @click="deleteTable_item(scope.row)">
          <i class="el-icon-delete"></i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
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
        }
      ],
      options1: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则"
            },
            {
              value: "daohang",
              label: "导航"
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic"
            },
            {
              value: "form",
              label: "Form"
            },
            {
              value: "data",
              label: "Data"
            },
            {
              value: "notice",
              label: "Notice"
            },
            {
              value: "navigation",
              label: "Navigation"
            },
            {
              value: "others",
              label: "Others"
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      //点击新建弹出框客户基本信息的model绑定
      newUserModel: {
        userName: "",
        userClass: "", //客户类型
        childUserClass: "", //子类型
        userAddress: "", //所属地址
        personal: "" //归属人
      },
      newUserClass: [
        //客户类型实体
        {
          value: "客户类型一",
          key: "类型一"
        },
        {
          value: "客户类型二",
          key: "类型二"
        }
      ],
      newChildUserClass: [
        //子类型实体
        {
          value: "子客户类型一",
          key: "子类型一"
        },
        {
          value: "子客户类型二",
          key: "子类型二"
        }
      ],
      newUserAddress: [
        //所属地址实体
        {
          value: "所属地址一",
          key: "地址一"
        },
        {
          value: "所属地址二",
          key: "地址二"
        }
      ],
      newPersonal: [
        //归属人实体
        {
          value: "归属人一",
          key: "人1"
        },
        {
          value: "归属人二",
          key: "人2"
        }
      ],
      //点击新建弹出框客户其他信息的model绑定
      newOtherModel: {
        legalPerson: "", //公司法人
        companyAddress: "", //公司地址
        Nature: "", //经营性质
        capital: "", //注册资金
        email: "", //公司邮箱
        phone: "", //电话传真
        Range: "", //经营范围
        website: "" //公司网站
      },
      newOtherNature: [
        {
          value: "经营性质一",
          key: "性质一"
        },
        {
          value: "经营性质二",
          key: "性质二"
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
          name: "于小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "刘小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "李小虎",
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
      isShow: false,
      arr: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      editDisplay: false, //切换编辑弹出框状态
      form: {
        //详情页基本信息的绑定
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      userName: "",
      userClass: "",
      true: true,
      delBtnIsShow: false, //点击批量删除之后显示的删除和取消按钮状态
      pageNumebr: 1, //当前页码 默认为1
      arr: [], //批量删除时点击的对应项的id集合
      oneTableId: "", //单个table的对应id
      //上传文件相关
      fileList: []
    };
  },
  methods: {
    clearValue: function() {
      this.textValue = "";
      this.placeholder = "请选择";
    },
    //批量删除时点击的对应项的id
    selectionChange: function(value) {
      var that = this;
      for (var i in value) {
        that.oneTableId = value[i].name;
      }
      that.arr.push(that.oneTableId);
      console.log(that.arr);
    },
    show: function() {
      this.isShow = !this.isShow;
    },
    //点击批量操作删除选项时
    handleCommand(command) {
      // this.$message("click on item " + command);
      if (command == "a") {
        this.isShow = !this.isShow;
      }
      console.log(command);
      this.delBtnIsShow = true;
    },
    //点击批量删除后显示的删除按钮
    deleteSelectTable: function() {
      console.log(this.arr);
      //this.arr是要向后台发送的数据
    },
    //点击批量删除后显示的取消按钮(有待完善)
    cancelSelect: function() {
      this.delBtnIsShow = false;
    },
    //table查看详情
    openDetails: function(value) {
      this.$alert(
        "<div style='text-align:center'><ul><li><span>客户名称:</span><span>" +
          value.name +
          "</span></li><li><span>客户类型:</span><span>" +
          value.address +
          "</span></li><li><span>子类型:</span><span>火星</span></li><li><span>所属地址:</span><span>n国n省n市n区</span></li><li><span>归属人:</span><span>小怪兽</span></li></ul></div> ",
        "详情",
        {
          dangerouslyUseHTMLString: true
        }
      );
      console.log("应该展示的详情页ID为" + value.zip);
    },
    //table编辑对应项
    updataTbaleItem: function(value) {
      console.log(value);
      this.editDisplay = true;
    },
    //table删除对应项
    deleteTable_item: function(value) {
      console.log("应该删除的table的ID为" + value.zip);
    },
    getTableItem: function(value) {
      console.log(value);
    },
    createUser: function() {
      this.$alert(``, "详情", {
        dangerouslyUseHTMLString: true
      });
    },
    //获取每页有几条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //获取当前页页码
    handleCurrentChange(val) {
      this.pageNumebr = `${val}`;
      axios
        .get("/api/customer/adCustmoer/search?page=" + this.pageNumebr + "")
        .then(function(res) {
          cosnole.log(res);
        });
      console.log("当前页码为" + this.pageNumebr);
    },
    //获取级联下拉框选中内容
    getSelection: function(value) {
      // console.log(value);
      // let obj = {};
      // obj = this.options.find(item => {
      //   return item.value === value;
      // });
      // this.userClass = obj.label;
      console.log(value);
    },
    //查询时判断对应值是否为空
    checkUser: function() {
      if (this.userName == "" && this.userClass == "") {
        console.log("请输入您的查询");
        return false;
      }
      console.log(this.userName);
      console.log(this.userClass);
    },
    //上传文件相关
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    //新建模块基本信息客户名称input失去焦点
    nameRepetition: function() {
      // console.log(this.newUserModel);
    },
    //基本信息模块点击清空清除所有信息
    clearNewUserModel: function() {
      this.newUserModel = {
        userName: "",
        userClass: "", //客户类型
        childUserClass: "", //子类型
        userAddress: "", //所属地址
        personal: "" //归属人
      };
    },
    //基本信息模块点击保存
    getNewUserModel: function() {
      console.log(this.newUserModel);
      this.$message({
        showClose: true,
        message: "保存成功",
        type: "success"
      });
    },
    //其它信息模块点击保存
    getNewOtherModel: function() {
      console.log(this.newOtherModel);
    },
    clearNewOtherModel: function() {
      this.newOtherModel = {
        legalPerson: "", //公司法人
        companyAddress: "", //公司地址
        Nature: "", //经营性质
        capital: "", //注册资金
        email: "", //公司邮箱
        phone: "", //电话传真
        Range: "", //经营范围
        website: "" //公司网站
      };
    }
    // ?custorName=tao
  },
  beforeMount: function() {
    ///api/customer/adCustmoer/checken?custorName=tao
    // 分页 /api/customer/adCustmoer/search?page=" + this.page + "
    // axios({
    //   method: "get",
    //   url: "/api/customer/adCustmoer/search?page=涛涛"
    // })
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    // axios.get("/api/customer/adCustmoer/search?page=淘汰").then(function(res) {
    //   cosnole.log(res);
    // });
    // axios.get("/api/customer/feign/combox/{code}").then(function() {
    //   console.log(res);
    // });
    // axios({
    //   method: "get",
    //   url: "/api/customer/adCustmoer/search?page=淘汰",
    //   headers: { Charset: "UTF-8" }
    // }).then(function(res) {
    //   console.log(res);
    // });
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
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
.ctmQuery_from_userName,
.ctmQuery_from_class {
  float: left;
  height: 50px;
  line-height: 50px;
  padding: 0 20px 0 0;
}
.ctmQuery_from_userName > input,
.ctmQuery_from_class > input {
  height: 30px;
  border-radius: 3px;
  padding-left: 15px;
  border: none;
}
// .ctmQuery_from_btn {
//   width: 50px;
//   height: 30px;
//   line-height: 30px;
// }
.Message {
  width: 95%;
  height: 30px;
  line-height: 30px;
  border: 1px solid;
  margin-bottom: 20px;
  padding-left: 20px;
  border-radius: 5px;
}
</style>
