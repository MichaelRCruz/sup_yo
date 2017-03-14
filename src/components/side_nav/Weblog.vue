<template lang="html">
  <div class="weblog">

    <ul class="parent">
      <router-link :to="'weblog/' + post._id" tag="li" class="child" v-for="post in posts">
        {{ post.title }}
      </router-link>
    </ul>
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
        <label class="label" v-model="post.content">Subject</label>
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
    <a class="button" @click="activate()">Create Post</a>

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
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$http.get('posts')
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.posts = data;
          });
      },
      submitPost() {
        this.$http.post('posts', this.post)
          .then(response => {
            this.disable();
            console.log('success', response);
          }, error => {
            console.log('failure', error);
          });
      },
      activate() {
        this.activated = true
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
    padding: 30px 30px 0 0;
    flex-grow: 1;
  };

</style>
