import { Dispatch } from 'redux';
import question from '../../api/index';
import {
  TokenDispatchTypes,
  authDataT,
  TOKEN_LOADING,
  TOKEN_SUCCESS,
  TOKEN_FAILURE,
} from './authTypes';

export const fetchToken = (values: authDataT) => async (
  dispatch: Dispatch<TokenDispatchTypes>,
) => {
  try {
    dispatch({
      type: TOKEN_LOADING,
    });
    const res = await question.fetchTokenApi(values);
    dispatch({
      type: TOKEN_SUCCESS,
      payload: res.token,
    });
  } catch (err) {
    dispatch({
      type: TOKEN_FAILURE,
    });
    throw err;
  }
};
