<script setup lang="ts">
import DoctorsCard from "../components/DoctorsCard.vue";
// Logic goes here
</script>

<template>
  <h1 class="text-4xl text-center text-blue-700 font-bold mt-5 mb-5">
    Doctors List
  </h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
    <DoctorsCard name="Dr.Khalid Abdi" title="Cardiology">
      <img src="../assets/doctor.jpg" class="rounded w-full" />
    </DoctorsCard>

    <DoctorsCard name="Dr.Ahmed Abdi" title="Neurology">
      <img src="../assets/img_1.jpg" class="rounded w-full" />
    </DoctorsCard>


    <DoctorsCard name="Drs.Edan Adan" title="Gynecology">
      <img src="../assets/img_2.jpg" class="rounded w-full" />
    </DoctorsCard>

    <DoctorsCard name="Drs.Edan Adan" title="Gynecology">
      <img src="../assets/img_2.jpg" class="rounded w-full" />
    </DoctorsCard>
  </div>
</template>
