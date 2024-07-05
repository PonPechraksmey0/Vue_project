<template>
    <div class="max-w-md mx-auto mt-20">
    
      <form @submit.prevent="login" class="bg-[#EBEBEB] shadow-md rounded-lg px-8 pt-6 pb-8 mb-20">
        <h1 class="text-3xl font-bold mb-5">Login</h1>
        <div class="mb-4">
          <label for="username" class="block text-gray-700 font-semibold">Username</label>
          <input type="text" id="username" v-model="username" placeholder="Enter your username" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-semibold">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        </div>
        <button type="submit" class="w-full bg-[#F4A517] text-white font-semibold py-2 px-4 rounded hover:bg-[#e4ac42]">Login</button>
        <p class="text-center text-sm text-gray-600 mt-10 mb-32">Don't have an account? <RouterLink to="/register" class="text-indigo-600 hover:underline">Register</RouterLink></p>  
    </form>
    
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  
  const router = useRouter();
  
  const login = () => {
    // Here you would typically implement your login logic
    // For demonstration purposes, assume login is successful
    if (username.value === 'demo' && password.value === 'password') {
      // Redirect to home page or dashboard after successful login
      router.push('/');
    } else {
      alert('Invalid username or password');
      // Clear username and password fields on unsuccessful login
      username.value = '';
      password.value = '';
    }
  };
  </script>
  
  <style scoped>
  /* Adjusted width and height */
  .max-w-md {
    width: 400px; /* Adjust width as needed */
  }
  
  /* You can adjust the height if necessary */
  .h-auto {
    height: auto;
  }
  </style>
  