import { action } from 'typesafe-actions';

interface PayloadRequest {
  email: string,
  password: string,
};

interface PayloadSuccess {
  token: string,
};

export function signInRequest({ email, password }: PayloadRequest) {
  return action('@auth/SIGN_IN_REQUEST', {
      email,
      password,
    }
  );
}

export function signInSuccess({ token }: PayloadSuccess) {
  return action('@auth/SIGN_IN_SUCCESS', { token });
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}
