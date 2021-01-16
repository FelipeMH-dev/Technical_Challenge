import React from "react";
//import MessageForm from "./components/MessageForm";
import UsersList from "./components/UsersList/UsersList";
import ChatForm from "./components/ChatForm/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Nav/Navbar";
import "./App.css";
import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route exact path="/new-user" component={ChatForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
