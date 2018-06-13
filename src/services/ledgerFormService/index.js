import { put, takeLatest, select } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { updateUser } from '../userService/actions';

import { validateFields, validateForm } from './helper';

export function* watchInitForm(action) {
  let form = null;

  if(action.ledger) {
    form = {
      name: action.ledger.name,
    };
  }
  else {
    form = {
      name: '',
    };
  }

  yield put(actions.initFormDone(form));
}

export function* watchUpdate(action) {
  const formErrors = (yield select()).userFormServiceReducer.formErrors;
  const form = (yield select()).userFormServiceReducer.form;

  formErrors[action.fieldName] = validateFields[action.fieldName](action.fieldValue, form);

  yield put(actions.formUpdateDone(action.fieldName, action.fieldValue, formErrors));
}

export function* watchFormSubmit(action) {
  if(validateForm(action.form)){
    yield put(updateUser(action.form));
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.LEDGER_FORM_INIT_FORM, watchInitForm);
  yield takeLatest(actionTypes.LEDGER_FORM_UPDATE, watchUpdate);
  yield takeLatest(actionTypes.LEDGER_FORM_SUBMIT, watchFormSubmit);
}
