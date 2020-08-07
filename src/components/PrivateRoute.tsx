import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { RootStore } from '../redux/store';
import { routes } from '../constants/routes';

const PrivateRoute = ({ component, ...rest }: any) => {
  const { isAuth } = useSelector((state: RootStore) => state.reducerAuth);
  const routeComponent = (props: any) => (isAuth ? (
    React.createElement(component, props)
  ) : (
    <Redirect to={{ pathname: routes.auth }} />
  ));
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
