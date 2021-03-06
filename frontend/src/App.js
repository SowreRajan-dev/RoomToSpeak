import "./App.css";
import { Home } from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "./Components/Shared/Navigation/Navigation";

import { Autenticate } from "./pages/Authenticate/Autenticate";
import { Activate } from "./pages/Acttivate/Activate";
import { Rooms } from "./pages/Rooms/Rooms";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./Components/Shared/Loader/Loader";
import { Room } from "./pages/Room/Room";

function App() {
  //call refresh endpoint

  const { loading } = useLoadingWithRefresh();

  return (
    <div className="App">
      {loading ? (
        <Loader message="Loading, please wait..." />
      ) : (
        <Router>
          <Navigation />
          <Switch>
            <GuestRoute path="/" exact>
              <Home />
            </GuestRoute>

            <GuestRoute path="/authenticate">
              <Autenticate />
            </GuestRoute>
            <SemiProtectedRoute path="/activate">
              <Activate />
            </SemiProtectedRoute>
            <ProtectedRoute path="/rooms">
              <Rooms />
            </ProtectedRoute>
            <ProtectedRoute path="/room/:id">
              <Room />
            </ProtectedRoute>
          </Switch>
        </Router>
      )}
    </div>
  );
}
const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};
const SemiProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          <Redirect
            to={{
              pathname: "/activate",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};
export default App;
