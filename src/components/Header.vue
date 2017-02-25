<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <img src="" alt="supyo logo">
        </a>
        <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
        <a class="nav-item is-tab is-hidden-mobile">Features</a>
        <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
        <a class="nav-item is-tab is-hidden-mobile">About</a>
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
        <a class="nav-item is-tab">Log out</a>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style>
  .pierre {
    border-radius: 5px;
  }
</style>
