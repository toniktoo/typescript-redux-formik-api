import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { message } from 'antd';
import { RootStore } from '../redux/store';
import FormField from './FormField';
import { routes } from '../constants/routes';
import queries from '../api/index';

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormS = styled(Form)`
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
const WrapperIsActive = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #000;
  background: none;
  font-weight: 700;
  width: 100%;
`;
const TitleIsActive = styled.p`
  margin: 0 8px 0 0;
`;

interface Props {}

const shema = yup.object().shape({
  username: yup.string().required('Enter username'),
  password: yup
    .string()
    .required('Enter password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      '8+ букв, 1 заглавная, 1 цифра.',
    ),
  first_name: yup.string(),
  last_name: yup.string(),
  is_active: yup.boolean(),
});

const FormAddUser = (props: Props) => {
  const { token } = useSelector((state: RootStore) => state.reducerAuth);
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        isActive: false,
      }}
      validationSchema={shema}
      onSubmit={async (values) => {
        try {
          await queries.addUserApi(token!, values);
          await history.push(routes.users);
        } catch (err) {
          message.error('Пользователь с таким именем уже существует');
        }
      }}
    >
      {({ handleSubmit }) => (
        <Wrapper>
          <FormS onSubmit={handleSubmit}>
            <FormField name="username" type="text" />
            <FormField name="password" type="password" />
            <FormField name="firstName" type="text" />
            <FormField name="lastName" type="text" />
            <WrapperIsActive>
              <TitleIsActive>is Active?</TitleIsActive>
              <FormField name="isActive" type="checkbox" />
            </WrapperIsActive>
            <BtnSubmit type="submit" value="Send user" />
          </FormS>
        </Wrapper>
      )}
    </Formik>
  );
};

export default FormAddUser;
