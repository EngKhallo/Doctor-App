<script setup lang="ts">
defineProps<{title: string, doctors: number}>();
</script>


<template>
    <div
        class="bg-blue-500 text-white font-bold shadow-md rounded-lg p-8 text-center hover:shadow-lg transform hover:scale-110 transition"
      >
        <div class="flex items-center justify-center mb-2">
          <slot></slot> <!-- handles the icon and this replaces and makes a dynamic whatever inside the open and close tag-->
        </div>
        <h1 class="text-2xl">{{ title }}</h1>
        <span>{{doctors}} Doctors</span>

        <slot name="bottom"></slot>
      </div>
</template>