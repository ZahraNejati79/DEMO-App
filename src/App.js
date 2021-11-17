import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
