<template>
  <div>
      <app-header></app-header>
      <app-footer class="footer"></app-footer>
      <div class="yo"></div>
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

<style scoped>
  .yo {
    height: 100px;
    width: 100px;
    background-color: red;
  }
</style>
