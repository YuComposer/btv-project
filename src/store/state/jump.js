export default [{
  mainRouterName: "客户管理",
  path: '/',
  redirect: '/ctmManagement/ctmQuery',
  children: [{
      path: "/ctmManagement/ctmQuery",
      menuName: "投放客户查询",
      name: "ctmQuery"
    },
    {
      path: "/ctmManagement/ctmMaintain",
      menuName: "投放客户维护",
      name: "ctmMaintain"
    },
    {
      path: "/ctmManagement/materialQuery",
      menuName: "厂商素材查询",
      name: "materialQuery"
    },
    {
      path: "/ctmManagement/materialMaintain",
      menuName: "厂商素材维护",
      name: "materialMaintain"
    }
  ]
}];
