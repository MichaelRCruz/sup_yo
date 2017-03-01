<template lang="html">

  <div>
    <section class="hero is-primary is-small is-bold">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <img src="" alt="Logo">
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <a class="nav-item is-active">
                Home
              </a>
              <a class="nav-item">
                Examples
              </a>
              <a class="nav-item">
                Documentation
              </a>
              <span class="nav-item">
                <a class="button is-primary is-inverted" @click="makeActive()">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Login</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>

      <section class="hero is-large is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Company Directory
            </h1>
            <h2 class="subtitle">
              ...another cool thing by Michael Cruz.
            </h2>
          </div>
        </div>
      </section>
    </section>

    <div class="modal" :class="{ 'is-active': activated }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->

        <a class="button is-large animated bounceIn" href="http://localhost:3000/auth/github">
          <span class="icon is-medium">
            <i class="fa fa-github"></i>
          </span>
          <span>Login With GitHub</span>
        </a>
        

      </div>
      <button class="modal-close" @click="makeInActive()"></button>
    </div>
  </div>

</template>

<script>

export default {

  data() {
    return {
      activated: false
    }
  },

  methods: {
    makeActive() {
      this.activated = true;
    },
    makeInActive() {
      this.activated = false;
    }
  }

}

</script>


<style lang="css">

</style>
