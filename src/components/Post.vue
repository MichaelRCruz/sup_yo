<template lang="html">
  <div id="post" class="">


    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <!-- <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"> -->
            <img :src="userPost.created_by.github_avatar_url" alt="http://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ userPost.created_by.name }}</strong>
              <a target="_blank" :href="userPost.created_by.github_profile_url">
                <small>{{ userPost.created_by.github_user_name }}</small>
              </a>
              <small>31m</small>
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

    <article class="media animated slideInUp" v-for="comment in comments">
      <figure class="media-left">
        <p class="image is-32x32">
          <img :src="comment.created_by.github_avatar_url">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ comment.created_by.name }}</strong>
            <a target="_blank" :href="userPost.created_by.github_profile_url">
              <small>{{ comment.created_by.github_user_name }}</small>
            </a>
            <br>
            {{ comment.content }}
            <br>
            <small>
              <a>Like</a>
              · <a class="reply">
                 Reply
                </a>
                · <a class="remove is-warning"
                    v-if="$store.state.session._id == comment.created_by._id"
                    @click="deleteComment(comment)">delete
                 ·</a>
                 3 hrs
            </small>
          </p>
        </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-32x32">
          <img :src="$store.state.session.github_avatar_url">
        </p>
      </figure>
      <div class="media-content">
        <p class="control">
          <textarea class="textarea is-info"
                    :class="{    'is-info': commentField.isInfo,
                               'is-danger': commentField.isDanger,
                              'is-success': commentField.isSuccess
                            }"
                    placeholder="Add a comment..."
                    v-model="comment.content"
                    v-on:keyup.enter="submitComment()">
          </textarea>
        </p>
        <p class="help">
          {{ commentField.message }}
        </p>
        <p class="control">
          <button class="button is-info" @click="submitComment()">Post comment</button>
        </p>
      </div>
    </article>


  </div>
</template>


<script>
  import { store } from '../store/store';
  export default {
    data() {
      return {
        commentField: {
          isInfo: true,
          isDanger: false,
          message: ""
        },
        activated: false,
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
        if (this.comment.content == "") {
          console.log("need to add a field")
          this.commentField.isInfo = false;
          this.commentField.isDanger = true;
          this.commentField.message = "please add a comment";
        } else {
            this.$http.post('comments', this.comment)
              .then(response => {
                return response.json();
              })
              .then(data => {
                this.comments.push(data);
                this.activated = true;
                this.comment.content = "";
              }, error => {
                console.log('failure', error);
              });
            this.commentField.isInfo = false;
            this.commentField.isDanger = false;
            this.commentField.isSuccess = true;
            this.commentField.message = "thanks :)";
        }
      },
      deleteComment(comment) {
        this.$http.delete('comments', { body: { _id: comment._id } })
          .then(response => {
            this.comments.splice(this.comments.indexOf(comment), 1)
          })
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

  .remove {
    color: orange;
  };

  img {
    border-radius: 5px;
  }

  .help {
    padding-bottom: 10px;
  }

</style>
