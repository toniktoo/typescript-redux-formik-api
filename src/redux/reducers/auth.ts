import {
  TokenDispatchTypes,
  TOKEN_LOADING,
  TOKEN_SUCCESS,
  TOKEN_FAILURE,
} from '../actions/authTypes';

interface initStateI {
  isLoading: boolean;
  token?: string | null;
  isAuth: boolean;
}

const initState: initStateI = {
  isLoading: false,
  token: null,
  isAuth: false,
};

export const reducerAuth = (
  state: initStateI = initState,
  action: TokenDispatchTypes,
): initStateI => {
  switch (action.type) {
    case TOKEN_LOADING:
      return { isLoading: true, isAuth: false };
    case TOKEN_SUCCESS:
      return {
        isLoading: false,
        token: action.payload,
        isAuth: true,
      };
    case TOKEN_FAILURE:
      return { isLoading: false, isAuth: false };
    default:
      return state;
  }
};
