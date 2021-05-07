import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./utils/ProtectedRoute";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
