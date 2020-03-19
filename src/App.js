import React from "react";
import "./styles.css";
import SingIn from "./SingIn";
import SignUp from "./SignUp";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SingIn} />
      <Route exact path="/signUp" component={SignUp} />
    </div>
  );
}
