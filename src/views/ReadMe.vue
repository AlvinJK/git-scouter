<template>
  <div class="container">
    <div class="readme">
      <div v-if="isFetching">
        Loading
      </div>
      <div v-else v-html="activeReadme"></div>
    </div>
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
      isFetching: "repository/getIsFetching",
    }),
  },
  methods: {
    // fetchRepositories() {
    //   console.log("fetch repo init");
    //   this.$store.dispatch("repository/fetchRepositories");
    // },
    ...mapActions("repository", ["fetchReadme", "changeUsername"]),
  },

  async created() {
    console.log(this.username, this.$route.params.username);
    if (this.username !== this.$route.params.username) {
      await this.changeUsername(this.$route.params.username);
    }
    console.log("fetch!!!");
    this.fetchReadme({ repo: this.$route.params.repoName });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
.readme {
  max-width: 600px;
  width: 100%;
  border: solid 2px #000;
  border-radius: 1rem;
}
</style>
