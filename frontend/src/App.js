import "./App.css";
import { Home } from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./Components/Shared/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
