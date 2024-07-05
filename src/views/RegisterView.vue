<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// Vuex store
const store = useStore();
const router = useRouter();

// Form state
const fullName = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');

// Error state
const errors = ref({
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
});

// Validate form
const validateForm = () => {
  errors.value.fullName = !fullName.value ? 'Full Name is required' : '';
  errors.value.email = !email.value ? 'E-mail is required' : '';
  errors.value.phone = !phone.value ? 'Phone is required' : '';
  errors.value.password = !password.value ? 'Password is required' : '';
  errors.value.confirmPassword = password.value !== confirmPassword.value ? 'Passwords do not match' : '';
  
  return !Object.values(errors.value).some(error => error !== '');
};

// Handle register
const handleRegister = () => {
  if (validateForm()) {
    const userProfile = { name: fullName.value, email: email.value, phone: phone.value };
    // Simulate register action by dispatching to Vuex store
    store.dispatch('register', userProfile); // Replace with actual action name in your Vuex store
    router.push('/'); // Redirect to home page or dashboard after successful registration
  }
};
</script>

<template>
  <div class="max-w-md mx-auto mt-10 bg-[#EBEBEB] shadow-md rounded-lg p-6 mb-20">
    <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
    <form @submit.prevent="handleRegister">
      <div class="mb-4">
        <label class="block text-gray-700">Full Name</label>
        <input v-model="fullName" type="text" class="w-full px-3 py-2 border rounded" />
        <p v-if="errors.fullName" class="text-red-500 text-sm">{{ errors.fullName }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">E-mail</label>
        <input v-model="email" type="email" class="w-full px-3 py-2 border rounded" />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Phone</label>
        <input v-model="phone" type="tel" class="w-full px-3 py-2 border rounded" />
        <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Password</label>
        <input v-model="password" type="password" class="w-full px-3 py-2 border rounded" />
        <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Confirm Password</label>
        <input v-model="confirmPassword" type="password" class="w-full px-3 py-2 border rounded" />
        <p v-if="errors.confirmPassword" class="text-red-500 text-sm">{{ errors.confirmPassword }}</p>
      </div>
      <div class="flex justify-center mb-12">
        <button type="submit" class="w-full bg-[#F4A517] text-white font-semibold py-2 px-4 rounded-sm hover:bg-[#e4ac42]">Register</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Add any necessary styles here */
</style>
