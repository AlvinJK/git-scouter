import marked from "marked";
import {
  getUserRepositories,
  getRepositoryReadme
} from "@/apis/repository.api";

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
      const repoList = response.data.map(repo => {
        const { id, name } = repo;
        return { id, name };
      });
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
    }
  },
  async fetchReadme({ commit, getters }, payload) {
    const { repo } = payload;
    try {
      commit("setFetching", true);
      commit("setActiveReadme", "");
      const username = getters.getUsername;
      const response = await getRepositoryReadme(username, repo);

      commit("setActiveReadme", marked(atob(response.data.content)));
      commit("setFetching", false);
    } catch (error) {
      commit("setFetching", false);
      if (error.response.status === 404) {
        commit("setActiveReadme", "Repository Not Found or is Private");
      } else {
        commit("setActiveReadme", "Unknown error");
      }
    }
  }
};
export default actions;
