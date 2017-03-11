<template lang="html">
  <div class="weblog">

    <div class="parentM">
      <router-link :to="'weblog/' + post._id" tag="div" class="childM" v-for="post in posts">
        {{ post._id }}
      </router-link>
    </div>

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

  .parentM {
    display: flex;
    flex-direction: ltr;
    flex-wrap: wrap;
  };

  .childM {
    height: 110px;
    width: 110px;
    background-color: red;
    border-radius: 10px;
    margin: 10px;
    flex-grow: 1;
  };


</style>
