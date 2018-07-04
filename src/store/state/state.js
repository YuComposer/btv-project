import ctmManagementList from "@/store/state/jump.js";
import publicHeaderJump from "@/store/state/publicState/publicHeader.js"
var publicData = {
  //跳转静态资源
  ctmManagementList,
  //公用头部静态资源
  publicHeaderJump,
  parentJumpChildIndex: [{
    path: "/ctmManagement/ctmQuery",
    menuName: "投放客户查询",
    name: "ctmQuery"
  }, {
    path: "/ctmManagement/ctmMaintain",
    menuName: "投放客户维护",
    name: "ctmMaintain"
  }, {
    path: "/ctmManagement/materialQuery",
    menuName: "厂商素材查询",
    name: "materialQuery"
  }, {
    path: "/ctmManagement/materialMaintain",
    menuName: "厂商素材维护",
    name: "materialMaintain"
  }],
  name: [{
      cust_name: "于贺",
      cust_type_name: "AAAA",
      cust_type_sub_name: "AAAA_aa",
      opr_create_user: "涛涛",
      opr_belong_user: "单单",
      opr_create_time: "2018-6-28"
    },
    {
      cust_name: "于贺",
      cust_type_name: "AAAA",
      cust_type_sub_name: "AAAA_aa",
      opr_create_user: "涛涛",
      opr_belong_user: "单单",
      opr_create_time: "2018-6-28"
    },
    {
      cust_name: "于贺",
      cust_type_name: "AAAA",
      cust_type_sub_name: "AAAA_aa",
      opr_create_user: "涛涛",
      opr_belong_user: "单单",
      opr_create_time: "2018-6-28"
    },
    {
      cust_name: "于贺",
      cust_type_name: "AAAA",
      cust_type_sub_name: "AAAA_aa",
      opr_create_user: "涛涛",
      opr_belong_user: "单单",
      opr_create_time: "2018-6-28"
    },
    {
      cust_name: "于贺",
      cust_type_name: "AAAA",
      cust_type_sub_name: "AAAA_aa",
      opr_create_user: "涛涛",
      opr_belong_user: "单单",
      opr_create_time: "2018-6-28"
    },
    {
      cust_name: "于贺",
      cust_type_name: "AAAA",
      cust_type_sub_name: "AAAA_aa",
      opr_create_user: "涛涛",
      opr_belong_user: "单单",
      opr_create_time: "2018-6-28"
    },
    {
      cust_name: "于贺",
      cust_type_name: "AAAA",
      cust_type_sub_name: "AAAA_aa",
      opr_create_user: "涛涛",
      opr_belong_user: "单单",
      opr_create_time: "2018-6-28"
    }
  ]
};

export default publicData;
