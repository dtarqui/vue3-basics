<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="... other prop ..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    goals: ["Finish the courser", "Learn vue"],
  }),
};
</script>

<style>
</style>