<template>
  <card :title="$t('home')">
    {{ $t('you_are_logged_in') }}
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
  }
}
</script>
