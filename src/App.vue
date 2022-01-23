<script setup lang="ts">

import Message from "./components/Message.vue";
import Button from "./components/Button.vue";
// Javascript code belongs here
let msg = "Welcome to VueJS";

</script>

<template>
<!-- This is for the HTML code -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1 class="text-5xl text-indigo-700 font-bold"> {{ msg }} </h1>
   
  <Message message="This message is defined by the Props" />
  <Button text="Register" />
</template>

