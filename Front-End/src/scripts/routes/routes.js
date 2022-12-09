// Before Login
import Home from '../views/pages/before-login/home';
import Product from '../views/pages/before-login/product';
import Tailor from '../views/pages/before-login/tailor';
import AboutUs from '../views/pages/before-login/about-us';
import SignIn from '../views/pages/before-login/sign-in';
import SignUp from '../views/pages/before-login/sign-up';
import SignInTailor from '../views/pages/before-login/sign-in-tailor';
import SignUpTailor from '../views/pages/before-login/sign-up-tailor';
import DetailProduct from '../views/pages/before-login/detail-product';
import DetailTailor from '../views/pages/before-login/detail-tailor';

// After Login TAILOR
import HomeTailor from '../views/pages/tailor/home-tailor';
import ProductTailor from '../views/pages/tailor/product-tailor';
import AboutUsTailor from '../views/pages/tailor/aboutus-tailor';
import DetailProductTailor from '../views/pages/tailor/detail-product';
import TailorProfile from '../views/pages/tailor/tailor-profile';

// After Login USER
import HomeLogin from '../views/pages/user/home-login';
import ProductUser from '../views/pages/user/product';
import AboutUsUser from '../views/pages/user/about-us';
import DetailProductUser from '../views/pages/user/detail-product';
import Favorite from '../views/pages/user/favorite';
import UserProfile from '../views/pages/user/user-profile';
import TailorUser from '../views/pages/user/tailor';
import DetailTailorUser from '../views/pages/user/detail-tailor';
import ProductCart from '../views/pages/user/product-cart';

const routes = {
  // Before Login
  '/': Home, // default page
  '/home': Home,
  '/product': Product,
  '/tailor': Tailor,
  '/about-us': AboutUs,
  '/sign-in': SignIn,
  '/sign-up': SignUp,
  '/sign-in-tailor': SignInTailor,
  '/sign-up-tailor': SignUpTailor,
  '/detail-product/:id': DetailProduct,
  '/detail-tailor/:id': DetailTailor,

  // After Login TAILOR
  '/tailor-home': HomeTailor,
  '/tailor-product': ProductTailor,
  '/tailor-about-us': AboutUsTailor,
  '/tailor-detail-product/:id': DetailProductTailor,
  '/tailor-profile': TailorProfile,

  //  After Login USER
  '/user-home': HomeLogin,
  '/user-product': ProductUser,
  '/user-detail-product/:id': DetailProductUser,
  '/user-favorite': Favorite,
  '/user-product-cart': ProductCart,
  '/user-tailor': TailorUser,
  '/user-detail-tailor': DetailTailorUser,
  '/user-about-us': AboutUsUser,
  '/user-profile': UserProfile,
};

export default routes;
