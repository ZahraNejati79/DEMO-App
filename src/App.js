import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
    </BrowserRouter>
  );
}

export default App;
