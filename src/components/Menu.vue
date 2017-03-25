<template>
  <div id="main-wrapper">
    <div id="wrapper">
      <div id="container">

        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li>
              <router-link tag="a" to="/dashboard/calendar" active-class="is-active" exact>
                Calendar
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/dashboard/weblog/general" active-class="is-active" exact>
                Weblog
              </router-link>
            </li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li>
              <router-link tag="a" to="/dashboard/team-settings" active-class="is-active" exact>
                Placeholder Text
              </router-link>
            </li>
            <li>
              <a>Manage Your Team</a>
              <ul>
                <li><a>Placeholder Text</a></li>
                <li><a>Placeholder Text</a></li>
                <li><a>Placeholder Text</a></li>
              </ul>
            </li>
            <li>
              <router-link tag="a" to="/dashboard/invitations" active-class="is-active" exact>
                Invitations
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/dashboard/cloud-storage" active-class="is-active" exact>
                Placeholder Text
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/dashboard/authentication" active-class="is-active" exact>
                Placeholder Text
              </router-link></li>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
          <ul class="menu-list">
            <li>
              <router-link tag="a" to="/dashboard/payments" active-class="is-active" exact>
                Placeholder Text
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/dashboard/transfers" active-class="is-active" exact>
                Placeholder Text
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/dashboard/balance" active-class="is-active" exact>
                Placeholder Text
              </router-link>
            </li>
          </ul>
        </aside>

      </div>
    </div>

    <div class="content-wrapper"><router-view></router-view></div>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>

  .content-wrapper {
    overflow-y: scroll;
    flex: 1;
    padding: 1px;
  };

  #wrapper {
    flex-basis: 20em;
    padding: 35px 0px 0 25px;
    /*margin: 0;*/
  };

  #container {
    display: flex;
    flex-direction: column;
    width: 200px;
  };

  #main-wrapper {
    display: flex;
  };

  .menu-label {
    color: #00d1b2;
  };


</style>
