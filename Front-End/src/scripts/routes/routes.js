import Home from '../views/pages/home';
import Product from '../views/pages/product';
import Tailor from '../views/pages/tailor';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';
import SignIn from '../views/pages/sign-in';
import SignUp from '../views/pages/sign-up';
import DetailProduct from '../views/pages/detail-product';
import UserProfile from '../views/pages/user-profile';
import DetailTailor from '../views/pages/detail-tailor';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/product': Product,
  '/tailor': Tailor,
  '/favorite': Favorite,
  '/about-us': AboutUs,
  '/sign-in': SignIn,
  '/sign-up': SignUp,
  '/detail-product/:id': DetailProduct,
  '/user-profile': UserProfile,
  '/detail-tailor': DetailTailor,
};

export default routes;
