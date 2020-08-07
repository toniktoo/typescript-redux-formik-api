import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { message } from 'antd';
import FormField from './FormField';
import { routes } from '../constants/routes';
import { fetchToken } from '../redux/actions/auth';

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & *:not(:last-child) {
    margin-bottom: 2px;
  }
`;
const BtnSubmit = styled(Field)`
  padding: 4px;
  margin-top: 8px;
  border: none;
  background: none;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

interface Props {}

const shema = yup.object().shape({
  username: yup.string().required('Enter username'),
  password: yup.string().required('Enter password'),
});

const Auth = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        username: 'test_super',
        password: 'Nf<U4f<rDbtDxAPn',
      }}
      validationSchema={shema}
      onSubmit={async (values) => {
        try {
          await dispatch(fetchToken(values));
          await history.push(routes.users);
        } catch (err) {
          message.error('Не правильный логин или пароль...');
        }
      }}
    >
      {({ handleSubmit }) => (
        <Wrapper>
          <FormAuth onSubmit={handleSubmit}>
            <FormField name="username" type="text" />
            <FormField name="password" type="password" />
            <BtnSubmit type="submit" value="Submit" />
          </FormAuth>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Auth;
