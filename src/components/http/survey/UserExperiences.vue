<template>
  <section>
    <bas-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <ul v-else-if="!isLoading && results && results.length">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </bas-card>
  </section>
</template>

<script>
import BasCard from "../UI/BasCard.vue";

import SurveyResult from "./SurveyResult.vue";

export default {
  data: () => ({
    results: [],
    isLoading: false,
    error: null,
  }),
  components: {
    SurveyResult,
    BasCard,
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch("https://vue-http-fulano.firebaseio.com/surveys.json")
        .then((response) => {
          // console.log(response);
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          // console.log(data);
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = "Failed to fetch data - please try again later";
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>