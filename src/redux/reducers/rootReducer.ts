import { combineReducers } from 'redux';
import { reducerAuth } from './auth';
import { reducerUsers } from './users';

export const rootReducer = combineReducers({ reducerAuth, reducerUsers });
