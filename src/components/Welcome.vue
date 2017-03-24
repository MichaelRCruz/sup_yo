<template lang="html">

  <div>
    <section class="hero is-primary is-small is-bold">
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
              <!-- <a class="nav-item is-active">
                Home
              </a>
              <a class="nav-item">
                Examples
              </a>
              <a class="nav-item">
                Documentation
              </a> -->
              <span class="nav-item">
                <!-- <a class="button is-primary is-inverted" @click="makeActive()"> -->
                <a class="button is-primary is-inverted" href="http://a1-api.herokuapp.com/auth/github">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Login With GitHub</span>
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
              Nameless Application
            </h1>
            <h2 class="subtitle">
              ...this was originally supposed to be a company directory, but I am now sort of pivoting
              towards some sort of job-search helper or whatever.
              Who knows what the future will bring. While browsing this application,
              please keep in mind that it is in the early stages of development.
              Most features will not work yet. Some buttons may not work yet.
            </h2>
            <br>
            <h2 class="subtitle">
              Also, I am a really really good web developer. If you have a job, you should probably give me one ;)
            </h2>
          </div>
        </div>
      </section>
    </section>

    <div class="modal" :class="{ 'is-active': activated }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->

        <a class="button is-large animated bounceIn" href="http://a1-api.herokuapp.com/">
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
