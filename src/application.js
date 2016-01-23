import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./containers/Main"
import Enroll from "./containers/Enroll"
import StudentsList from "./containers/StudentLists"
import Layout from "./containers/Layout"

var app = document.getElementById('app');

//ReactDOM.render(<Main />, app);
//ReactDOM.render(<Enroll />, app);
//ReactDOM.render(<StudentsList />, app);
ReactDOM.render(<Layout company="Lunar Logic"><Enroll /></Layout>, app);
