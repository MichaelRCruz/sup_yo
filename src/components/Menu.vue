<template>
  <div class="fixed">
    <div id="flexBox">
      <div id="wrapper">
        <div id="container">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><router-link tag="a" to="/home/dashboard" active-class="is-active" exact>Dashboard</router-link></li>
              <li><router-link tag="a" to="/home/customers" active-class="is-active" exact>Customers</router-link></li>
            </ul>
            <p class="menu-label">
              Administration
            </p>
            <ul class="menu-list">
              <li><router-link tag="a" to="/home/team-settings" active-class="is-active" exact>Team Settings</router-link></li>
              <li>
                <a>Manage Your Team</a>
                <ul>
                  <li><a>Members</a></li>
                  <li><a>Plugins</a></li>
                  <li><a>Add a member</a></li>
                </ul>
              </li>
              <li><router-link tag="a" to="/home/invitations" active-class="is-active" exact>Invitations</router-link></li>
              <li><router-link tag="a" to="/home/cloud-storage" active-class="is-active" exact>Cloud Storage Env Settings</router-link></li>
              <li><router-link tag="a" to="/home/authentication" active-class="is-active" exact>Authentication</router-link></li>
            </ul>
            <p class="menu-label">
              Transactions
            </p>
            <ul class="menu-list">
              <li><router-link tag="a" to="/home/payments" active-class="is-active" exact>Payments</router-link></li>
              <li><router-link tag="a" to="/home/transfers" active-class="is-active" exact>Transfers</router-link></li>
              <li><router-link tag="a" to="/home/balance" active-class="is-active" exact>Balance</router-link></li>
            </ul>
          </aside>
        </div>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

  #wrapper {
    display: inline-flex;
    padding: 40px 30px 0 10px;

  };

  #container {
    display: flex;
    flex-direction: column;
    width: 200px;


  };

  #flexBox {
    display: flex;
  }


</style>
