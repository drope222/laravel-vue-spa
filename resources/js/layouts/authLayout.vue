<template>
 <section class="flex flex-col items-center h-screen md:flex-row dark:bg-gray-900">
    <div class="hidden w-full h-screen bg-gray-300 lg:block md:w-1/3 xl:w-2/3 bg-login-pattern dark:bg-gray-900" 
    >
 
    </div>
    <div
      class="flex items-center justify-center w-full h-screen px-6 bg-blue-1300 md:max-w-md lg:max-w-lg md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12"
    >
<div class="flex absolute top-2 right-2 md:top-5 md:right-5">
    <theme-switcher />

</div>
      <div class="w-full h-100">
        <child />
      </div>
    </div>
  </section>
</template>

<script>
import Child from '../components/Child.vue'

export default {
  name: 'authLayout',

  components: {
    Child
  }
}
</script>
