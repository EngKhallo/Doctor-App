<script setup lang="ts">
// Logic Here

function handleForm() {
  alert("handled");
}
</script>

<template>
  <div class="flex items-center md:py-16 py-10 md:px-24 px-4 md:space-x-6">
    <div class="hidden md:block md:flex-1">
      <img src="/img/doctors.svg" alt="" />
    </div>

    <div class="form flex-1 md:px-0 px-4 ">
      <div class="p-8 max-w-96 bg-gray-50 shadow-lg rounded border-2 border-indigo-400 shadow-indigo-400">
        <h1 class="text-4xl font-bold text-blue-500 text-center">Login Form</h1>

        <form @submit.prevent="handleForm" class="mt-8 flex flex-col space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              class="input"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              class="input"
            />
          </div>
          <div class="flex justify-center mt-8">
            <button
              class="py-2 px-4 bg-indigo-500 text-white font-semibold w-64 rounded shadow flex justify-center items-center text-xl"
            >
              Login
            </button>
          </div>

          <div class="register flex justify-center items-center font-semibold">
              <span>Don't Have an Account?</span> <RouterLink to="Signup" class="text-blue-500">Register Now</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>
