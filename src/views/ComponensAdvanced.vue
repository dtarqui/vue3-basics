<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <courser-goal>
      <template #default="slotProps">
        <h1>{{ slotProps.item }}</h1>
        <p>{{ slotProps["another-prop"] }}</p> <!-- Doesn't work :C -->
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </courser-goal>
  </div>
</template>

<script>
import TheHeader from "../components/problem-two/TheHeader.vue";
import BadgeList from "../components/problem-two/BadgeList.vue";
import UserInfo from "../components/problem-two/UserInfo.vue";
import CourserGoal from "../components/problem-two/CourserGoal.vue";
export default {
  components: { TheHeader, BadgeList, UserInfo, CourserGoal },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>