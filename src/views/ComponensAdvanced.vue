<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    |
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- Not Vue -->
    <!-- <manage-goals v-if="selectedCom === 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedCom === 'active-goals'"></active-goals> -->
    <!--  -->

    <keep-alive>
      <component :is="selectedCom"></component>
    </keep-alive>
    <hr />
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <courser-goal>
      <template #default="slotProps">
        <h1>{{ slotProps.item }}</h1>
        <p>{{ slotProps["another-prop"] }}</p>
        <!-- Doesn't work :C -->
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
import ManageGoals from "../components/problem-two/ManageGoals.vue";
import ActiveGoals from "../components/problem-two/ActiveGoals.vue";
export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourserGoal,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedCom: "manage-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedCom = cmp;
    },
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