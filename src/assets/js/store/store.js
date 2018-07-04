import Vue from "vue";
import Vuex from "vuex";
import state from "@/store/state/state";

Vue.use(Vuex);

var store = new Vuex.Store({
  state
});

export default store;
