import axios from 'axios';
// import CustomError from './errors/CustomError'
// import { AuthenticationError, AuthorizationError } from './errors/auth'
// import store from './redux'
// import { SET_AUTH_ERROR } from './redux/auth'
const qs = require('qs');

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['mode'] = 'cors';
// instance.defaults.validateStatus = function (status) {
//   return status < 500;
// }

instance.defaults.paramsSerializer = params => {
  return qs.stringify(params, { arrayFormat: 'brackets' });
};

function setAuthError(error: any) {
//   store.dispatch({
//     type: SET_AUTH_ERROR,
//     error: error
//   })
}

instance.interceptors.request.use(function (config) {
  // config.headers['authorization'] = window.localStorage.getItem('authorization_header')
  config.headers!['session_id'] = window.localStorage.getItem('SESSION_ID')!;
  return config;
})

// instance.interceptors.response.use(function (response) {
//   if (response.status === 401) {
//     setAuthError(new AuthenticationError(response.data.message || '無效或逾時認證'));
//   } else if (response.status === 403) {
//     setAuthError(new AuthorizationError(response.data.message || '使用者沒有應用相關權限'));
//   }
//   return response;
// })



instance.interceptors.response.use(function (response) {
  // if (response.status === 401) {
  //   setAuthError(new AuthenticationError(response.data.message || '無效或逾時認證'));
  // } else if (response.status === 403) {
  //   setAuthError(new AuthorizationError(response.data.message || '使用者沒有應用相關權限'));
  // }
  return response;
}, (err) => {
  const { response } = err;
  if (response) {
    const _data = response.data || {};
    if (response.status === 401) {
    //   setAuthError(new AuthenticationError(_data.message || '無效或逾時認證'));
    } else if (response.status === 403) {
    //   setAuthError(new AuthorizationError(_data.message || '使用者沒有應用相關權限'));
    } else {
      throw new Error(_data.message || err.message)
    }
  }
  throw err;
})

export default instance;