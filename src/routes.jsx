import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogsPage from "./pages/BlogsPage";
import Blogs from "./components/Blogs";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
  { path: "/blogs/:id", component: Blogs },
  { path: "/blogs", component: BlogsPage },
  { component: NotFound },
];
export default routes;
