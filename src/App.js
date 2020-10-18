import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { AuthProvider } from './context/AuthContext';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute'
import RegisterContainer from './containers/Register';
import LoginContainer from './containers/Login';
import Dashboard from './components/Dashboard';


function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <div className="App">
      <Router>
        <AuthProvider>

          <Switch>

            <Route path="/login" exact component={LoginContainer} />
            <Route path="/auth/register" exact component={RegisterContainer} />
            <Route path="/dashboard" exact component={Dashboard} />
            

          </Switch>
        </AuthProvider>

      </Router>
    </div>
  );
}


export default App;
