import ctmQuery from "@/components/ctmManagement/ctmQuery/ctmQuery";
import materialQuery from "@/components/ctmManagement/materialQuery/materialQuery";
import materialMaintain from "@/components/ctmManagement/materialMaintain/materialMaintain"
var routes = [{
    path: "/",
    component: ctmQuery
  },
  {
    path: "/ctmManagement/ctmQuery",
    component: ctmQuery
  },
  {
    path: "/ctmManagement/materialQuery",
    component: materialQuery
  },
  {
    path: "/ctmManagement/materialMaintain",
    component: materialMaintain
  }
];
export default routes;
