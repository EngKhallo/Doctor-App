<script setup lang="ts">
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";
// Javascript code belongs here
let isMenuShown = ref(true);
const toggleMenue = () => {
  isMenuShown.value = !isMenuShown.value;
};

function hideMenu(){
  if(isMenuShown.value === true){
    return;
  }

  isMenuShown.value = true;
}
</script>

<template>
  <div v-if="isMenuShown === false"
  @click="isMenuShown = true"
  class="bg-gray-500 h-screen w-screen fixed opacity-50"></div>
  <!-- This is for the HTML code -->
  <nav class="max-w-6xl mx-auto shadow bg-gray-100 p-4 rounded">
    <div class="flex justify-between items-center px-2">
      <div class="flex space-x-8">
        <div class="logos">
          <RouterLink to="/">
            <span
              class="logo"
              >Doctors App</span
            >
          </RouterLink>
        </div>
        <ul class="hidden md:flex space-x-3 items-center">
          <li>
            <RouterLink to="#" class="nav-item"> Home </RouterLink>
          </li>
          <li>
            <RouterLink to="/doctors" class="nav-item"> Doctors </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="nav-item"> Contact </RouterLink>
          </li>
        </ul>
      </div>

      <div class="hidden md:flex spcace-x-2">
        <RouterLink to="/login" class="button hover:bg-pink-600 hover:text-white mr-2">Login</RouterLink>
        <RouterLink to="/signup" class="button btn-pink">Signup</RouterLink>
      </div>

      <div class="md:hidden menue text-gray-500" @click="toggleMenue">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
      </div>
    </div>

    <div class="bg-blue-100 w-64 transform fixed md:hidden left-0 top-0 h-screen transition flex flex-col space-y-10 items-center justify-center"
     :class="{'-translate-x-64': isMenuShown}">
    <h4 class="logo">Doctors App</h4>

    <ul class="space-y-7 w-64 text-center">
      <li>
        <routerlink to="/" class="block border-b border-blue-200 text-lg font-semibold tracking-widest py-5 px-3 hover:bg-blue-200 shadow-lg">Home</routerlink>
      </li>
      <li>
        <routerlink to="/doctors" class="block border-b border-blue-200 text-lg font-semibold tracking-widest py-5 px-3 hover:bg-blue-200 shadow-lg">Doctors</routerlink>
      </li>
      <li>
        <routerlink to="/contact" class="block border-b border-blue-200 text-lg font-semibold tracking-widest py-5 px-3 hover:bg-blue-200 shadow-lg">Contact</routerlink>
      </li>
    </ul>

    <div class="flex spcace-x-2">
        <RouterLink to="/login" class="button hover:bg-pink-600 hover:text-white mr-2">Login</RouterLink>
        <RouterLink to="/signup" class="button btn-pink">Signup</RouterLink>
      </div>
    </div>
  </nav>


  <div class="flex">
    <div>
      <img src="/img/medicine.svg" alt="">
    </div>
  </div>

  <RouterView />
</template>
