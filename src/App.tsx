import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './constants/routes';
import ListUsers from './components/ListUsers';
import Auth from './components/Auth';
import FormAddUser from './components/FormAddUser';
import PrivateRoute from './components/PrivateRoute';

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => (
  <Wrapper>
    <Switch>
      <Route path={routes.auth} component={Auth} />
      <PrivateRoute path={routes.users} exact component={ListUsers} />
      <PrivateRoute path={routes.addUser} component={FormAddUser} />
      <Redirect to={{ pathname: routes.auth }} />
    </Switch>
  </Wrapper>
);

export default App;
