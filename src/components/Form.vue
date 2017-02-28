<template lang="html">
  <div class="container">
    <p class="control">
      <input class="input is-info" type="text" placeholder="name" v-model="user.name">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="phone" v-model="user.phone">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="email" v-model="user.email">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="employer" v-model="user.employer">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="github" v-model="user.github">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="linkedin" v-model="user.linkedin">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="facebook" v-model="user.facebook">
    </p>

    <a class="button is-info" @click="submit">Submit Data</a>
    <a class="button is-info" @click="fetchData">Fetch Data</a>
    <ul>
      <li v-for="user in users"> {{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        employer: '',
        github: '',
        linkedin: '',
        facebook: '',
        projects: ''
      },
      users: []
    };
  },
  methods: {
    submit() {
      this.$http.post('', this.user)
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
          this.users = data;
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
