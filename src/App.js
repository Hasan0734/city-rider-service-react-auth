import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import SearchPage from './components/SearchPage/SearchPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';

export const UserContext = createContext()
function App() {
 
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/find-transport/:transportId">
        <SearchPage></SearchPage>
        </PrivateRoute>
        <PrivateRoute path="/destination">
          <Destination></Destination>
        </PrivateRoute>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
        <NoMatch/>
        </Route>
      </Switch>
      </Router>
    
    </UserContext.Provider>
  );
}

export default App;
