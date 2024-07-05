<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
   <!-- <div class="bg-[#F4A517] w-full h-20 flex items-center justify-between pr-5">
      <div class="Row flex items-center">
        <div class="bg-red-500 w-[60px] h-[60px] rounded-full flex items-center justify-center ml-5">
          <RouterLink to="/" class="text-white">
            Logo
          </RouterLink>
        </div>
  
        <ul class="flex gap-5 pl-5 items-center">
          <li>
            <RouterLink :to="`/`" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/' }">ទំព័រដើម</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/about' }">ព័ត៏មានថ្មីៗ</RouterLink>
          </li>
          <li>
            <RouterLink to="/news" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/news' }">កម្មវិធីការងារ</RouterLink>
          </li>
        </ul>
      </div>
  
      <div class="Row flex gap-5">
        <ul class="flex gap-4">
          <li class="flex items-center gap-2">
            <Icon class="size-[32px]" icon="uil:setting"/>
          </li>
          <li>
            <button class="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-2 px-4 rounded">
              <RouterLink to="/register">Register</RouterLink>
            </button>
          </li>
          <li>
            <button class="bg-gray-200 text-orange-500 hover:bg-gray-300 font-semibold py-2 px-4 rounded">
              <RouterLink to="/login">Login</RouterLink>
            </button>
          </li>
        </ul>
      </div>
    </div> -->
          
        <Header/>
        <RouterView />
       <Footer/>

</template>

<style scoped>

</style>
