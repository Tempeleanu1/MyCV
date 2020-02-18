import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyCv from "./components/MyCv";
import Personal from "./components/Personal";
import Hobbies from "./components/Hobbies";
import Technical from "./components/Technical";

// This site has 3 pages, all of which are rendered dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate through the site.
// This preserves the browser history, making sure things like the back button and bookmarks work properly.

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
       
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route> elements 
          and renders the first one whose path matches the current URL.
          Use a <Switch> any time you have multiple routes, but you want only one of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';

const App = () => (
  <Button variant="contained" color="primary">
    Hello World
  </Button>
);