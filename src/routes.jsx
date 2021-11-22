import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
];
export default routes;
