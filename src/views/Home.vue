<template>
  <div class="home">
    <UsernameTextbox />
    <div v-if="userError">
      {{ userError }}
    </div>
    <RepositoryList v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UsernameTextbox, RepositoryList } from "@/components";

export default {
  name: "Home",
  components: {
    UsernameTextbox,
    RepositoryList,
  },
  computed: {
    ...mapGetters({
      userError: "repository/getUserError",
    }),
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
</style>
