<template>
  <div>

    <!-- <app-header></app-header> -->
    <router-view name="header"></router-view>
    <router-view></router-view>

  </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Form from './components/Form.vue'
    import Menu from './components/Menu.vue'

    export default {

        components: {
          'app-header': Header,
          'app-footer': Footer,
          'app-form': Form,
          'app-menu': Menu
        }

    }
</script>

<style scoped>

</style>
