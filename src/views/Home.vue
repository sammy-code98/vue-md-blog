<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue.js Markdown Blog App" />
<!-- this parses the json file -->
<div class="grid grid-cols-2 px-3  py-3  gap-6">
  <div v-for="(section, index) in Object.keys(articles)" :key="index">
        <p>{{section}}</p>

        <div v-for="article in articles[section]" :key="article.id" class="my-6 shadow-lg rounded-md bg-gray-100 "> 
         <h3> {{article.title}}</h3>
         <p class="truncate"> {{article.description}}</p>

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
