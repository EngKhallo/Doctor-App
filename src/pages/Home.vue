<script setup lang="ts">
const handleSearch = () => {
  console.log("Handked");
};
</script>

<template>
  <div class="flex h-screen md:py-16 py-10 md:px-24 px:4 md:space-x-6">
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
              <option selected>Select Speciality</option>
              <option value="Neurology">Neurology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="ENT">ENT</option>
              <option value="Pediatric">Pediatric</option>
              <option value="Opthalmology">Opthalmology</option>
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
</template>
