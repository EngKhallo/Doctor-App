<script setup lang="ts">
import Button from "./Button.vue";

defineProps<{name: string, title: string}>();
</script>

<template>
  <div class="rounded shadow-lg p-8 mx-8 bg-gray-100">
    <slot>
    </slot>
    <div class="mt-5">
      <h1 class="text-3xl font-bold text-blue-400">{{name}}</h1>
      <span class="text-xl font-semibold">{{title}}</span>
      <div class="mt-4 items-center justify-center">
        <Button
          class="w-full text-blue-400 hover:bg-blue-400 hover:text-white"
          text="View Profile"
        />
        <Button class="w-full bg-blue-400 text-white" text="Book Now" />
      </div>
    </div>
  </div>
</template>
