<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid></knowledge-grid>
  </section>
</template>

<script>
import KnowledgeGrid from "./KnowledgeGrid.vue";
export default {
  components: {
    KnowledgeGrid,
  },
};
</script>