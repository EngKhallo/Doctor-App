<script setup lang="ts">
import SpecialityCard from "../components/SpecialityCard.vue";
import Button from "../components/Button.vue";
const handleSearch = () => {
  console.log("Handled");
};
</script>

<template>
  <div class="flex h-screen md:py-16 py-10 md:px-24 px-4 md:space-x-6">
    <div class="hidden md:block flex-1">
      <img src="/img/medicine.svg" alt="" />
    </div>

    <div class="form flex-1 md:px-0 px-4">
      <div class="p-8 max-w-96 bg-gray-50 shadow-lg rounded-lg">
        <h1 class="text-4xl font-bold text-blue-500 text-center">
          Book Doctors
        </h1>

        <form
          @submit.prevent="handleSearch"
          class="mt-8 flex flex-col space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Location"
              class="py-2 px-4 w-full shadow rounded ring-1 focus:ring outline-none"
            />
          </div>

          <div>
            <select
              class="py-2 px-4 w-full shadow rounded ring-1 focus:ring outline-none"
            >
              <option selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <select
              class="py-2 px-4 w-full shadow rounded ring-1 focus:ring outline-none"
            >
              <option selected>Select Specialty</option>
              <option value="Neurology">Neurology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="ENT">ENT</option>
              <option value="Pediatric">Pediatric</option>
              <option value="Opthalmology">Ophthalmology</option>
              <option value="Dental">Dental</option>
            </select>
          </div>

          <div class="pt-4 flex justify-center">
            <button
              type="submit"
              class="button bg-green-500 text-white w-48 tracking-wide"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="w-full px-10 py-10">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <SpecialityCard title="Dental" :doctors="15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" />
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>

      <SpecialityCard title="ENT" :doctors="20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
          />
        </svg>
        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" />
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>

      <SpecialityCard title="Cardiology" :doctors="5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" /> 
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>

      <SpecialityCard title="Neurology" :doctors="12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          />
        </svg>
        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" />
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>
      <SpecialityCard title="Neurology" :doctors="12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          />
        </svg>
        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" />
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>
      <SpecialityCard title="Neurology" :doctors="12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          />
        </svg>
        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" />
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>
      <SpecialityCard title="Neurology" :doctors="12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          />
        </svg>
        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" />
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>
      <SpecialityCard title="Neurology" :doctors="12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
          />
        </svg>
        <!-- Explore Button start -->
        <template v-slot:bottom>
          <div class="my-5"></div>
          <Button class="bg-green-500" text="Exlore" />
        </template>
        <!-- Explore Button end -->
      </SpecialityCard>
    </div>
  </div>
</template>
