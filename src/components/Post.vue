<template lang="html">
  <div id="post" class="animated fadeInRight">

    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <!-- <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"> -->
            <img :src="userPost.created_by.github_avatar_url" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ userPost.created_by.name }}</strong> <small>{{ userPost.created_by.github_user_name }}</small> <small>31m</small>
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

    <article class="media" v-for="comment in comments">
      <figure class="media-left">
        <p class="image is-32x32">
          <img :src="comment.created_by.github_avatar_url">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ comment.created_by.name }}</strong>
            <small>{{ comment.created_by.github_user_name }}</small>
            <br>
            {{ comment.content }}
            <br>
            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-32x32">
          <img :src="userPost.created_by.github_avatar_url">
        </p>
      </figure>
      <div class="media-content">
        <p class="control">
          <textarea class="textarea" placeholder="Add a comment..." v-model="comment.content"></textarea>
        </p>
        <p class="control">
          <button class="button" @click="submitComment()">Post comment</button>
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
        comment: {
          content: "",
          belongs_to: this.$route.params.id,
          created_by: ""
        },
        comments: []
      }
    },
    beforeMount() {
      this.$http.get("posts/" + this.userPost._id)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.userPost = data;
        })
      this.$http.get('comments/' + this.$route.params.id)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.comments = data;
        })
    },
    methods: {
      submitComment() {
        this.$http.post('comments', this.comment)
          .then(response => {
            console.log('success', response);
          }, error => {
            console.log('failure', error);
          });
      }
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
