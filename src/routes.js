import Form from './components/Form.vue';
import Nav from './components/Nav.vue';
import Dashboard from './components/Dashboard.vue';

export const routes = [
  // { path: '', component: Home },
  { path: '/form', component: Form },
  { path: '/home', component: Nav, children: [
    { path: 'dashboard', component: Dashboard }
  ] }
]
