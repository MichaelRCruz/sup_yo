<template>
  <div id="header" class="flex-wrapper">

    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="" alt="sup_yo logo">
          </a>
          <router-link to="/dashboard" class="nav-item is-tab is-hidden-mobile is-active" exact>Dashboard</router-link>
          <router-link to="/dashboard" class="nav-item is-tab is-hidden-mobile"></router-link>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active">Dashboard</a>
          <a class="nav-item is-tab is-hidden-tablet">Features</a>
          <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
          <a class="nav-item is-tab is-hidden-tablet">About</a>
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <img :src="user.github_avatar_url">
            </figure>
            Profile
          </a>
          <a href="http://localhost:3000/logout"
             class="nav-item is-tab"
             v-if="locationHost == 'localhost:8080'">
             Log out
          </a>
          <a href="http://a1-api.herokuapp.com/logout"
             class="nav-item is-tab"
             v-else>
             Log out
          </a>
        </div>
      </div>
    </nav>

    <router-view></router-view>

  <div>
</template>

<script>

  export default {
    data() {
      return {
        locationHost: location.host,
        user: {
          github_avatar_url: ""
        }
      }
    },
    beforeMount() {
      this.$http.get('users/profileShow')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.user = data;
        });
    }
  }

</script>

<style scoped>

  .nav {
    background-color: #f8f8f8;
  }

  html, body {
    height: 100%;
  };

  .flex-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
  };

  img {
    border-radius: 3px;
  }

</style>
