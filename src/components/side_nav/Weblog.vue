<template lang="html">
  <div class="weblog">

    <ul class="parent">
      <router-link :to="'weblog/' + post._id" tag="li" class="child" v-for="post in posts">
        {{ post.title }}
      </router-link>
    </ul>

  </div>
</template>


<script>

  export default {
    data() {
      return {

        posts: []
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
