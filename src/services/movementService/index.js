import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import { ROOT_URL, MOVEMENT_URL_EXT } from '../../core/api';
import * as actions from './actions';
import { flattenMovementList, prepareRequestParam, flattenMovement, initMovement } from './helper';

// MOCK IMPORT
// import { mockMovementListResponse } from './mock';

export function* watchGetMovementListRequest() {
  try {
    const { selectedLedger } = (yield select()).ledgerServiceReducer;
    const response = yield call(axios.get, `${ROOT_URL}${MOVEMENT_URL_EXT}${selectedLedger._id}`);

    // BEGIN MOCK
    // const response = mockMovementListResponse();
    // END MOCK

    yield put(actions.getMovementListSuccess(flattenMovementList(response.data)));
  } catch (e) {
    yield put(actions.getMovementListFailure(e.message));
  }
}

export function* watchCreateMovementRequest(action) {
  try {
    const movement = prepareRequestParam(action.newMovement);
    const response = yield call(axios.post, `${ROOT_URL}${MOVEMENT_URL_EXT}`, movement);

    // BEGIN MOCK
    // const response = {
    //   data: movement,
    // };
    // END MOCK

    yield put(actions.createMovementSuccess(flattenMovement(response.data), action.successCallback));
    yield put(push('/movements'));
  } catch (e) {
    yield put(actions.createMovementFailure(e.message, action.errorCallBack));
  }
}

export function* watchUpdateMovementRequest(action) {
  try {
    const movement = prepareRequestParam(action.updatedMovement);
    const response = yield call(axios.put, `${ROOT_URL}${MOVEMENT_URL_EXT}${movement._id}`, movement);

    // BEGIN MOCK
    // const response = {
    //   data: movement,
    // };
    // END MOCK

    yield put(actions.updateMovementSuccess(flattenMovement(response.data), action.successCallback));
  } catch (e) {
    yield put(actions.updateMovementFailure(e.message, action.errorCallBack));
  }
}

export function* watchDeleteMovementRequest(action) {
  try {
    yield call(axios.delete, `${ROOT_URL}${MOVEMENT_URL_EXT}${action.movementId}`);
    yield put(actions.getMovementListRequest());
    yield put(actions.deleteMovementSuccess(action.successCallback));
  } catch (e) {
    yield put(actions.deleteMovementFailure(e.message, action.errorCallBack));
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

export function* watchInitMovement() {
  const { selectedLedger } = (yield select()).ledgerServiceReducer;
  const movement = initMovement(selectedLedger._id);

  yield put(actions.initMovementDone(movement));
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.MOVEMENT_LIST_REQUEST, watchGetMovementListRequest);
  yield takeLatest(actionTypes.MOVEMENT_CREATE_REQUEST, watchCreateMovementRequest);
  yield takeLatest([actionTypes.MOVEMENT_CREATE_SUCCESS, actionTypes.MOVEMENT_UPDATE_SUCCESS, actionTypes.MOVEMENT_DELETE_SUCCESS], watchSuccessCallback);
  yield takeLatest([actionTypes.MOVEMENT_CREATE_FAILURE, actionTypes.MOVEMENT_UPDATE_FAILURE, actionTypes.MOVEMENT_DELETE_FAILURE], watchErrorCallback);
  yield takeLatest(actionTypes.MOVEMENT_UPDATE_REQUEST, watchUpdateMovementRequest);
  yield takeLatest(actionTypes.MOVEMENT_DELETE_REQUEST, watchDeleteMovementRequest);
  yield takeLatest(actionTypes.MOVEMENT_INIT, watchInitMovement);
}
