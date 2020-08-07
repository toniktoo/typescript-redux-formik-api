export const TOKEN_LOADING = 'TOKEN_LOADING';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const TOKEN_FAILURE = 'TOKEN_FAILURE';

export type Ttoken = {
  token: string | null;
};

export type authDataT = {
  username: string;
  password: string;
};

export interface TokenLoading {
  type: typeof TOKEN_LOADING;
}
export interface TokenSuccess {
  type: typeof TOKEN_SUCCESS;
  payload: string | null;
}
export interface TokenFailure {
  type: typeof TOKEN_FAILURE;
}

export type TokenDispatchTypes = TokenLoading | TokenSuccess | TokenFailure;
