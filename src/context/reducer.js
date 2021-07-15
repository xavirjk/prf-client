let token = localStorage.getItem('_u')
  ? JSON.parse(localStorage.getItem('_u')).u
  : '';

export const initialState = {
  userData: '',
  token: '' || token,
  loading: false,
  errorMessage: null,
  successMessage: '',
  tst: '',
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_API':
      return {
        ...initialState,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        token: action.payload.u,
        loading: false,
      };
    case 'UPLOAD_SUCCESS':
      return {
        ...initialState,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        userDetails: '',
        token: '',
      };
    case 'APIACCESS_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case 'TEST':
      return {
        ...initialState,
        tst: action.dt,
      };
    case '3RDPARTYAPIACCESS_ERROR':
      return {
        ...initialState,
        loading: false,
        remoteErrorMessage: action.error,
      };
    case 'ACTION_SUCCESS':
      return {
        ...initialState,
        successMessage: action.message,
        loading: false,
      };
    case 'USER_PRESENT':
      return {
        ...initialState,
        userData: action.user,
        loading: false,
      };
    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
};
