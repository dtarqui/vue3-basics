<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  methods: {
    confirmInput() {
      this.$router.push("teams");
      // this.$router.back()
      // this.$router.forward();
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("UserList CMp before enter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // if this is a formularie can send a warning
    console.log("UserList CMp before leave");

    console.log(to, from);
    next(confirm("you are leaving this page, are you ok?"));
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>