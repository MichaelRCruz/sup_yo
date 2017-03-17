<template lang="html">
  <div id="post" class="">


    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="userPost.created_by.github_avatar_url"
                  alt="http://bulma.io/images/placeholders/128x128.png">
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
              · <a class="reply" @click="requestReply(comment)">
                 Reply
                </a>
                · <a class="remove is-warning"
                      v-if="$store.state.session._id == comment.created_by._id"
                      @click="deleteComment(comment)">delete
                 ·</a>
                 3 hrs
            </small>
          </p>

          <article class="media animated slideInDown"
                   v-if="replyRequest.request &&
                         comments.indexOf(comment) == replyRequest.index
                        ">
            <figure class="media-left">
              <p class="image is-24x24">
                <img :src="$store.state.session.github_avatar_url">
              </p>
            </figure>
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea class="textarea is-info"
                            :class="{    'is-info': commentReplyField.isInfo,
                                       'is-danger': commentReplyField.isDanger,
                                      'is-success': commentReplyField.isSuccess
                                    }"
                            placeholder="Add a comment..."
                            v-model="commentReply.content"
                            v-on:keyup.enter="submitCommentReply(comment)">
                  </textarea>
                </p>
                <p class="help">
                  {{ commentReplyField.message }}
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button"
                          @click="submitCommentReply(comment)">
                          Submit Reply
                  </button>
                </p>
              </div>
            </div>
          </article>

          <article class="media" v-for="commentReply in commentReplies"
                                 v-if="commentReply.replied_to._id
                                 == comment._id">
            <figure class="media-left">
              <p class="image is-24x24">
                <img :src="comment.created_by.github_avatar_url">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ comment.created_by.name }}</strong>
                  <br>
                    {{ commentReply.content }}
                  <br>
                  <small><a>Like</a> · 2 hrs</small>
                </p>
              </div>
            </div>
          </article>

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
                    v-on:keyup.enter="submitComment()"
          ></textarea>
        </p>
        <p class="help">
          {{ commentField.message }}
        </p>
        <p class="control">
          <button class="button is-info"
                  @click="submitComment()">
                  Submit Comment
          </button>
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
        replyRequest: {
          request: false,
          index: ""
        },
        commentField: {
          isInfo: true,
          isDanger: false,
          message: ""
        },
        commentReplyField: {
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
          is_reply: false,
          created_by: "",
          replied_to: null
        },
        commentReply: {
          content: "",
          belongs_to: this.$route.params.id,
          is_reply: true,
          created_by: "",
          replied_to: ""
        },
        commentReplies: [],
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
      this.$http.get('comments/replies/' + this.$route.params.id)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.commentReplies = data;
        })
    },
    methods: {
      submitComment() {
        if (this.comment.content == "") {
          this.commentField.isInfo = false;
          this.commentField.isDanger = true;
          this.commentField.message = "Please add a comment.";
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
      submitCommentReply(comment) {
        this.commentReply.replied_to = comment._id;
        if (this.commentReply.content == "") {
          this.commentReplyField.isInfo = false;
          this.commentReplyField.isDanger = true;
          this.commentReplyField.message = "Please add a reply.";
        } else {
            this.$http.post('comments', this.commentReply)
              .then(response => {
                return response.json();
              })
              .then(data => {
                this.commentReplies.push(data);
                this.activated = true;
                this.commentReplyField.isActivated = false;
                this.commentReply.content = "";
              }, error => {
                console.log('failure', error);
              });
            this.replyRequest.request = false;
            this.commentReplyField.isInfo = false;
            this.commentReplyField.isDanger = false;
            this.commentReplyField.isSuccess = true;
            this.commentReplyField.message = "thanks :)";
        }
      },
      deleteComment(comment) {
        this.$http.delete('comments', { body: { _id: comment._id } })
          .then(response => {
            this.comments.splice(this.comments.indexOf(comment), 1);
          })
      },
      requestReply(comment) {
        this.replyRequest.request = true;
        this.replyRequest.index = this.comments.indexOf(comment);
      }
    }
  };
</script>


<style lang="css" scoped>

  img {
    border-radius: 5px;
  }

  #post {
    flex: 1;
    padding: 30px 30px 50px 0;
    flex-grow: 1;
  }

  .remove {
    color: orange;
  }

  .help {
    padding-bottom: 10px;
  }

</style>
