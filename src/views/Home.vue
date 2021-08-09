<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue.js Markdown Blog App" class="text-3xl" />
<!-- this parses the json file -->
<div class="grid grid-cols-2 px-6  py-3  gap-8">
  <div v-for="(section, index) in Object.keys(articles)" :key="index">
        <p class="text-xl font-semibold">{{section}}</p>

        <div v-for="article in articles[section]" :key="article.id" class="my-6 p-3 cursor-pointer  shadow-lg rounded-md bg-gray-100 hover:bg-gray-300" @click="$router.push({name:article.id})"> 
          <img src="../assets/logo.png" class="m-auto"/>
         <h3 class="text-lg font-bold"> {{article.title}}</h3>
         <p class="truncate tracking-wider p-2"> {{article.description}}</p>

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
