import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

const Input = styled(Field)`
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #000;
  background: none;
  font-weight: 700;

  &:focus {
    outline: none;
  }
`;

interface Props {
  name: string;
  type: string;
}

const FormField = ({ name, type }: Props) => (
  <>
    <Input name={name} type={type} placeholder={`Enter ${name}...`} />
    <ErrorMessage name={name}>
      {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
    </ErrorMessage>
  </>
);

export default FormField;
