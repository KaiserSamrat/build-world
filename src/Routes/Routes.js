/* eslint-disable react/react-in-jsx-scope */
import DemoFormik from "../Pages/Demo/DemoFormik";
import Dashboard from "../Pages/Home/Index";
import AboutUs from "../Pages/WebSite/AboutUs";
import Contact from "../Pages/WebSite/Contact";
import Home from "../Pages/WebSite/Home";
import Profile from "../Pages/WebSite/Profile";
import Registration from "../Pages/WebSite/Registration";
import Requisition from "../Pages/WebSite/Requisition";
import Shop from "../Pages/WebSite/Shop";
import SignIn from "../Pages/WebSite/SignIn";
import TrackOrder from "../Pages/WebSite/TrackOrder";
import Vendor from "../Pages/WebSite/VendorLogin";

const openRoute = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/requisition", component: Requisition },
  { path: "/signin", component: SignIn },
  { path: "/registration", component: Registration },
  { path: "/contact-us", component: Contact },
  { path: "/vendor", component: Vendor },
  { path: "/about-us", component: AboutUs },
  { path: "/track-order", component: TrackOrder },
  { path: "/profile", component: Profile },
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
