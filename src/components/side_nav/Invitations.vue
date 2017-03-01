<template lang="html">
  <div id="invitations">

    <a class="button is-warning" @click="fetchData">Fetch Data</a>

    <div class="tile is-ancestor" v-for="user in users">
      <div class="tile is-vertical is-8">
        <div class="tile">

          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">{{ user.name }}</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img :src="user.github_avatar_url">
              </figure>
            </article>
          </div>
          <!-- <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div> -->

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


<style lang="css">

  #invitations {
    flex: 1;
    padding: 30px 30px 0 0;
  };

</style>
