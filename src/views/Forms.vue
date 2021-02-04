<template>
  <div id="main">
    <br />
    <the-form></the-form>
    <br />
  </div>
</template>

<script>
import TheForm from "../components/formularies/TheForm.vue";

export default {
  components: {
    TheForm,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

#main {
  margin: 0;
  background-color: #292929;
}
</style>