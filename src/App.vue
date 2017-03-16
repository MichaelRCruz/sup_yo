<template>
  <div>

    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>

  </div>
</template>


<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Dashboard from './components/Dashboard.vue'
    import Menu from './components/Menu.vue'
    import Welcome from './components/Welcome.vue'

    export default {

        components: {
          'app-header': Header,
          'app-footer': Footer,
          'app-dashboard': Dashboard,
          'app-menu': Menu,
          'app-welcome': Welcome
        }

    }
</script>


<style scoped>
</style>
