import marked from "marked";
import {
  getUserRepositories,
  getRepositoryReadme,
} from "@/apis/repository.api";

const state = {
  username: "",
  userError: "",
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
  getUserError(state) {
    return state.userError;
  },
};

const actions = {
  async changeUsername({ commit }, payload) {
    commit("setUsername", payload);
  },
  async fetchRepositories({ commit, getters }) {
    try {
      commit("setRepositories", []);
      commit("setUserError", "");
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
      if (error.response.status === 404) {
        commit("setUserError", "User Not Found");
      } else {
        commit("setUserError", "Unknown error");
      }
      console.log(error);
    }
  },
  async fetchReadme({ commit, getters }, payload) {
    const { repo } = payload;
    try {
      commit("setFetching", true);
      commit("setActiveReadme", "");
      const username = getters.getUsername;
      const response = await getRepositoryReadme(username, repo);
      console.log(response.data);

      commit("setActiveReadme", marked(atob(response.data.content)));
      commit("setFetching", false);
    } catch (error) {
      commit("setFetching", false);
      if (error.response.status === 404) {
        commit("setActiveReadme", "Repository Not Found or is Private");
      } else {
        commit("setActiveReadme", "Unknown error");
      }
      console.log(error);
    }
  },
};

const mutations = {
  setUsername(state, newName) {
    state.username = newName;
  },
  setUserError(state, errorMessage) {
    state.userError = errorMessage;
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
