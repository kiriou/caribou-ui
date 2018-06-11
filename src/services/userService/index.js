import { put, takeLatest /* ,call */ } from 'redux-saga/effects';
// import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as actions from './actions';
// import { ROOT_URL, USER_URL_EXT, USER_INFO_URL_EXT } from '../../core/api';
import * as mocks from './mock';

export function* watchGetUserRequest() {
  try {
    // const response = yield call(axios.get, `${ROOT_URL}${USER_URL_EXT}`);
    // const user = response.data;

    // Mock
    const user = mocks.getUser();

    yield put(actions.getUserSuccess(user));
  } catch (e) {
    yield put(actions.getUserFailure(`${e.response.status}`));
  }
}

export function* watchGetUserInfoRequest() {
  try {
    // const response = yield call(axios.get, `${ROOT_URL}${USER_INFO_URL_EXT}`);
    // const userInfo = response.data;

    // Mock
    const userInfo = mocks.getUserInfo();

    yield put(actions.getUserInfoSuccess(userInfo));
  } catch (e) {
    yield put(actions.getUserInfoFailure(`${e.response.status}`));
  }
}

export function* watchUpdateUserRequest() {
  yield put(actions.switchToReadMode());
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.USER_GET_USER_REQUEST, watchGetUserRequest);
  yield takeLatest(actionTypes.USER_GET_USER_INFO_REQUEST, watchGetUserInfoRequest);
  yield takeLatest(actionTypes.USER_UPDATE_USER_REQUEST, watchUpdateUserRequest);
}
