<template>
    <div class="materialQuery">
      <!--<v-publicHeader></v-publicHeader>-->
      <el-main>
        <!--查询表单-->
        <el-form style="width:300px">
          <el-form-item>
          <el-input v-model="headerQuery" @keyup.enter.native="getHeaderQuery" placeholder="客户名称/磁带编号/磁带长度/磁带版本/品牌名称/产品名称" suffix-icon="el-icon-search"></el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" style="background:#409EFF;border:none;margin-top:-12px;margin-bottom:-12px;" @click="dialogFormVisible = true"> + 新建</el-button>
          </el-form-item>
          <el-form-item>

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

          </el-form-item>
          
        </el-form>

        <!--新建按钮 批量操作按钮-->

        <!-- 点击新建按钮弹出的 -->
  <el-dialog title="新建" :visible.sync="dialogFormVisible">
  <el-collapse accordion>
    <!-- 厂商信息 -->
    <el-collapse-item>
      <template slot="title">厂商信息 <i class="header-icon el-icon-info" style="color:#409EFF"></i>
      </template>
      <el-form :model="newVendorInfoModel" :rules="rules" ref="newVendorInfoModel" label-width="100px" class="demo-form-inline">
          <el-form-item label="厂商名称"  prop="name">
            <el-input v-model="newVendorInfoModel.name"></el-input>
          </el-form-item>
          <el-form-item label="厂商类型" prop="class">
            <el-select v-model="newVendorInfoModel.class" placeholder="请选择厂商类型">
              <el-option v-for="(item , index) in newVendorClass" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属地址" prop="address">
            <el-select v-model="newVendorInfoModel.address" placeholder="请选择所属地址">
              <el-option v-for="(item , index) in newVendorAddress" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="子类型" prop="childClass">
            <el-select v-model="newVendorInfoModel.childClass" placeholder="请选择子类型">
              <el-option v-for="(item , index) in newVendorChildClass" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="归属人" prop="Personal">
            <el-select v-model="newVendorInfoModel.Personal" placeholder="请选择归属人">
              <el-option v-for="(item , index) in newVendorPersonal" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
      </el-form>
      
    </el-collapse-item>
    <!-- 品牌信息 -->
    <el-collapse-item>
      <template slot="title">品牌信息  <i class="header-icon el-icon-info" style="color:#409EFF"></i>
      </template>
      <el-form :model="newBrandInfoModel" :rules="rules" ref="newBrandInfoModel" label-width="100px" class="demo-form-inline">
          <el-form-item label="厂商名称" prop="vendorName">
            <el-select v-model="newBrandInfoModel.vendorName" placeholder="请选择厂商类型">
              <el-option v-for="(item , index) in newVendorClass" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="品牌名称"  prop="brandName">
            <el-input v-model="newBrandInfoModel.brandName"></el-input>
          </el-form-item>
      </el-form>
    </el-collapse-item>
    <!-- 产品信息 -->
    <el-collapse-item>
      <template slot="title">产品信息  <i class="header-icon el-icon-info" style="color:#409EFF"></i>
      </template>

      <el-form :model="productInfoModel" :rules="rules" ref="productInfoModel" label-width="100px" class="demo-form-inline">
          <el-form-item label="厂商名称" prop="productVendorName">
            <el-select v-model="productInfoModel.vendorName" placeholder="请选择厂商名称">
              <el-option v-for="(item , index) in newProductVendorName" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="品牌名称" prop="productBrandName">
            <el-select v-model="newBrandInfoModel.brandName" placeholder="请选择厂商类型">
              <el-option v-for="(item , index) in newProductBrandName" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品名称"  prop="brandName">
            <el-input v-model="newBrandInfoModel.productName"></el-input>
          </el-form-item>
          <el-form-item label="产品类别" prop="productClass">
            <el-select v-model="newBrandInfoModel.productClass" placeholder="请选择厂商类型">
              <el-option v-for="(item , index) in newProductClass" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属行业">
            <el-select v-model="newBrandInfoModel.industry" placeholder="请选择厂商类型">
              <el-option v-for="(item , index) in newProductIndustry" :key="index" :label="item.value" :value="item.key"></el-option>
            </el-select>
          </el-form-item>
      </el-form>
        
    </el-collapse-item>
    <el-collapse-item>
      <template slot="title">素材信息  <i class="header-icon el-icon-info" style="color:#409EFF"></i>
      </template>

      <el-form :model="newSourceMaterialModel" :rules="rules" ref="newSourceMaterialModel" label-width="100px" class="demo-form-inline">
        <el-col :span="12">
          <el-form-item label="厂商名称" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌名称" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        </el-col>
        
        <el-col :span="12">
          <el-form-item label="产品名称" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="素材名称" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        </el-col>
        
        <el-col :span="12">
          <el-form-item label="素材编号" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="素材长度" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        </el-col>
        
        <el-col :span="12">
          <el-form-item label="素材版本" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="清晰度" label-width="100px">
          <el-select>
            <el-option></el-option>
          </el-select>
        </el-form-item>
        </el-col>
        
        <el-col :span="12">
          <el-form-item label="包含客户数量" label-width="100px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="厂商内部编号" label-width="100px">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        
      </el-form>
        
    </el-collapse-item>
  </el-collapse>

    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>

        <!--table选择总数-->
        <!-- <div class="totalNumber">
          <div class="totalNumberOption">
            <p class="totalNumberP">已选择{{maxNum}}项</p>
          </div>
        </div> -->

        <el-table :data="tableData" :stripe="stripe" style="width:100%;"
        @selection-change="selectionChange">
          <el-table-column type="selection" v-if="isShow" @click="getTableItem(scope.row)"></el-table-column>
          <el-table-column fixed prop="name" label="厂商名称" width="auto"></el-table-column>
          <el-table-column prop="number" label="素材编号" width="120"></el-table-column>
          <el-table-column prop="edition" label="素材版本" width="auto"></el-table-column>
          <el-table-column prop="change" label="素材长度" width="auto"></el-table-column>
          <el-table-column prop="brand_name" label="品牌名称" width="auto"></el-table-column>
          <el-table-column prop="product_name" label="产品名称" width="auto"></el-table-column>
          <el-table-column prop="salesman" label="归属业务员" width="120"></el-table-column>
          <el-table-column prop="Date_of" label="录入日期" width="120"></el-table-column>
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

        <!-- 点击编辑按钮的弹出框 -->
  <el-dialog title="编辑" :visible.sync="editDisplay">
  <el-form>
      <el-form-item label="厂商名称" label-width="100px">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="厂商类型" label-width="100px">
        <el-select v-model="editVendorModel.VendorType" placeholder="请选择活动区域">
          <el-option v-for="(item,index) in editVendorType" :key="index"  :label="item.value" :value="item.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属地址" label-width="100px">
        <el-select v-model="editVendorModel.address"  placeholder="请选择所属地址">
          <el-option v-for="(item,index) in editAddress" :key="index" :label="item.value" value="item.key"></el-option>
        </el-select>
      </el-form-item>
        <el-form-item label="子类型" label-width="100px">
        <el-select v-model="editVendorModel.childType"  placeholder="请选择子类型">
          <el-option v-for="(item,index) in editChildType" :key="index" :label="item.value" :value="item.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="归属人" label-width="100px">
        <el-select v-model="editVendorModel.Personal" placeholder="请选择归属人">
          <el-option v-for="(item,index) in aditPersonal" :key="index" :label="item.value" :value="item.key"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="editDisplay = false">取 消</el-button>
    <el-button type="primary" @click="saveVendorInfo">确 定</el-button>
  </div>
</el-dialog>

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
  name: "materialQuery",
  data() {
    return {
      //表单验证规则
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        class: [
          { required: true, message: "请选择厂商类型", trigger: "change" }
        ],
        address: [
          { required: true, message: "请选择所属地址", trigger: "change" }
        ],
        childClass: [
          { required: true, message: "请选择子类型", trigger: "change" }
        ],
        Personal: [
          { required: true, message: "请选择归属人", trigger: "change" }
        ],
        vendorName: [
          { required: true, message: "请选择厂商名称", trigger: "change" }
        ],
        brandName: [
          { required: true, message: "请输入品牌名称", trigger: "blur" }
        ],
        productVendorName: [
          { required: true, message: "请选择厂商名称", trigger: "change" }
        ],
        productBrandName: [
          { required: true, message: "请选择品牌名称", trigger: "change" }
        ],
        productClass: [
          { required: true, message: "请输入产品类别", trigger: "change" }
        ]
      },
      //新建->厂商信息绑定的model
      newVendorInfoModel: {
        name: "",
        class: "",
        address: "",
        childClass: "",
        Personal: ""
      },
      //新建->品牌信息绑定的model
      newBrandInfoModel: {
        vendorName: "",
        brandName: ""
      },
      //新建->产品信息绑定的model
      productInfoModel: {
        vendorName: "",
        brandName: "",
        productName: "",
        productClass: "",
        industry: "" //所属行业
      },
      //新建->素材信息绑定的model
      newSourceMaterialModel: {
        vendorName: "",
        productName: "",
        brandName: "",
        sourceMaterialName: "",
        sourceMaterialNumber: "",
        sourceMaterialEdition: "",
        sourceMaterialLen: "",
        definition: "", //清晰度
        userNumber: "", //包含客户数量
        vendorNumber: "" //厂商编号
      },
      //table列表
      tableData: [
        {
          name: "联合利华股份有限公司",
          number: 89781,
          edition: "LH292BSD",
          change: "15秒",
          brand_name: "力士",
          product_name: "力士护发",
          salesman: "李佳",
          Date_of: "2016-05-03"
        },
        {
          name: "联合利华股份有限公司",
          number: 89781,
          edition: "LH292BSD",
          change: "15秒",
          brand_name: "力士",
          product_name: "力士护发",
          salesman: "李佳",
          Date_of: "2016-05-03"
        },
        {
          name: "联合利华股份有限公司",
          number: 89781,
          edition: "LH292BSD",
          change: "15秒",
          brand_name: "力士",
          product_name: "力士护发",
          salesman: "李佳",
          Date_of: "2016-05-03"
        },
        {
          name: "联合利华股份有限公司",
          number: 89781,
          edition: "LH292BSD",
          change: "15秒",
          brand_name: "力士",
          product_name: "力士护发",
          salesman: "李佳",
          Date_of: "2016-05-03"
        }
      ],
      //新建->厂商信息->厂商类型
      newVendorClass: [
        {
          value: "厂商类型一",
          key: "类型一"
        },
        {
          value: "厂商类型二",
          key: "类型二"
        }
      ],
      //新建->厂商信息->所属地址
      newVendorAddress: [
        {
          value: "所属地址一",
          key: "所属地址一"
        },
        {
          value: "所属地址二",
          key: "所属地址二"
        }
      ],
      //新建->厂商信息->子类型
      newVendorChildClass: [
        {
          value: "子类型一",
          key: "类型一"
        },
        {
          value: "子类型二",
          key: "类型二"
        }
      ],
      //新建->厂商信息->归属人
      newVendorPersonal: [
        {
          value: "归属人一",
          key: "人一"
        },
        {
          value: "归属人二",
          key: "人二"
        }
      ],
      //新建->品牌信息->厂商名称
      newBrandInfoVendorName: [
        {
          value: "厂商名称一",
          key: "名称一"
        },
        {
          value: "厂商名称二",
          key: "名称二"
        }
      ],
      //新建->产品信息->厂商名称
      newProductVendorName: [
        {
          value: "厂商名称一",
          key: "名称一"
        },
        {
          value: "厂商名称二",
          key: "名称二"
        }
      ],
      //新建->产品信息->品牌名称
      newProductBrandName: [
        {
          value: "品牌名称一",
          key: "名称一"
        },
        {
          value: "品牌名称二",
          key: "名称二"
        }
      ],
      //新建->产品信息->产品类别
      newProductClass: [
        {
          value: "产品类别一",
          key: "类别一"
        },
        {
          value: "产品类别二",
          key: "类别二"
        }
      ],
      //新建->产品信息->所属行业
      newProductIndustry: [
        {
          value: "所属行业一",
          key: "行业一"
        },
        {
          value: "所属行业二",
          key: "行业二"
        }
      ],
      //新建->素材信息->厂商名称
      newSourceMaterialVendorName: [
        {
          value: "厂商名称一",
          key: "名称一"
        },
        {
          value: "厂商名称二",
          key: "名称二"
        }
      ],
      //新建->素材信息->品牌名称
      newSourceMaterialBrandName: [
        {
          value: "品牌名称一",
          key: "名称一"
        },
        {
          value: "品牌名称二",
          key: "名称二"
        }
      ],
      //新建->素材信息->产品名称
      newSourceMaterialProductName: [
        {
          value: "产品名称一",
          key: "名称一"
        },
        {
          value: "产品名称二",
          key: "名称二"
        }
      ],
      //新建->素材信息->素材分类
      newSourceMaterialClass: [
        {
          value: "素材分类一",
          key: "分类一"
        },
        {
          value: "素材分类二",
          key: "分类二"
        }
      ],
      //新建->素材编号->素材编号
      newSourceMaterialNumber: [
        {
          value: "素材编号一",
          key: "编号一"
        },
        {
          value: "素材编号二",
          key: "编号二"
        }
      ],
      //新建->素材信息->素材长度
      newSourceMaterialLen: [
        {
          value: "素材长度一",
          key: "长度二"
        },
        {
          valuer: "素材长度二",
          key: "长度二"
        }
      ],
      //新建->素材信息->素材版本
      newSourceMaterialEdition: [
        {
          value: "素材版本一",
          key: "版本一"
        },
        {
          value: "素材版本二",
          key: "版本二"
        }
      ],
      //新建->素材信息->清晰度
      newSourceMaterialDefinition: [
        {
          value: "清晰度一",
          key: "度一"
        },
        {
          value: "清晰度二",
          key: "度二"
        }
      ],
      //新建->素材信息->客户数量
      newSourceMaterialUserNumert: [
        {
          value: "客户数量一",
          key: "数量以"
        },
        {
          value: "客户数量二",
          key: "数量二"
        }
      ],
      //新建->素材信息->内部编号
      newSourceMaterialVendorNumber: [
        {
          value: "内部编号一",
          key: "编号一"
        },
        {
          value: "内部编号二",
          key: "编号二"
        }
      ],
      //编辑厂商绑定的model
      editVendorModel: {
        VendorType: "",
        address: "",
        childType: "",
        Personal: ""
      },
      //编辑厂商类型
      editVendorType: [
        {
          value: "厂商类型一",
          key: "类型一"
        },
        {
          value: "厂商类型二",
          key: "类型二"
        }
      ],
      //编辑厂商所属地址
      editAddress: [
        {
          value: "所属地址一",
          key: "地址一"
        },
        {
          value: "所属地址二",
          key: "地址二"
        }
      ],
      //编辑子类型
      editChildType: [
        {
          value: "子类型一",
          key: "类型一"
        },
        {
          value: "子类型二",
          key: "类型二"
        }
      ],
      //编辑所属人
      aditPersonal: [
        {
          value: "所属人一",
          key: "人一"
        },
        {
          value: "所属人二",
          key: "人二"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      isSelection: "",
      maxNum: 0,
      isShow: false,
      stripe: true,
      dialogFormVisible: false,
      formInline: {
        user: "",
        region: ""
      },
      editDisplay: false, //切换编辑弹出框状态
      headerQuery: ""
    };
  },
  methods: {
    selectionChange: function(index) {
      for (var i = 0; i < index.length; i++) {
        this.maxNum = i + 1;
      }
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
    getTableItem: function(value) {
      console.log(value);
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
      // console.log("应该展示的详情页ID为" + value.zip);
    },
    //table编辑对应项
    updataTbaleItem: function(value) {
      console.log(value);
      this.editDisplay = true;
    },
    //点击table编辑时触发
    saveVendorInfo: function() {
      console.log(this.editVendorModel);
      var editVendorModel = this.editVendorModel;
      if (
        editVendorModel.VendorType == "" ||
        editVendorModel.address == "" ||
        editVendorModel.childType == "" ||
        editVendorModel.Personal == ""
      ) {
        console.log("请补全必填项");
      } else {
        console.log(editVendorModel);
        console.log("保存成功");
        // this.editDisplay = false;
      }
    },
    //点击table删除按钮时触发的
    deleteTable_item: function(value) {
      console.log(value.change);
    },
    //获取每页有几条
    handleSizeChange(val) {
      axios({
        method: "POST",
        url: "/api/customer/adMaterial/getAdMaterialByRequires",
        params: {
          page: `${val}`
        }
      }).then(function(res) {
        console.log(res);
      });
      console.log("每页分几条接口测试成功");
    },
    //获取当前页页码
    handleCurrentChange(val) {
      // this.pageNumebr = `${val}`;
      axios({
        method: "POST",
        url: "/api/customer/adMaterial/getAdMaterialByRequires",
        params: {
          page: `${val}`
        }
      }).then(function(res) {
        console.log(res);
      });
      console.log("分页接口测试成功");
    },
    //回车后获取模糊查询中的内容
    getHeaderQuery: function() {
      console.log(this.headerQuery);
      var _this = this;
      axios({
        method: "POST",
        url: "/api/customer/adMaterial/getAdMaterialByRequires",
        params: {
          brandCustName: _this.headerQuery
        }
      }).then(function(res) {
        console.log(res);
      });
      console.log("模糊查询接口测试成功");
    }
  },
  components: {
    "v-publicHeader": publicHeader
  }
};
</script>
<style lang="scss" scoped>
.materialQuery {
  width: 100%;
}
div.from_max,
.textOne,
.icon_one,
.input_Tow {
  // position: relative;
  display: inline-block;
}
div.icon_one {
  width: 39px;
  height: 36px;
  // background: yellow;
  line-height: 36px;
  padding: 0px;
  margin-left: -8px;
}
div.icon_one > i {
  display: inline-block;
  width: 39px;
  height: 36px;
  background: #fff;
  line-height: 30px;
  font-size: 20px;
  color: #409eff;
  text-align: center;
}
input.input_one,
.input_Tow {
  border-radius: 5%;
  border: none;
  width: 248px;
  height: 34px;
  line-height: 34px;
}
.block {
  text-align: right;
  padding: 15px 20px 0 0;
}
* {
  font-size: 14px;
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
  // position: relative;
  line-height: 5px;
  // margin-bottom: 5px;
}
// .totalNumberOption {
//   width: 100%;
//   height: 100%;
//   background: #409eff;
//   // z-index: -1;
// }
.totalNumberP {
  padding-left: 20px;
}
</style>