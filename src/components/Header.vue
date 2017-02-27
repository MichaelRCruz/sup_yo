<template>
  <div class="flex-wrapper">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="" alt="sup_yo logo">
          </a>
          <router-link to="/home" class="nav-item is-tab is-hidden-mobile" active-class="is-active" exact>Home</router-link>
          <router-link to="/form" class="nav-item is-tab is-hidden-mobile" active-class="is-active" exact>Form</router-link>
          <router-link to="/form" class="nav-item is-tab is-hidden-mobile"></router-link>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
          <a class="nav-item is-tab is-hidden-tablet">Features</a>
          <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
          <a class="nav-item is-tab is-hidden-tablet">About</a>
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <img class="pierre" src="../assets/pierre.jpg">
            </figure>
            Profile
          </a>
          <router-link tag="a" to="/" class="nav-item is-tab">Log out</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  <div>
</template>

<script>

</script>

<style>
  .pierre {
    border-radius: 5px;
  }

  html, body {
    height: 100%;
  }

  .flex-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

</style>
