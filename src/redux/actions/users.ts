import { Dispatch } from 'redux';
import question from '../../api/index';
import {
  UsersDispatchTypes,
  USERS_LOADING,
  USERS_SUCCESS,
  USERS_FAILURE,
} from './usersTypes';

export const fetchUsers = (token: string) => async (
  dispatch: Dispatch<UsersDispatchTypes>,
) => {
  try {
    dispatch({
      type: USERS_LOADING,
      payload: {
        isLoading: true,
      },
    });
    const res = await question.fetchUsersApi(token);
    dispatch({
      type: USERS_SUCCESS,
      payload: {
        users: res,
        isLoading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: USERS_FAILURE,
      payload: {
        isLoading: false,
      },
    });
  }
};
