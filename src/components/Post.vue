<template lang="html">
  <div class="posts">

    <h1>
      {{ post._id }} -
      {{ post.title }} -
      {{ post.content }}
    </h1>
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
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$http.get("posts/" + this.post._id)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.post = data;
          });
      }
    }
  };

</script>


<style lang="css" scoped>

  #posts {
    flex: 1;
    padding: 30px 30px 0 0;
    flex-grow: 1;
  };

</style>
