import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { authDataT } from '../redux/actions/authTypes';
import { userRequiredT } from '../redux/actions/usersTypes';

const API_SERVER_URL: string = 'http://emphasoft-test-assignment.herokuapp.com';

const config: AxiosRequestConfig = {
  baseURL: API_SERVER_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

class Question {
  apiClient: AxiosInstance;

  usernameApi: string;

  passwordApi: string;

  constructor() {
    this.usernameApi = 'test_super';
    this.passwordApi = 'Nf<U4f<rDbtDxAPn';
    this.apiClient = axios.create(config);
  }

  fetchTokenApi = async (values: authDataT) => {
    const { username, password } = values;
    const dataUser = JSON.stringify({
      username,
      password,
    });
    const res = await this.apiClient.post('/api-token-auth/', dataUser);
    return res.data;
  };

  fetchUsersApi = async (token: string) => {
    const res = await this.apiClient.get('/api/v1/users/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return res.data;
  };

  addUserApi = async (token: string, values: userRequiredT) => {
    const {
      username, password, firstName, lastName, isActive,
    } = values;
    const data = JSON.stringify({
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      is_active: isActive,
    });
    const res = await this.apiClient.post('/api/v1/users/', data, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return res.data;
  };

  deleteUserApi = async (token: string, idUser: number) => {
    const res = await this.apiClient.delete(`/api/v1/users/${idUser}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return res.data;
  };
}

export default new Question();
