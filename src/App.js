import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import { AuthProvider } from './context/AuthContext';
import routes from './routes';
import PrivateRoute from './components/PrivateRoute'
import RegisterContainer from './container/Register';
import LoginContainer from './container/Login';
import SiderLayout from './components/SiderLayout'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>

          <Switch>
            
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/auth/register" exact component={RegisterContainer} />
            <PrivateRoute path="/dashboard" exact component={SiderLayout} />
            <Route render={() => <Redirect to="/login" />} />
          </Switch>
        </AuthProvider>

      </Router>
    </div>
  );
}


export default App;
