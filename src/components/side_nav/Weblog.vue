<template lang="html">
  <div id="weblog" class="">

    <div class="tabs is-boxed is-right">
      <ul>
        <router-link tag="li" to="/dashboard/weblog/favorites" active-class="is-active" exact>
          <a>
            <span class="icon is-small"><i class="fa fa-handshake-o" active-class="is-active"></i></span>
            <span>Favorites</span>
          </a>
        </router-link>
        <router-link tag="li" to="/dashboard/weblog/general" active-class="is-active" exact>
          <a>
            <span class="icon is-small"><i class="fa fa-weixin"></i></span>
            <span>General</span>
          </a>
        </router-link>
        <router-link tag="li" to="/dashboard/weblog/networking" active-class="is-active"exact>
          <a>
            <span class="icon is-small"><i class=" fa fa-file-code-o"></i></span>
            <span>Networking</span>
          </a>
        </router-link>
        <router-link tag="li" to="/dashboard/weblog/resumes-cover-letters" active-class="is-active"exact>
          <a>
            <span class="icon is-small"><i class="fa fa-file-word-o"></i></span>
            <span>Resumes / Cover Letters </span>
          </a>
        </router-link>
        <router-link tag="li" to="/dashboard/weblog/job-search" active-class="is-active"exact>
          <a>
            <span class="icon is-small"><i class="fa fa-handshake-o"></i></span>
            <span>Job Search</span>
          </a>
        </router-link>
        <router-link tag="li" to="/dashboard/weblog/development" active-class="is-active"exact>
          <a>
            <span class="icon is-small"><i class=" fa fa-file-code-o"></i></span>
            <span>Development</span>
          </a>
        </router-link>
        <li id="createPost" class="animated shake">
          <a class="button is-outlined is-info" @click="activate()">Create Post</a>
        </li>
      </ul>
    </div>
    <!-- <a class="button" @click="activate()">Create Post</a> -->

    <article class="media animated slideInUp" v-for="post in posts">
      <figure class="media-left">
        <p class="image is-32x32">
          <img :src="post.created_by.github_avatar_url">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ post.created_by.name }}</strong>
            <a target="_blank" :href="post.created_by.github_profile_url" >
              <small>
                {{ post.created_by.github_user_name }}
              </small>
            </a>
            <small>31m</small>
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
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-heart"></i></span>
            </a>
            <a class="level-item" v-if="$store.state.session._id == post.created_by._id">
              <!-- <span class="icon is-small"><i class="fa fa-trash" @click="activateDeleteModal(post)"></i></span> -->
            </a>
          </div>
        </nav>
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

    <div class="modal" :class="{ 'is-active': activateDelete }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->

        <article class="message is-warning animated fadeIn">
          <div class="message-header">
            Warning!
            <button class="delete" @click="disableDeleteModal(post)"></button>
          </div>
          <div class="message-body">
            This will mess stuff up beacuse we are in development, but by all means
            please try and delete some data.
            <!-- <div class="block"> -->
              <span class="tag is-danger">
                delete
                <button class="delete is-small" @click="deletePost()"></button>
              </span>
            <!-- </div> -->
          </div>
        </article>

      </div>
      <button class="modal-close" @click="disableDeleteModal(post)"></button>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        persistedPost: {},
        topicId: this.$route.params.topic,
        picked: "",
        posts: [],
        activated: false,
        activateDelete: false,
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
            this.posts = data.reverse();
          });
      },
      submitPost() {
        this.$http.post('posts', this.post)
          .then(response => {
            return response.json();
          })
          .then(data => {
            if (data.topic == this.topicId) {
              this.posts.unshift(data);

            }
            this.disable();
          }, error => {
            console.log('failure', error);
          });
      },
      deletePost(post) {
        this.disableDeleteModal(post)
        this.isActive = true;
        this.$http.delete('posts', { body: { _id: this.persistedPost._id } })
          .then(response => {
            this.posts.splice(0, 1)
          })
      },
      activate() {
        this.activated = true
      },
      activateDeleteModal(post) {
        this.persistedPost = post;
        this.activateDelete = true
      },
      disable() {
        this.activated = false
      },
      disableDeleteModal(post) {
        this.activateDelete = false
      }
    }
  }
</script>


<style lang="css" scoped>

  #weblog {
    flex: 1;
    padding: 30px 30px 50px 0;
    flex-grow: 1;
  }

  img {
    border-radius: 5px;
  }

  .title {
    color: #3273dc;
    cursor: pointer;
  }

  .fa-trash {
    color: #fedc57;
  }

  #createPost {
  /*-webkit-animation-duration: 3s;*/
  -webkit-animation-delay: 1.5s;
  /*-vendor-animation-iteration-count: infinite;*/
  }

</style>
