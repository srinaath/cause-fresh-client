import Error404Container from './containers/error/error-404-container';
import Error500Container from './containers/error/error-500-container';
import HomeContainer from './containers/home/home-container';
import AccountContainer from './containers/account/account-container';
import CausesContainer from './containers/causes/causes-container';
import DonationContainer from './containers/donation/donation-container';
import DonationsContainer from './containers/donations/donations-container';

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
    path: '/donation',
    component: DonationContainer
  },
  {
    path: '/donations',
    component: DonationsContainer
  },
  {
    path: '/causes',
    component: CausesContainer
  },
  {
    path: '/account',
    component: AccountContainer
  },
  {
    path: '/',
    component: HomeContainer
  }
];
