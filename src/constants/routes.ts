interface routesI {
  [routesName: string]: string;
}

export const routes: routesI = {
  users: '/',
  auth: '/auth',
  addUser: '/addUser',
};
