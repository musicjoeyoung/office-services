import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/mainpage">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
