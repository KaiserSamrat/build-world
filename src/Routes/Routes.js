/* eslint-disable react/react-in-jsx-scope */
import Cart from "../Pages/Cart/Cart";
import CategoryList from "../Pages/Category/CategoryList";
import CreateCategory from "../Pages/Category/CreateCategory";
import DemoFormik from "../Pages/Demo/DemoFormik";
import Dashboard from "../Pages/Home/Index";
import CreateEmployee from "../Pages/HumanService/CreateEmployee";
import employeeList from "../Pages/HumanService/employeeList";
import UserOrder from "../Pages/Order/UserOrder";
import CreateProduct from "../Pages/Product/CreateProduct";
import ProductList from "../Pages/Product/ProductList";
import SuccessfullyPurchase from "../Pages/Purchase/SuccessfullyPurchase";
import Shop from "../Pages/Shop/Shop";
import ShopCreate from "../Pages/Shop/ShopCreate";
import ShopProduct from "../Pages/Shop/ShopProduct";
import AboutUs from "../Pages/WebSite/AboutUs";
import Contact from "../Pages/WebSite/Contact";
import Home from "../Pages/WebSite/Home";
import Profile from "../Pages/WebSite/Profile";
import Registration from "../Pages/WebSite/Registration";
import Requisition from "../Pages/WebSite/Requisition";

import SignIn from "../Pages/WebSite/SignIn";
import TrackOrder from "../Pages/WebSite/TrackOrder";
import Vendor from "../Pages/WebSite/VendorLogin";

const openRoute = [
  { path: "/", component: Home },
  { path: "/services", component: employeeList },
  { path: "/create-employee", component: CreateEmployee },
  { path: "/shop", component: Shop },
  { path: "/product", component: ProductList },
  { path: "/create-product", component: CreateProduct },
  { path: "/create-shop", component: ShopCreate },
  { path: "/category", component: CategoryList },
  { path: "/category-add", component: CreateCategory },
  { path: "/requisition", component: Requisition },
  { path: "/signin", component: SignIn },
  { path: "/registration", component: Registration },
  { path: "/contact-us", component: Contact },
  { path: "/vendor", component: Vendor },
  { path: "/about-us", component: AboutUs },
  { path: "/track-order", component: TrackOrder },
  { path: "/profile", component: Profile },
  { path: "/cart", component: Cart },
  { path: "/purchase", component: SuccessfullyPurchase },
  { path: "/userOrderHistory", component: UserOrder },
  { path: "/shop/:id", component: ShopProduct },
  // { path: '/forgot-password', component: ForgetPasswordPage },
];

const authRoute = [
  // eslint-disable-next-line react/react-in-jsx-scope
  // {
  //   path: "/",
  //   component: () => <Redirect to="/home" />,
  //   roles: ["admin", "teacher"],
  // },
  { path: "/admin-dashobard", component: Dashboard, roles: ["admin"] },
  { path: "/demo-formik", component: DemoFormik, roles: ["admin"] },
];

export { openRoute, authRoute };
