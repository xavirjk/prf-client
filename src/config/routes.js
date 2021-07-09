import { c_routes } from '../utils';
import * as views from '../views';
export const routes = [
  {
    path: c_routes.home,
    component: views.Public,
    isPrivate: false,
  },
  {
    path: c_routes.customize,
    component: views.Private,
    isPrivate: true,
  },
];
