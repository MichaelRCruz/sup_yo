<template lang="html">
  <div id="post" class="animated fadeInRight">

    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <!-- <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"> -->
            <img :src="user.github_avatar_url" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ user.name }}</strong> <small>{{ user.github_user_name }}</small> <small>31m</small>
              <br>
              <br>
              <h1>{{ userPost.title }}</h1>
              {{ userPost.content }}
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-reply"></i></span>
              </a>
              <!-- <a class="level-item">
                <span class="icon is-small"><i class="fa fa-retweet"></i></span>
              </a> -->
              <a class="level-item">
                <span class="icon is-small"><i class="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>

  </div>
</template>


<script>

  export default {
    data() {
      return {
        userPost: {
          _id: this.$route.params.id,
          title: "",
          content: "",
          created_by: ""
        },
        user: {
          name: "",
          github_user_name: "",
          github_profile_url: "",
          github_avatar_url: ""
        }
      }
    },
    beforeMount() {

      this.$http.get("posts/" + this.userPost._id)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.userPost = data;

          return this.userPost.created_by
        })
        .then(user_id => {
          this.$http.get("users/" + user_id)
            .then(response => {
              return response.json();
            })
            .then(data => {
              this.user = data;
            });
        })
    },

    methods: {

    }
  };

</script>


<style lang="css" scoped>

  #post {
    flex: 1;
    padding: 30px 30px 50px 0;
    flex-grow: 1;
  };

</style>
