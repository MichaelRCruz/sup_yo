<template>
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'

    export default {
        components: {
          'app-header': Header,
          'app-footer': Footer
        }
    }
</script>

<style>
  app-footer {
    bottom: 0px;
  }
</style>
