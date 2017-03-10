<template lang="html">
  <div class="container">

    <p class="control">
      <input class="input is-info" type="text" placeholder="name" v-model="user.name">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="phone" v-model="user.phone">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="email" v-model="user.email">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="employer" v-model="user.employer">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="github" v-model="user.github">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="linkedin" v-model="user.linkedin">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="facebook" v-model="user.facebook">
    </p>

    <a class="button is-info" @click="submitUser">Submit User</a>
    <a class="button is-info" @click="fetchUsers">Fetch Users</a>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>

    <br>
    <br>
    <br>

    <p class="control">
      <input class="input is-info" type="text" placeholder="title" v-model="post.title">
    </p>
    <p class="control">
      <input class="input is-info" type="text" placeholder="content" v-model="post.content">
    </p>

    <a class="button is-info" @click="submitPost">Submit Post</a>
    <a class="button is-info" @click="fetchPosts">Fetch Posts</a>
    <ul>
      <li v-for="post in posts">
        {{ post.title }}
        {{ post._id }}
        <a class="button is-danger" @click="deletePost(post)">Delete</a>
      </li>
    </ul>

</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        employer: '',
        github: '',
        linkedin: '',
        facebook: '',
        projects: ''
      },
      post: {
        // _id: '',
        title: '',
        content: ''
        // created_by: '',
        // created: ''
      },
      users: [],
      posts: []
    };
  },
  methods: {
    submitUser() {
      this.$http.post('users', this.user)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    },
    submitPost() {
      this.$http.post('posts', this.post)
        .then(response => {
          console.log('success', response);
        }, error => {
          console.log('failure', error);
        });
    },
    fetchUsers() {
      this.$http.get('users')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.users = data;
        });
    },
    fetchPosts() {
      var self = this
      this.$http.get('posts')
        .then(response => {
          return response.json();
        })
        .then(data => {
          self.posts = data;
          console.log('fetchedPosts:', data)
        });
    },
    deletePost(post) {
      this.$http.delete('posts', { body: { _id: post._id } })
        .then(response => {
          console.log('the delete response', response);
        });
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    width: 33%;
    padding: 100px 0 0 0;
  }
  .input {
    /*width: 30%;*/
  }
</style>
