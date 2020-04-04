<template>
  <div class="repository-container">
    <div v-if="isFetching">Loading</div>
    <div
      v-else
      v-bind:key="repo.id"
      v-for="repo in repositoryList"
      class="repo-link-container"
    >
      <router-link :to="getRouteLink(repo.name)" class="repo-link">
        {{ repo.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RepositoryList",
  computed: {
    ...mapGetters({
      repositoryList: "repository/getRepositories",
      isFetching: "repository/getIsFetching",
      username: "repository/getUsername",
    }),
  },
  methods: {
    getRouteLink(repoName) {
      return `/readme/${this.$store.state.repository.username}/${repoName}`;
    },
  },
};
</script>

<style scoped>
.repository-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-height: 600px;
  overflow: auto;
}
.repo-link-container {
  padding: 10px;
  min-width: 200px;
  margin: 5px 0;
  color: #212121;
  border: solid 2px #303030;
}
.repo-link {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
}
.repo-link:active {
  color: #212121;
}
</style>
