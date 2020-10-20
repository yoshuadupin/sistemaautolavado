import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? <Component path={rest.path} {...props} /> : <Redirect to="/login" />
        }} />

      {/*
        routes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            render={(props) => {
              return currentUser ? <route.component {...props} /> : <Redirect to="/login" />
            }} />
        ))
      */}
    </>
  );
}
