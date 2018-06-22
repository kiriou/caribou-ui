import { put, takeLatest, select } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';

import { createAccountRequest, updateAccountRequest } from '../accountService/actions';

export function* watchInitForm(action) {
  let form = null;

  if(action.account) {
    form = {
      lastname: action.account.lastname,
      firstname: action.account.firstname,
      email: action.account.email,
    };
  }
  else {
    form = {
      lastname: '',
      firstname: '',
      email: '',
    };
  }

  yield put(actions.initFormDone(form));
}

export function* watchUpdate(action) {
  // const formErrors = (yield select()).userFormServiceReducer.formErrors;
  // const form = (yield select()).userFormServiceReducer.form;

  // formErrors[action.fieldName] = validateFields[action.fieldName](action.fieldValue, form);

  // yield put(actions.formUpdateDone(action.fieldName, action.fieldValue, formErrors));
}

export function* watchFormSubmit(action) {
  // const {isCreation} = (yield select()).ledgerServiceReducer;
  // if(validateForm(action.form)){
  //   if(isCreation) {
  //     yield put(createLedgerRequest());
  //   }
  //   else {
  //     yield put(updateLedgerRequest());
  //   }
  // }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.ACCOUNT_FORM_INIT_FORM, watchInitForm);
  yield takeLatest(actionTypes.ACCOUNT_FORM_UPDATE, watchUpdate);
  yield takeLatest(actionTypes.ACCOUNT_FORM_SUBMIT, watchFormSubmit);
}