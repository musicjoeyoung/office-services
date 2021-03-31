import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Manager from "./Manager";
import Coordinator from "./Coordinator";
import Receptionist from "./Receptionist";
import Header from "./Header";
import Resources from "./Resources";

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MainPage() {
  return (
    <Router>
      <div className="mainPage">
        <Header />
        <Switch>
          <Route exact path="/mainpage">
            <Home />
          </Route>
          <Route path="/manager">
            <Manager />
          </Route>
          <Route path="/coordinator">
            <Coordinator />
          </Route>
          <Route path="/receptionist">
            <Receptionist />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainPage;
