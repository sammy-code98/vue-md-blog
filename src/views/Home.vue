<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue.js Markdown Blog App" />
<!-- this parses the json file -->
<div>
  <div v-for="(section, index) in Object.keys(articles)" :key="index">
        <p>{{section}}</p>

        <div v-for="article in articles[section]" :key="article.id" class="p-4 m-auto rounded-md bg-gray-100 border border-red-500 w-full h-52"> 
         <h3> {{article.title}}</h3>
         <p> {{article.description}}</p>

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
