<template>
  <card :title="$t('home')" class="dark:text-gray-300">
    {{ $t('you_are_logged_in') }}
      <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
              
                {{ $t('logout') }}
              </a>
  </card>

  
</template>

<script>
export default {
  beforeRouteEnter(to, from, next){
    setTimeout(() => {
        next();
    }, 1500);
  },
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('home') }
  },
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
