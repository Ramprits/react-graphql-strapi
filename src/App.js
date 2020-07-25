import React, { Fragment } from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Activities from "./pages/activities";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/activities" component={Activities} />
      </Switch>
    </Fragment>
  );
}
