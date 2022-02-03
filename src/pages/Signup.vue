<script setup lang="ts">
// Logic Here
function checkForm() {
  alert("Form handled successfully");
}
</script>

<template>
  <div class="flex md:py-16 py-10 md:px-24 px-4 md:space-x-6 rounded-lg shadow-xl">
    <div class="hidden md:block md:flex-1">
      <img src="/img/doctors.svg" alt="" />
    </div>

    <div class="form flex-1 md:px-0 px-4">
      <div class="p-8 max-w-96 bg-gray-50 shadow-lg rounded">
        <h1 class="text-4xl font-bold text-blue-500 text-center">
          Signup Form
        </h1>

        <form @submit.prevent="checkForm" class="mt-8 flex flex-col space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              class="input text-xl"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              class="input text-xl"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Your Address"
              class="input text-xl"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              class="input text-xl"
            />
          </div>

          <div class="flex justify-center">
            <button
              class="py-2 px-4 bg-indigo-500 text-white font-semibold w-64 rounded shadow flex justify-center items-center text-xl"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
