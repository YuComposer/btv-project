import ctmQuery from "@/components/ctmManagement/ctmQuery/ctmQuery";
import ctmMaintain from "@/components/ctmManagement/ctmMaintain/ctmMaintain";
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
    path: "/ctmManagement/ctmMaintain",
    component: ctmMaintain
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
