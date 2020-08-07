import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { routes } from '../constants/routes';

const Title = styled.h2`
  margin: 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {}

const ListHeader = (props: Props) => (
  <Header>
    <Title>id/username</Title>
    <Link to={routes.addUser}>Добавить пользователя</Link>
  </Header>
);

export default ListHeader;
