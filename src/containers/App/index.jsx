import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login";
import Layout from '../../componants/Layout'
export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login" exact component={Login} />
      <Layout>

      </Layout>
      </Switch>
    </Router>
  );
}
