<template>
  <button :type="nativeType" 
  :disabled="loading" 
  class="flex items-center justify-center w-full px-4 py-3 font-semibold text-white transition duration-300 ease-in-out transform rounded-lg focus:outline-none"
  :class="{
    [`btn-${type}`]: true,
    'btn-block': block,
    'btn-lg': large,
    'cursor-not-allowed bg-gray-600 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-300 ': loading,
    'bg-gray-900  hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900': !loading
  }" 
  >
  <svg v-show="loading" class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    <slot class=" transition duration-300 ease-in-out transform" />
  </button>
</template>

<script>
export default {
  name: 'UiButton',

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    nativeType: {
      type: String,
      default: 'submit'
    },

    loading: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>
