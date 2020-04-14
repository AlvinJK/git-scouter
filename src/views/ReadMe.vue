<template>
  <div class="container">
    <div class="readme">
      <div v-if="isFetching">Loading</div>
      <div v-else v-html="activeReadme"></div>
    </div>
    <router-link to="/" class="back-button">Back to Home</router-link>
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
    ...mapActions("repository", ["fetchReadme", "changeUsername"])
  },

  async created() {
    if (this.username !== this.$route.params.username) {
      await this.changeUsername(this.$route.params.username);
    }
    this.fetchReadme({ repo: this.$route.params.repoName });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.readme {
  max-width: 600px;
  width: 100%;
  border: solid 2px #000;
  border-radius: 1rem;
  padding: 20px;
  margin: 20px 0;
  max-height: 500px;
  overflow: auto;
}
.back-button {
  padding: 20px;
  border-radius: 1rem;
  border: solid 1px #2196f3;
  background-color: #2196f3;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
}
</style>
