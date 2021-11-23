import { c_routes } from '../utils';

const { ROOT_URL } = c_routes;
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: '',
  },
  body: '',
};

let response;

export async function UploadData(dispatch, payload, path) {
  dispatch({ type: 'REQUEST_API' });

  requestOptions.body = JSON.stringify(payload);

  requestOptions.headers.authorization = localStorage.getItem('_u')
    ? `${JSON.parse(localStorage.getItem('_u')).u}`
    : '';

  await fetch(`${ROOT_URL}${path}`, requestOptions)
    .then((r) => r.json().then((data) => (r.ok ? data : Promise.reject(data))))

    .then(
      (user) => {
        if (user.success) {
          let load = {
            u: user.token,
          };
          dispatch({ type: 'LOGIN_SUCCESS', payload: load });
          localStorage.setItem('_u', JSON.stringify(load));
          response = load;
        } else if (user.access) {
          dispatch({ type: 'UPLOAD_SUCCESS' });
          localStorage.setItem(
            '_u_access',
            JSON.stringify({ sffd_yh: user.token })
          );
          response = user;
        } else if (user.message) {
          dispatch({ type: 'UPLOAD_SUCCESS' });
          response = user;
        } else {
          response = 0;
        }
      },

      (err) => {
        const error = err.error ? err.error : 'server Not Found';
        dispatch({ type: 'APIACCESS_ERROR', error: error });
        response = 0;
      }
    );

  return response;
}

export async function fetchData(dispatch, path) {
  dispatch({ type: 'REQUEST_API' });
  requestOptions.headers.authorization = localStorage.getItem('_u_access')
    ? `${JSON.parse(localStorage.getItem('_u_access')).sffd_yh}`
    : '';
  const headers = requestOptions.headers;
  await fetch(`${ROOT_URL}${path}`, { headers })
    .then((r) => r.json())
    .then(
      (data) => {
        response = data;
      },
      (err) => {
        dispatch({ type: 'APIACCESS_ERROR', error: 'connection failed' });
        response = 0;
      }
    );
  return response;
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('_u');
}
