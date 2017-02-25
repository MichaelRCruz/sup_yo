<template>
  <div>

    <app-header></app-header>
    <!-- <app-nav></app-nav> -->
    <router-view></router-view>
    <!-- <app-footer class="footer"></app-footer> -->

  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Form from './components/Form.vue'
    import Nav from './components/Nav.vue'

    export default {

        components: {
          'app-header': Header,
          'app-footer': Footer,
          'app-form': Form,
          'app-nav': Nav
        }

    }
</script>

<style scoped>

</style>
