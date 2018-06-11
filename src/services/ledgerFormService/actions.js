import * as actionTypes from './actionTypes';

export function initForm(ledger) {
  return {
    type: actionTypes.LEDGER_FORM_INIT_FORM,
    ledger,
  };
}

export function initFormDone(form) {
  return {
    type: actionTypes.LEDGER_FORM_INIT_FORM_DONE,
    form,
  };
}

export function formUpdate(fieldName, fieldValue) {
  return {
    type: actionTypes.LEDGER_FORM_UPDATE,
    fieldName,
    fieldValue,
  };
}

export function formUpdateDone(fieldName, fieldValue, formErrors) {
  return {
    type: actionTypes.LEDGER_FORM_UPDATE_DONE,
    fieldName,
    fieldValue,
    formErrors,
  };
}

export function submitForm(form) {
  return {
    type: actionTypes.LEDGER_FORM_SUBMIT,
    form,
  };
}
