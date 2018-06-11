import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import { ROOT_URL, ACCOUNT_URL_EXT } from '../../core/api';
import * as actions from './actions';
import { initAccount } from './helper';

export function* watchGetAccountListRequest() {
  try {
    // const response = yield call(axios.get, `${ROOT_URL}${ACCOUNT_URL_EXT}`);

    // BEGIN MOCK
    const response = {
      data: [
        {
          _id: '1234',
          lastname: 'Doe',
          firstname: 'John',
          email: 'john.doe@test.com',
        },
        {
          _id: '5678',
          lastname: 'Dupont',
          firstname: 'Martin',
          email: 'martin.dupont@test.com',
        },
      ],
    };
    // END MOCK

    yield put(actions.getAccountListSuccess(response.data));
  } catch (e) {
    yield put(actions.getAccountListFailure(e.message));
  }
}

export function* watchCreateAccountRequest(action) {
  try {
    const account = action.newAccount;
    const response = yield call(axios.post, `${ROOT_URL}${ACCOUNT_URL_EXT}`, account);

    // BEGIN MOCK
    // const response = {
    //   data: {
    //     _id: `${Math.floor((Math.random() * 10000) + 1)}`,
    //     lastname: account.lastname,
    //     firstname: account.firstname,
    //     email: account.email,
    //   },
    // };
    // END MOCK

    yield put(actions.createAccountSuccess(response.data, action.successCallback));
    yield put(push('/accounts'));
  } catch (e) {
    yield put(actions.createAccountFailure(e.message, action.errorCallBack));
  }
}

export function* watchUpdateAccountRequest(action) {
  try {
    const account = action.updatedAccount;
    const response = yield call(axios.put, `${ROOT_URL}${ACCOUNT_URL_EXT}${account._id}`, account);

    // BEGIN MOCK
    // const response = {
    //   data: account,
    // };
    // END MOCK

    yield put(actions.updateAccountSuccess(response.data, action.successCallback));
  } catch (e) {
    yield put(actions.updateAccountFailure(e.message, action.errorCallBack));
  }
}

export function* watchDeleteAccountRequest(action) {
  try {
    yield call(axios.delete, `${ROOT_URL}${ACCOUNT_URL_EXT}${action.accountId}`);
    yield put(actions.getAccountListRequest());
    yield put(actions.deleteAccountSuccess(action.successCallback));
  } catch (e) {
    yield put(actions.deleteAccountFailure(e.message, action.errorCallBack));
  }
}

export function* watchSuccessCallback(action) {
  if (action.successCallback) {
    yield call(action.successCallback);
  }
}

export function* watchErrorCallback(action) {
  if (action.errorCallback) {
    yield call(action.errorCallback);
  }
}

export function* watchInitAccount() {
  const account = initAccount();

  yield put(actions.initAccountDone(account));
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.ACCOUNT_LIST_REQUEST, watchGetAccountListRequest);
  yield takeLatest(actionTypes.ACCOUNT_CREATE_REQUEST, watchCreateAccountRequest);
  yield takeLatest([actionTypes.ACCOUNT_CREATE_SUCCESS, actionTypes.ACCOUNT_UPDATE_SUCCESS, actionTypes.ACCOUNT_DELETE_SUCCESS], watchSuccessCallback);
  yield takeLatest([actionTypes.ACCOUNT_CREATE_FAILURE, actionTypes.ACCOUNT_UPDATE_FAILURE, actionTypes.ACCOUNT_DELETE_FAILURE], watchErrorCallback);
  yield takeLatest(actionTypes.ACCOUNT_UPDATE_REQUEST, watchUpdateAccountRequest);
  yield takeLatest(actionTypes.ACCOUNT_DELETE_REQUEST, watchDeleteAccountRequest);
  yield takeLatest(actionTypes.ACCOUNT_INIT, watchInitAccount);
}
