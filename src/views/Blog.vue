<template>
<div class="flex flex-col items-center align-center m-6">
  <div >
    <router-link
      to="/"
      tag="a"
      class="
        bg-gray-100
        rounded-md
        p-2
        m-4
        font-bold
        left-0
        top-2.5
        hover:bg-gray-200
        fixed
      "
      >Back</router-link
    >

  </div>
      <router-view />
</div>

</template>
