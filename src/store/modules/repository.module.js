import marked from "marked";
import {
  getUserRepositories,
  getRepositoryReadme,
} from "@/apis/repository.api";

const state = {
  username: "alvinJK",
  isFetching: false,
  repositoryList: [],
  activeReadme: "",
};

const getters = {
  getUsername(state) {
    return state.username;
  },
  getRepositories(state) {
    return state.repositoryList;
  },
  getActiveReadme(state) {
    return state.activeReadme;
  },
  getIsFetching(state) {
    return state.isFetching;
  },
};

const actions = {
  async changeUsername({ commit }, payload) {
    commit("setUsername", payload);
  },
  async fetchRepositories({ commit, getters }) {
    try {
      commit("setRepositories", []);
      commit("setFetching", true);
      const response = await getUserRepositories(getters.getUsername);
      console.log(response);
      const repoList = response.data.map((repo) => {
        const { id, name } = repo;
        return { id, name };
      });
      console.log(repoList);
      commit("setFetching", false);
      commit("setRepositories", repoList);
    } catch (error) {
      // handle the error here
      commit("setFetching", false);
      console.log(error);
    }
  },
  async fetchReadme({ commit, getters }, payload) {
    const { repo } = payload;
    try {
      commit("setFetching", false);
      commit("setActiveReadme", "");
      const username = getters.getUsername;
      const response = await getRepositoryReadme(username, repo);
      console.log(response.data);
      // response.data.encoding
      commit("setActiveReadme", marked(atob(response.data.content)));
      commit("setFetching", false);
    } catch (error) {
      // handle the error here
      commit("setFetching", false);
      console.log(error);
    }
  },
};

const mutations = {
  setUsername(state, newName) {
    state.username = newName;
  },
  setRepositories(state, repos) {
    state.repositoryList = repos;
  },
  setActiveReadme(state, readme) {
    state.activeReadme = readme;
  },
  setFetching(state, status) {
    state.isFetching = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
