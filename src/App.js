import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Navigation />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
    </Layout>
  );
}

export default App;
