<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import Navbar from "./components/navbar.vue";
// Javascript code belongs here
const handleSearch = () => {
  console.log("Handled");
};
</script>

<template>
  <Navbar />

  <RouterView />

  <!-- <footer class="bg-blue-700 p-8 text-white">
    <div class="footer_top flex flex-row border-b-2 pb-5">
      <div class="flex-1 flex flex-col">
        <h1 class="text-4xl font-bold mb-5">Doctor App</h1>
        <p class="text-white font-medium text-lg">
          This App allows patients to make appointments online with every doctor
          available in the Hospital.
        </p>

        <div class="icons flex mt-5 space-x-4">
          <img src="/img/facebook.svg" alt="" class="w-12">
          <img src="/img/whatsapp.svg" alt="" class="w-12">
          <img src="/img/github.svg" alt="" class="w-12">
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <h1 class="text-xl font-bold">For Patients</h1>
        
        <ul>
          <li>Search for Doctor</li>
          <li>Login</li>
          <li>Register</li>
          <li>Booking</li>
          <li>Patient Dashboard</li>
        </ul>
      </div>
      <div class="flex-1 flex flex-col">
        <h1 class="text-4xl font-bold">For Doctors</h1>
        <p class="text-white font-semibold text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="flex-1 flex flex-col">
        <h1 class="text-4xl font-bold">Contact Us</h1>
        <p class="text-white font-semibold text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div class="footer_bottom"></div>
  </footer> -->
</template>
