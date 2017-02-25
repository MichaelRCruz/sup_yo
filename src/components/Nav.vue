<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <router-link tag="li" to="/home/dashboard"><a>Dashboard</a></router-link>
            <router-link tag="li" to="/home/customers"><a>Customers</a></router-link>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Env Setting</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scope>
  #wrapper {
    display: inline-block;
    padding: 40px 0 0 20px;
  };

  #container {
    display: flex;
    flex-direction: column;
  };
</style>
