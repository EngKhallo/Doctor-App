<script setup lang="ts">
import Button from "./components/Button.vue";
import Doctors from "./pages/Doctors.vue";
import Login from "./pages/Login.vue";

// Javascript code belongs here
let msg = "Welcome to VueJS";

</script>

<template>
<!-- This is for the HTML code -->
  <a href="/doctors" class="button mr-2">Doctors</a>
  <a href="/login" class="button">Login</a>
  <Doctors/>
  <Login/>
</template>

