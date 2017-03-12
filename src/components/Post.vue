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

    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Barbara Middleton</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br>
            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </div>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="http://bulma.io/images/placeholders/96x96.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Sean Brown</strong>
                <br>
                Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>

            <article class="media">
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
            </article>

            <article class="media">
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
            </article>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="http://bulma.io/images/placeholders/96x96.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Kayli Eunice </strong>
                <br>
                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <p class="control">
          <textarea class="textarea" placeholder="Add a comment..."></textarea>
        </p>
        <p class="control">
          <button class="button">Post comment</button>
        </p>
      </div>
    </article>

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
