import { c_routes } from '../utils';
import * as views from '../views';
export const routes = [
  {
    path: c_routes.home,
    component: views.HomePage,
    isPrivate: false,
  },
  {
    path: c_routes.about,
    component: views.AboutPage,
    isPrivate: false,
  },
  {
    path: c_routes.customize,
    component: views.Private,
    isPrivate: true,
  },
  {
    path: c_routes.contacts,
    component: views.contactCard,
    isPrivate: false,
  },
  {
    path: c_routes.signin,
    component: views.LogPage,
    isPrivate: false,
  },
];
