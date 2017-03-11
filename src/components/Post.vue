<template lang="html">
  <div class="posts">

    <h1>hello</h1>

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


<style lang="css" scope>

  #posts {
    flex: 1;
    padding: 30px 30px 0 0;
    flex-grow: 1;
  };

</style>
