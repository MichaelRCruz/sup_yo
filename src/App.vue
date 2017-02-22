<template>
  <div>
      <app-header></app-header>
      <!-- <app-card></app-card> -->
      <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import Card from './Card.vue'

    export default {
        components: {
          'app-header': Header,
          'app-footer': Footer,
          'app-card': Card
        }
    }
</script>

<style>
</style>
