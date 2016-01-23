import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import History from "./history"
import Main from "./containers/Main";
import Enroll from "./containers/Enroll";
import StudentsList from "./containers/StudentLists";
import Layout from "./containers/Layout";

// returns just variable
export default (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}/>
      <Route path="enroll" component={Enroll}/>
      <Route path="students_list" component={StudentsList}/>
      <Route path="*" component={Main}/>
    </Route>
  </Router>
)
