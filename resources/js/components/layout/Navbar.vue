<template>
  <div class="ml-0 transition md:ml-64 ">
      <header
        class="flex items-center justify-between w-full px-6 bg-white border-b h-16 dark:bg-gray-900 dark:border-gray-800"
      >
        <button
          class="block btn btn-light md:hidden dark:text-gray-300"
          @click.stop="$emit('sidebar-toggle')"
        >
          <span class="sr-only">Menu</span>
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="hidden -ml-3 re md:block w-96 ">
          
          <!-- <svg
          class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg> -->
          <input
            class="border-0 inline-block dark:bg-gray-900 dark:text-gray-300"
            placeholder="Search for articles..."
          />
        </div>
        <div class="flex items-center">
          <a href="#" class="flex text-gray-500">
            <svg
              class="flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              />
            </svg>
          </a>
          <div class="ml-4">
           <theme-switcher />

          </div>
          <a href="#" class="ml-4 avatar avatar-sm">
 <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
          </a>
        </div>
      </header>
     
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
// import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    // LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>

</style>