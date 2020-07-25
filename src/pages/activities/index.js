import React from "react";
import { Switch, Route } from "react-router-dom";

import ActivityList from "./activityList";
import CreateActivity from "../../components/activity/createActivity";

const Activities = () => {
  return (
    <Switch>
      <Route exact path="/activities" component={ActivityList} />
      <Route
        exact
        path={["/activities/create", "/activities/edit/:id"]}
        component={CreateActivity}
      />
    </Switch>
  );
};
export default Activities;
