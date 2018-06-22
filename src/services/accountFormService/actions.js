import * as actionTypes from './actionTypes';

export function initForm(account) {
  return {
    type: actionTypes.ACCOUNT_FORM_INIT_FORM,
    account,
  };
}

export function initFormDone(form) {
  return {
    type: actionTypes.ACCOUNT_FORM_INIT_FORM_DONE,
    form,
  };
}

export function formUpdate(fieldName, fieldValue) {
  return {
    type: actionTypes.ACCOUNT_FORM_UPDATE,
    fieldName,
    fieldValue,
  };
}

export function formUpdateDone(fieldName, fieldValue, formErrors) {
  return {
    type: actionTypes.ACCOUNT_FORM_UPDATE_DONE,
    fieldName,
    fieldValue,
    formErrors,
  };
}

export function submitForm(form) {
  return {
    type: actionTypes.ACCOUNT_FORM_SUBMIT,
    form,
  };
}
