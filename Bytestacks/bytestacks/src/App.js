import "./Styles.css";
import Home from "./screens/Home";
import { Route, Switch } from "react-router-dom";
import Contact from "./screens/Contact";
import About from "./screens/About";
import AgencyBanking from "./screens/AgencyBanking";
import DigitalBanking from "./screens/DigitalBanking";
import CoopBanking from "./screens/CoopBanking";
import ScrollToTop from "./components/reusables/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>

        <Route exact path="/AgencyBanking">
          <AgencyBanking />
        </Route>
        <Route exact path="/DigitalBanking">
          <DigitalBanking />
        </Route>
        <Route exact path="/CooperativeBanking">
          <CoopBanking />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
