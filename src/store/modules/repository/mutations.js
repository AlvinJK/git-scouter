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
  }
};

export default mutations;
