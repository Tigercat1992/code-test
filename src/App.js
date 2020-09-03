import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import { DefaultLayout } from './containers';

function App() {
  return (
    <div className="app">
      {/* <DefaultLayout /> */}
      <Router>
        <Suspense 
        // fallback={loading()}
        >
          <Switch>
            <Route exact path="/" name="Work" render={props => <DefaultLayout {...props}/>} />
            <Route exact path="/work" name="Work" render={props => <DefaultLayout {...props}/>} />
          </Switch>
        </Suspense>
      </Router>
    </div>
    
  );
}

export default App;
