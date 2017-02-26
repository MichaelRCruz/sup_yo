<template lang="html">
  <div class="container">
    <p class="control">
      <input class="input is-info" type="text" placeholder="name" v-model="person.name">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="phone" v-model="person.phone">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="email" v-model="person.email">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="employer" v-model="person.employer">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="github" v-model="person.github">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="linkedin" v-model="person.linkedin">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="facebook" v-model="person.facebook">
    </p>

    <a class="button is-info" @click="submit">Submit Data</a>
    <a class="button is-info" @click="fetchData">Fetch Data</a>
    <ul>
      <li v-for="person in persons"> {{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
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
      },
      persons: []
    };
  },
  methods: {
    submit() {
      this.$http.post('', this.person)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    },
    fetchData() {
      this.$http.get('')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.persons = data;
        });
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    width: 33%;
    padding: 100px 0 0 0;
  }
  .input {
    /*width: 30%;*/
  }
</style>
