<template>
  <div class="repository-container">
    <div v-if="isFetching">Loading</div>
    <div v-else v-bind:key="repo.id" v-for="repo in repositoryList">
      <span>{{ repo.name }}</span>
      <router-link :to="getRouteLink(repo.name)">Link</router-link>|
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
      username: "repository/getUsername"
    })
  },
  methods: {
    getRouteLink(repoName) {
      return `/readme/${this.$store.state.repository.username}/${repoName}`;
    }
  }
};
</script>

<style scoped>
.repository-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
