export const USERS_LOADING = 'USERS_LOADING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export type userT = {
  id: number;
  username: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
  lastLogin?: string;
  isSuperuser?: boolean;
};

export type userRequiredT = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
  lastLogin?: string;
  isSuperuser?: boolean;
};

export type usersStateT = {
  users: Array<userT>;
  isLoading: boolean;
};

export interface UsersLoading {
  type: typeof USERS_LOADING;
  payload: {
    isLoading: boolean;
  };
}
export interface UsersSuccess {
  type: typeof USERS_SUCCESS;
  payload: {
    users: Array<userT>;
    isLoading: boolean;
  };
}
export interface UsersFailure {
  type: typeof USERS_FAILURE;
  payload: {
    isLoading: boolean;
  };
}

export type UsersDispatchTypes = UsersLoading | UsersSuccess | UsersFailure;
