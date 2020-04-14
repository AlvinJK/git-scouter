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
  }
};

export default getters;
