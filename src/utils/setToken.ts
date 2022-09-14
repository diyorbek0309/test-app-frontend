import api from './api';

const authToken = (token: string) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common.authorization;

    localStorage.removeItem('token');
  }
};

export default authToken;
