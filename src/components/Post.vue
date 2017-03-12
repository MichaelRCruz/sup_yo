<template lang="html">
  <div id="post" class="animated fadeInRight">

    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br>
              <br>
              <h1>{{ post.title }}</h1>
              {{ post.content }}
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
          post: {
            _id: this.$route.params.id,
            title: "",
            content: ""
          }
      }
    },
    beforeMount() {
      // this.fetchData();
      this.$http.get("posts/" + this.post._id)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.post = data;
        });
    },
    methods: {
      // fetchData() {
      //   this.$http.get("posts/" + this.post._id)
      //     .then(response => {
      //       return response.json();
      //     })
      //     .then(data => {
      //       this.post = data;
      //     });
      // }
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
