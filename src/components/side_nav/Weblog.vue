<template lang="html">
  <div id="weblog">

    <div class="tabs is-boxed is-right">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fa fa-weixin"></i></span>
            <span>General</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-file-word-o"></i></span>
            <span>Resumes & Cover Letters </span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-handshake-o"></i></span>
            <span>Job Search</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class=" fa fa-file-code-o"></i></span>
            <span>Programming</span>
          </a>
        </li>
        <li>
          <a class="button is-info" @click="activate()">Create Post</a>
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
            <router-link class="title is-4" :to="'weblog/' + post._id" tag="p">
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

        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input" v-model="post.title">
        </p>
        <!-- <label class="label">Username</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma">
          <span class="icon is-small">
            <i class="fa fa-check"></i>
          </span>
          <span class="help is-success">This username is available</span>
        </p>
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
          <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
          <span class="icon is-small">
            <i class="fa fa-warning"></i>
          </span>
          <span class="help is-danger">This email is invalid</span>
        </p> -->
        <label class="label">Subject</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
        <label class="label">Message</label>
        <p class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="post.content"></textarea>
        </p>
        <p class="control">
          <label class="checkbox">
            <input type="checkbox">
            Remember me
          </label>
        </p>
        <p class="control">
          <label class="radio">
            <input type="radio" name="question">
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="question">
            No
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
        posts: [],
        activated: false,
        post: {
          title: "",
          content: ""
        }
      };
    },
    beforeMount() {
      this.$http.get('posts')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.posts = data;
        });
    },
    methods: {
      submitPost() {
        this.$http.post('posts', this.post)
          .then(response => {
            return response.json()
          })
          .then(data => {
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
