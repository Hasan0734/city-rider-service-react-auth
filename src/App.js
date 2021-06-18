import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <div>
      <Router>
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/find-transport/:transportId">
        <SearchPage></SearchPage>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
        <NoMatch/>
        </Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
