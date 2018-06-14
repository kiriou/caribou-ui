import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from './actionTypes';
import { ROOT_URL, LEDGER_URL_EXT } from '../../core/api';
import * as actions from './actions';

export function* watchGetLedgerListRequest() {
  try {
    const response = yield call(axios.get, `${ROOT_URL}${LEDGER_URL_EXT}`);

    // BEGIN MOCK
    // const response = {
    //   data: [
    //     {
    //       _id: '1234',
    //       name: 'Voyage Norvège',
    //     },
    //     {
    //       _id: '5678',
    //       name: 'Vie quotidienne Malakoff',
    //     },
    //     {
    //       _id: '9101',
    //       name: 'Vie quotidienne Montréal',
    //     },
    //   ],
    // };
    // END MOCK

    yield put(actions.getLedgerListSuccess(response.data.data));
  } catch (e) {
    yield put(actions.getLedgerListFailure(e.message));
  }
}

export function* watchCreateLedgerRequest(action) {
  try {
    const { form } = (yield select()).ledgerFormServiceReducer;
    yield call(axios.post, `${ROOT_URL}${LEDGER_URL_EXT}`, form);

    // BEGIN MOCK
    // const response = {
    //   data: {
    //     _id: `${Math.floor((Math.random() * 10000) + 1)}`,
    //     name: ledger.name,
    //   },
    // };
    // END MOCK

    yield put(actions.getLedgerListRequest());
    yield put(actions.createLedgerSuccess());
  } catch (e) {
    yield put(actions.createLedgerFailure(e.message));
  }
}

export function* watchUpdateLedgerRequest(action) {
  try {
    const { form } = (yield select()).ledgerFormServiceReducer;
    const { selectedLedger } = (yield select()).ledgerServiceReducer;
    selectedLedger.name = form.name;
    yield call(axios.put, `${ROOT_URL}${LEDGER_URL_EXT}${selectedLedger._id}`, selectedLedger);

    // BEGIN MOCK
    // const response = {
    //   data: ledger,
    // };
    // END MOCK

    yield put(actions.getLedgerListRequest());
    yield put(actions.updateLedgerSuccess());
  } catch (e) {
    yield put(actions.updateLedgerFailure(e.message));
  }
}

export function* watchDeleteLedgerRequest(action) {
  try {
    const { selectedLedger } = (yield select()).ledgerServiceReducer;
    yield call(axios.delete, `${ROOT_URL}${LEDGER_URL_EXT}${selectedLedger._id}`);
    yield put(actions.deleteLedgerSuccess(selectedLedger._id));
  } catch (e) {
    yield put(actions.deleteLedgerFailure(e.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.LEDGER_LIST_REQUEST, watchGetLedgerListRequest);
  yield takeLatest(actionTypes.LEDGER_CREATE_REQUEST, watchCreateLedgerRequest);
  yield takeLatest(actionTypes.LEDGER_UPDATE_REQUEST, watchUpdateLedgerRequest);
  yield takeLatest(actionTypes.LEDGER_DELETE_REQUEST, watchDeleteLedgerRequest);
}
