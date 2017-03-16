<template lang="html">
  <div id="weblog">

    <div class="tabs is-boxed is-right">
      <ul>
        <router-link tag="li" to="/home/weblog/favorites" active-class="is-active" exact>
          <a>
            <span class="icon is-small"><i class="fa fa-handshake-o" active-class="is-active"></i></span>
            <span>Favorites</span>
          </a>
        </router-link>
        <router-link tag="li" to="/home/weblog/general" active-class="is-active" exact>
          <a>
            <span class="icon is-small"><i class="fa fa-weixin"></i></span>
            <span>General</span>
          </a>
        </router-link>
        <router-link tag="li" to="/home/weblog/networking" exact>
          <a>
            <span class="icon is-small"><i class=" fa fa-file-code-o" active-class="is-active"></i></span>
            <span>Networking</span>
          </a>
        </router-link>
        <router-link tag="li" to="/home/weblog/resumes-cover-letters" exact>
          <a>
            <span class="icon is-small"><i class="fa fa-file-word-o" active-class="is-active"></i></span>
            <span>Resumes / Cover Letters </span>
          </a>
        </router-link>
        <router-link tag="li" to="/home/weblog/job-search" exact>
          <a>
            <span class="icon is-small"><i class="fa fa-handshake-o" active-class="is-active"></i></span>
            <span>Job Search</span>
          </a>
        </router-link>
        <router-link tag="li" to="/home/weblog/development" exact>
          <a>
            <span class="icon is-small"><i class=" fa fa-file-code-o" active-class="is-active"></i></span>
            <span>Development</span>
          </a>
        </router-link>
        <li>
          <a class="button is-outlined is-info" @click="activate()">Create Post</a>
        </li>
      </ul>
    </div>
    <!-- <a class="button" @click="activate()">Create Post</a> -->

    <article class="media" v-for="post in posts">
      <figure class="media-left">
        <p class="image is-32x32">
          <img :src="post.created_by.github_avatar_url">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ post.created_by.name }}</strong> <small>{{ post.created_by.github_user_name }}</small> <small>31m</small>
            <br>
            <router-link class="title is-4" :to="post.topic + '/' + post._id" tag="p">
              {{ post.title }}
            </router-link>
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
      <div class="media-right">
        <button class="delete" @click="deletePost(post)"></button>
      </div>
    </article>


    <div class="modal" :class="{ 'is-active': activated }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->

        <label class="label">Post Title</label>
        <p class="control">
          <input class="input" type="text" placeholder="...create a title" v-model="post.title">
        </p>
        <label class="label">Content</label>
        <p class="control">
          <textarea class="textarea" placeholder="...post content" v-model="post.content"></textarea>
        </p>
        <p class="control">
          <label class="checkbox">
            <input type="checkbox">
            Remember me
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Remember me
          </label>
        </p>
        <p class="control">
          <label class="radio">
            <input type="radio" name="question" value="general" v-model="post.topic">
            General
          </label>
          <label class="radio">
            <input type="radio" name="question" value="networking" v-model="post.topic">
            Networking
          </label>
          <label class="radio">
            <input type="radio" name="question" value="resumes-cover-letters" v-model="post.topic">
            Resumes / Cover Letters
          </label>
          <label class="radio">
            <input type="radio" name="question" value="job-search" v-model="post.topic">
            Job Search
          </label>
          <label class="radio">
            <input type="radio" name="question" value="development" v-model="post.topic">
            Development
          </label>
        </p>
        <div class="control is-grouped">
          <p class="control">
            <button class="button is-primary" @click="submitPost()">Submit</button>
          </p>
          <p class="control">
            <button class="button is-link" @click="disable()">Cancel</button>
          </p>
        </div>
      </div>
      <button class="modal-close" @click="disable()"></button>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        topicId: this.$route.params.topic,
        picked: "",
        posts: [],
        activated: false,
        post: {
          title: "",
          content: "",
          topic: ""
        }
      };
    },
    beforeMount() {
      this.fetchPosts();
    },
    watch: {
      '$route'(to, from) {
        this.topicId = to.params.topic;
        this.fetchPosts();
      }
    },
    methods: {
      fetchPosts() {
        this.$http.get('posts/topic/' + this.$route.params.topic)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.posts = data;
            console.log('BBBBBBBBBBBB', data)
          });
      },
      submitPost() {
        this.$http.post('posts', this.post)
          .then(response => {
            return response.json()
          })
          .then(data => {
            console.log('lsdcnlksndlkcnqslkdcnklqnwsdckqlkwdncklqnwcl k', data);
            if (data.topic == this.topicId) {
              this.posts.push(data)
            }
            this.posts.push(data);
            this.disable();
          }, error => {
            console.log('failure', error);
          });
      },
      deletePost(post) {
        this.$http.delete('posts', { body: { _id: post._id } })
          .then(response => {
            this.posts.splice(this.posts.indexOf(post), 1)
            console.log('the delete response', response);
          })
      },
      activate() {
        this.activated = true
        console.log(this.posts[0].created_by.github_avatar_url)
      },
      disable() {
        this.activated = false
      }
    }
  }
</script>


<style lang="css" scoped>

  #weblog {
    flex: 1;
    padding: 30px 30px 50px 0;
    flex-grow: 1;
  };

</style>
