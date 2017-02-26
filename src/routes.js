import Form from './components/Form.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Dashboard from './components/side_nav/Dashboard.vue';
import Customers from './components/side_nav/Customers.vue';
import TeamSettings from './components/side_nav/TeamSettings.vue';
import ManageTeam from './components/side_nav/ManageTeam.vue';
import Invitations from './components/side_nav/Invitations.vue';
import CloudStorage from './components/side_nav/CloudStorage.vue';
import Authentication from './components/side_nav/Authentication.vue';
import Payments from './components/side_nav/Payments.vue';
import Transfers from './components/side_nav/Transfers.vue';
import Balance from './components/side_nav/Balance.vue';

export const routes = [
  { path: '/form', name: 'header', components: {
    default: Form,
    'header': Header
  } },
  { path: '/home', component: Header, children: [
    { path: '/', component: Menu, children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'customers', component: Customers },
      { path: 'team-settings', component: TeamSettings },
      { path: 'manage-team', component: ManageTeam },
      { path: 'invitations', component: Invitations },
      { path: 'cloud-storage', component: CloudStorage },
      { path: 'authentication', component: Authentication },
      { path: 'payments', component: Payments },
      { path: 'transfers', component: Transfers },
      { path: 'balance', component: Balance }
    ] }
  ] }
]
