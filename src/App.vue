<template>
  <div>

    <app-header></app-header>
    <router-view></router-view>
    <!-- <app-form></app-form> -->
    <app-footer class="footer"></app-footer>

  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Form from './components/Form.vue'

    export default {

        components: {
          'app-header': Header,
          'app-footer': Footer,
          'app-form': Form
        }

    }
</script>

<style scoped>

</style>
