<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
<!-- this parses the json file -->
<div>
  <div v-for="(section, index) in Object.keys(articles)" :key="index">
        <p>{{section}}</p>

        <div v-for="article in articles[section]" :key="article.id"> 
          {{article.title}}
          {{article.description}}

        </div>


  </div>
     
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Posts from "@/statics/data/posts.json"

export default {
  name: "Home",
  components: {
    HelloWorld,
    
  },
  computed:{
    articles(){
      return Posts
    }
  }
};
</script>
