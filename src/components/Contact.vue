<template>
  <li>
    <h2>{{ friend.name }} {{ favorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <br />
    <button @click="toogleFavorite">Toggle Favorite</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
    <button @click="$emit('delete', friend.id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["friend"],
  // props: {
  //   friend: Object
  // },
  props: {
    friend: {
      type: Object,
      required: true,
      // validator: () => ({})
      // validator: function(value) {
      //   return value == something;
      // }
      default: () => ({ name: "", phone: "", email: "" }),
    },
    // TYPES SUPPORTED
    // String
    // Number
    // Boolean
    // Array
    // Object
    // Date
    // Function
    // Symbol
  },
  data: () => ({
    detailsVisible: false,
    favorite: null,
  }),
  // emits: ['toggle-favorite'],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing");
  //       return false;
  //     }
  //   },
  // },
  emits: ["toggle-favorite", "delete"],
  beforeMount() {
    this.favorite = this.friend.favorite;
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toogleFavorite() {
      if (this.favorite === "1") {
        this.favorite = "0";
      } else {
        this.favorite = "1";
      }
    },
    // toogleFavoritetwo() {
    //   this.$emit("toggle-favorite", this.friend.id);
    // },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>