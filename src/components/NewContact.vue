<template>
  <div>
    <form @submit.prevent="submitData" id="form1">
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" v-model="phone" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <button type="submit" form="form1">Add contact</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-contact"],
  data: () => ({
    name: "",
    phone: "",
    email: "",
  }),
  methods: {
    submitData() {
      this.$emit("add-contact", this.name, this.phone, this.email);
    },
  },
};
</script>

<style scoped>
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app form div {
  margin: 1rem 0;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
</style>