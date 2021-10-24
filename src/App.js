import React from 'react';
//Routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
//components
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import Create from './components/projects/Create';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={Create} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
