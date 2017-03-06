<template lang="html">
  <div class="customers">

    <a class="button is-warning" @click="fetchData">Fetch Data</a>
    <div class="parentM">
      <div class="childM" v-for="user in users">
        {{ user.name }}
      </div>
    </div>

  </div>
</template>


<script>

  export default {
    data() {
      return {
        user: {
          name: ''
        },
        users: []
      };
    },
    methods: {
      submit() {
        this.$http.post('users', this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
      fetchData() {
        this.$http.get('users')
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


<style lang="css" scope>

  #customers {
    flex: 1;
    padding: 30px 30px 0 0;
    flex-grow: 1;
  };

  .parentM {
    display: flex;
    flex-direction: ltr;
    flex-wrap: wrap;
  };

  .childM {
    height: 110px;
    width: 110px;
    background-color: red;
    border-radius: 10px;
    margin: 10px;
    flex-grow: 1;
  };


</style>
