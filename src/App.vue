<template>
  <div>
      <app-header></app-header>

        <p class="control">
          <input class="input is-primary" type="text" placeholder="name" v-model="person.name">
        </p>
        <p class="control">
          <input class="input is-primary" type="text" placeholder="phone" v-model="person.phone">
        </p>
        <p class="control">
          <input class="input is-primary" type="text" placeholder="email" v-model="person.email">
        </p>
        <p class="control">
          <input class="input is-primary" type="text" placeholder="employer" v-model="person.employer">
        </p>
        <p class="control">
          <input class="input is-primary" type="text" placeholder="github" v-model="person.github">
        </p>
        <p class="control">
          <input class="input is-primary" type="text" placeholder="linkedin" v-model="person.linkedin">
        </p>
        <p class="control">
          <input class="input is-primary" type="text" placeholder="facebook" v-model="person.facebook">
        </p>
        <a class="button is-primary">Submit Data</a>

        <app-footer class="footer"></app-footer>

  </div>
</template>

<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import Card from './Card.vue'

    export default {
        data() {
          return {
            person: {
              name: '',
              phone: '',
              email: '',
              employer: '',
              github: '',
              linkedin: '',
              facebook: '',
              projects: ''
            }
          };
        },
        methods: {
          submit() {
            
          }
        },
        components: {
          'app-header': Header,
          'app-footer': Footer,
          'app-card': Card
        }
    }
</script>

<style scoped>

  .input {
    width: 30%;
  }

</style>
