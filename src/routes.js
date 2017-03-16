import Vue from 'vue';
import Welcome from './components/Welcome.vue';
import Footer from './components/Footer.vue';
import Dashboard from './components/Dashboard.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Calendar from './components/side_nav/Calendar.vue';
import Weblog from './components/side_nav/Weblog.vue';
import Post from './components/Post.vue';
import TeamSettings from './components/side_nav/TeamSettings.vue';
import ManageTeam from './components/side_nav/ManageTeam.vue';
import Invitations from './components/side_nav/Invitations.vue';
import CloudStorage from './components/side_nav/CloudStorage.vue';
import Authentication from './components/side_nav/Authentication.vue';
import Payments from './components/side_nav/Payments.vue';
import Transfers from './components/side_nav/Transfers.vue';
import Balance from './components/side_nav/Balance.vue';
import { store } from './store/store';


export const routes = [
  { path: '/dashboard',
    component: Header,

    beforeEnter: (to, from, next) => {
      Vue.http.get('session')
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data) {
            next();
            store.state.session = data;
          } else {
            next({ path: '/' })
          }
        });
    },

    children: [
      { path: '/',
        component: Menu,
        children: [
          { path: '/dashboard',
            name: 'header',
            components: {
            default: Dashboard,
            'header': Header
            }
          },
          { path: 'calendar', component: Calendar },
          { path: 'weblog/:topic', component: Weblog },
          { path: 'weblog/:topic/:id', component: Post },
          { path: 'team-settings', component: TeamSettings },
          { path: 'manage-team', component: ManageTeam },
          { path: 'invitations', component: Invitations },
          { path: 'cloud-storage', component: CloudStorage },
          { path: 'authentication', component: Authentication },
          { path: 'payments', component: Payments },
          { path: 'transfers', component: Transfers },
          { path: 'balance', component: Balance }
        ]
      }
    ]
  },

  { path: '',
    name: 'footer',
    components: {
      default: Welcome,
      'footer': Footer
    }
  }
]
