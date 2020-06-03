import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login";
import Dashboard from "../Dashboard";
import Layout from "../../componants/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import './app.css'
require('typeface-nunito-sans')
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layout>
          <Route path="/dashboard-1" exact component={Dashboard} />
        </Layout>
      </Switch>
    </Router>
  );
}
