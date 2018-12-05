<template lang="pug">
  .home
    Header
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style lang="sass" scoped>
  .home
    min-height: 100vh
    background: url('../assets/img/keyBg.jpg') center center no-repeat
    background-size: cover
    background-attachment: fixed
</style>
