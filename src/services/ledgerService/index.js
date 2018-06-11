import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import { ROOT_URL, LEDGER_URL_EXT } from '../../core/api';
import * as actions from './actions';

export function* watchGetLedgerListRequest() {
  try {
    // const response = yield call(axios.get, `${ROOT_URL}${LEDGER_URL_EXT}`);

    // BEGIN MOCK
    const response = {
      data: [
        {
          _id: '1234',
          name: 'Voyage Norvège',
        },
        {
          _id: '5678',
          name: 'Vie quotidienne Malakoff',
        },
        {
          _id: '9101',
          name: 'Vie quotidienne Montréal',
        },
      ],
    };
    // END MOCK

    yield put(actions.getLedgerListSuccess(response.data));
  } catch (e) {
    yield put(actions.getLedgerListFailure(e.message));
  }
}

export function* watchCreateLedgerRequest(action) {
  try {
    const ledger = action.newLedger;
    const response = yield call(axios.post, `${ROOT_URL}${LEDGER_URL_EXT}`, ledger);

    // BEGIN MOCK
    // const response = {
    //   data: {
    //     _id: `${Math.floor((Math.random() * 10000) + 1)}`,
    //     name: ledger.name,
    //   },
    // };
    // END MOCK

    yield put(actions.createLedgerSuccess(response.data, action.successCallback));
    yield put(push('/ledgers'));
  } catch (e) {
    yield put(actions.createLedgerFailure(e.message, action.errorCallBack));
  }
}

export function* watchUpdateLedgerRequest(action) {
  try {
    const ledger = action.updatedLedger;
    const response = yield call(axios.put, `${ROOT_URL}${LEDGER_URL_EXT}${ledger._id}`, ledger);

    // BEGIN MOCK
    // const response = {
    //   data: ledger,
    // };
    // END MOCK

    yield put(actions.updateLedgerSuccess(response.data, action.successCallback));
  } catch (e) {
    yield put(actions.updateLedgerFailure(e.message, action.errorCallBack));
  }
}

export function* watchDeleteLedgerRequest(action) {
  try {
    yield call(axios.delete, `${ROOT_URL}${LEDGER_URL_EXT}${action.ledgerId}`);
    yield put(actions.getLedgerListRequest());
    yield put(actions.deleteLedgerSuccess(action.successCallback));
  } catch (e) {
    yield put(actions.deleteLedgerFailure(e.message, action.errorCallBack));
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

export default function* rootSaga() {
  yield takeLatest(actionTypes.LEDGER_LIST_REQUEST, watchGetLedgerListRequest);
  yield takeLatest(actionTypes.LEDGER_CREATE_REQUEST, watchCreateLedgerRequest);
  yield takeLatest([actionTypes.LEDGER_CREATE_SUCCESS, actionTypes.LEDGER_UPDATE_SUCCESS, actionTypes.LEDGER_DELETE_SUCCESS], watchSuccessCallback);
  yield takeLatest([actionTypes.LEDGER_CREATE_FAILURE, actionTypes.LEDGER_UPDATE_FAILURE, actionTypes.LEDGER_DELETE_FAILURE], watchErrorCallback);
  yield takeLatest(actionTypes.LEDGER_UPDATE_REQUEST, watchUpdateLedgerRequest);
  yield takeLatest(actionTypes.LEDGER_DELETE_REQUEST, watchDeleteLedgerRequest);
}
