<template>
  <div>

    <app-header></app-header>
    <app-form></app-form>
    <app-footer class="footer"></app-footer>

  </div>
</template>

<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import Form from './Form.vue'

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
