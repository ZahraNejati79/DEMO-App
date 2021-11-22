import { Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/profile" component={Profile} />
    </Layout>
  );
}

export default App;
