<template>
  <section
    class="flex h-screen dark:bg-gray-900"
  >
    <div
      class="hidden w-full h-full lg:block md:w-2/3 xl:w-2/3 dark:bg-gray-900"
    >
      <div
        class="fixed bg-login-pattern w-full h-full bg-gray-300 dark:bg-gray-900"
      ></div>
    </div>
    <div
      class=" flex flex-col mx-auto w-full  h-screen md:max-w-md lg:max-w-full md:w-2/3 xl:w-1/3 bg-white z-10 dark:bg-gray-900"
    >
      <div class="block w-100 text-right mt-3 mr-3 md:mt-5 md:mr-5">
        <theme-switcher />
      </div>

      <div
        class="mx-auto my-auto w-full px-6 md:w-10/12 lg:w-8/12 xl:w-9/12 2xl:w-8/12 bg-white z-10 dark:bg-gray-900"
      >
        <div class="w-full ">
          <child />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Child from "../components/Child.vue";

export default {
  name: "authLayout",

  components: {
    Child,
  },
};
</script>
