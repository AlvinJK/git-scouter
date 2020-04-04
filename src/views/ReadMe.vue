<template>
  <div class="about">
    <h1>This is {{ $route.params.username }}'s repo: {{ $route.params.repoName }}</h1>
    <p>{{ activeReadme }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ReadMe",
  computed: {
    ...mapGetters({
      username: "repository/getUsername",
      activeReadme: "repository/getActiveReadme",
      isFetching: "repository/getIsFetching"
    })
  },
  methods: {
    // fetchRepositories() {
    //   console.log("fetch repo init");
    //   this.$store.dispatch("repository/fetchRepositories");
    // },
    ...mapActions("repository", ["fetchReadme", "changeUsername"])
  },

  created() {
    if (this.username !== this.$route.params.username) {
      this.changeUsername(this.$route.params.username);
    }
    this.fetchReadme({ repo: this.$route.params.repoName });
  }
};
</script>
