import Home from '../views/pages/home';
import Product from '../views/pages/product';
import Tailor from '../views/pages/tailor';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';
import SignIn from '../views/pages/sign-in';
import SignUp from '../views/pages/sign-up';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/product': Product,
  '/tailor': Tailor,
  '/favorite': Favorite,
  '/about-us': AboutUs,
  '/sign-in': SignIn,
  '/sign-up': SignUp,
};

export default routes;
