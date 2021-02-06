<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/events">Events</router-link> |
    <router-link to="/styling">Styling</router-link> |
    <router-link to="/conditionals">Conditionals</router-link> |
    <router-link to="/game">Game</router-link> |
    <router-link to="/scenes">DOM VueJs</router-link>
    <br /><br />
    <router-link to="/components">Components</router-link> |
    <router-link to="/provide">Provide and Inject</router-link> |
    <router-link to="/comp-adv">Components Advanced</router-link> |
    <router-link to="/project-one">Project One</router-link>
    <br /><br />
    <router-link to="/forms">Forms</router-link> |
    <router-link to="/http-request">Http-Request</router-link> |
    <router-link to="/routing/teams">Routing</router-link> |
    <router-link to="/animation">Animation</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <hr />
  <router-view />
  <hr />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
