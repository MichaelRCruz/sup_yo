<template lang="html">
  <div class="customers">

    <div class="tile is-ancestor c">
      <div class="tile is-parent">
        <div class="tile is-child box is-3">
          <p class="title">One</p>
        </div>
        <div class="tile is-child box is-3">
          <p class="title">Two</p>
        </div>
        <div class="tile is-child box is-3">
          <p class="title">Two</p>
        </div>
        <div class="tile is-child box is-3">
          <p class="title">Two</p>
        </div>
        <div class="tile is-child box is-3">
          <p class="title">Two</p>
        </div>
        <div class="tile is-child box is-3">
          <p class="title">Two</p>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          github_avatar_url: '',
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


<style lang="css" scope>

  #customers {
    flex: 1;
    padding: 30px 30px 0 0;
  }


</style>
