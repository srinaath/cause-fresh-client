import Error404Container from './containers/error/error-404-container';
import Error500Container from './containers/error/error-500-container';
import HomeContainer from './containers/home/home-container';

export default [
  {
    path: '/home',
    component: HomeContainer
  },
  {
    path: '/error/404',
    component: Error404Container
  },
  {
    path: '/error/:code?',
    component: Error500Container
  },
  {
    path: '/',
    component: HomeContainer
  }
];
