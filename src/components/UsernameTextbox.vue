<template>
  <div class="username-container">
    <span class="username-label">Input github username below</span>
    <span class="small-note-text">*Only works for public repos</span>
    <input type="text" class="username-text-input" v-model="username" @input="this.initFetchRepo" />
  </div>
</template>

<script>
import { debounce } from "lodash";
import { mapActions } from "vuex";
export default {
  name: "UsernameTextbox",
  computed: {
    username: {
      get() {
        return this.getUsername();
      },
      set(value) {
        this.changeUsername(value);
      }
    }
  },
  methods: {
    ...mapActions("repository", [
      "fetchRepositories",
      "getUsername",
      "changeUsername"
    ]),
    initFetchRepo: debounce(function fetchRepo() {
      this.fetchRepositories();
    }, 300)
  }
};
</script>

<style scoped>
.username-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.username-label {
  padding: 10px 0 0;
  font-size: 18px;
  font-weight: 500;
}
.small-note-text {
  font-size: 8px;
  font-weight: 300;
  margin-bottom: 10px;
}
.username-text-input {
  padding: 10px;
  width: 200px;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
