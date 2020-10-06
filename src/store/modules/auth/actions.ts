import { action } from 'typesafe-actions';

interface Payload {
  email: string,
  password: string,
};

export function signInRequest({ email, password }: Payload) {
  return action('@auth/SIGN_IN_REQUEST', {
      email,
      password,
    }
  );
}
