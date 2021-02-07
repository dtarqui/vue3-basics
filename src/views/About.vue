<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(image, index) in images" :key="index">
      <img :src="image" heigth="700px" widgth="700px" />
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      require("../assets/Animation.jpg"),
      require("../assets/Lifecycle.jpg"),
      require("../assets/Vuex_0.jpg"),
      require("../assets/Vuex_1.jpg"),
      require("../assets/Vuex_2.jpg"),
    ],
  }),
};
</script>

<style>
</style>