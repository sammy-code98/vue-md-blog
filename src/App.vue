<template>
  <div id="app" class="bg-gray-50">
    <div id="nav" class="sticky top-0 border shadow-sm bg-gray-50">
      <span class="md:flex md:self-start md:italic text-center font-bold">Markdown-Blog</span>
      <br/>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <footer class="flex flex-row justify-center  bg-gray-900 text-white ">
      <div class="my-2">
        <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
            <p class="my-3">All rights reserved @ 2021</p>
            <p class="text-red-500 px-5">Disclaimer: Information/Data on the site is for test purpose</p>

      </div>

      
    </footer>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
