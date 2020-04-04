<template>
  <div class="home">
    <UsernameTextbox />
    <RepositoryList />
  </div>
</template>

<script>
// @ is an alias to /src
import UsernameTextbox from "@/components/UsernameTextbox.vue";
import RepositoryList from "@/components/RepositoryList.vue";

export default {
  name: "Home",
  components: {
    UsernameTextbox,
    RepositoryList
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
