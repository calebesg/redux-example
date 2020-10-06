import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
};

function auth(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    default:
      return state;
  }
}

export default auth;
