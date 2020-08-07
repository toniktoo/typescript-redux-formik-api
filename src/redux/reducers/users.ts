import {
  UsersDispatchTypes,
  usersStateT,
  USERS_LOADING,
  USERS_SUCCESS,
  USERS_FAILURE,
} from '../actions/usersTypes';

const initState: usersStateT = {
  users: [],
  isLoading: false,
};

export const reducerUsers = (
  state: usersStateT = initState,
  action: UsersDispatchTypes,
): usersStateT => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: action.payload.isLoading,
      };
    case USERS_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};
