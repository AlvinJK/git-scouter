import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    username: "",
    userError: "",
    isFetching: false,
    repositoryList: [],
    activeReadme: ""
  },
  getters,
  actions,
  mutations
};
