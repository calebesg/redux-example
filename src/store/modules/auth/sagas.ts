import { ActionType } from 'typesafe-actions';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import api from '../../../services/api';

type ActionSignIn = ActionType<typeof actions.signInRequest>;

export function* signIn({ payload }: ActionSignIn) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, '', { email, password });

    yield put(actions.signInSuccess({ token: data.token }));

  } catch (error) {
    yield put(actions.signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
