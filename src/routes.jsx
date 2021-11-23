import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
  { component: NotFound },
];
export default routes;
