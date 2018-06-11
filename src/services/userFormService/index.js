import { put, takeLatest, select } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { updateUser } from '../userService/actions';

import { validateFields, validateForm } from './helper';

export function* watchInitForm(action) {
  const form = {
    firstname: action.user.firstname,
    lastname: action.user.lastname,
    email: action.userInformations.email,
    phoneNumber: action.userInformations.phoneNumber,
    firstLine: action.userInformations.postalAddress.firstLine,
    secondLine: action.userInformations.postalAddress.secondLine,
    thirdLine: action.userInformations.postalAddress.thirdLine,
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

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
  yield takeLatest(actionTypes.USER_FORM_INIT_FORM, watchInitForm);
  yield takeLatest(actionTypes.USER_FORM_UPDATE, watchUpdate);
  yield takeLatest(actionTypes.USER_FORM_SUBMIT, watchFormSubmit);
}
