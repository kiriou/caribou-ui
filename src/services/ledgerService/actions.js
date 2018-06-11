import * as actionTypes from './actionTypes';

export function getLedgerListRequest() {
  return {
    type: actionTypes.LEDGER_LIST_REQUEST,
  };
}

export function getLedgerListSuccess(ledgers) {
  return {
    type: actionTypes.LEDGER_LIST_SUCCESS,
    ledgers,
  };
}

export function getLedgerListFailure(error) {
  return {
    type: actionTypes.LEDGER_LIST_FAILURE,
    error,
  };
}

export function createLedgerRequest(newLedger, successCallback, errorCallBack) {
  return {
    type: actionTypes.LEDGER_CREATE_REQUEST,
    newLedger,
    successCallback,
    errorCallBack,
  };
}

export function createLedgerSuccess(ledger, successCallback) {
  return {
    type: actionTypes.LEDGER_CREATE_SUCCESS,
    ledger,
    successCallback,
  };
}

export function createLedgerFailure(error, errorCallback) {
  return {
    type: actionTypes.LEDGER_CREATE_FAILURE,
    error,
    errorCallback,
  };
}

export function updateLedgerRequest(updatedLedger, successCallback, errorCallBack) {
  return {
    type: actionTypes.LEDGER_UPDATE_REQUEST,
    updatedLedger,
    successCallback,
    errorCallBack,
  };
}

export function updateLedgerSuccess(savedLedger, successCallback) {
  return {
    type: actionTypes.LEDGER_UPDATE_SUCCESS,
    savedLedger,
    successCallback,
  };
}

export function updateLedgerFailure(error, errorCallback) {
  return {
    type: actionTypes.LEDGER_UPDATE_FAILURE,
    error,
    errorCallback,
  };
}

export function deleteLedgerRequest(ledgerId, successCallback, errorCallBack) {
  return {
    type: actionTypes.LEDGER_DELETE_REQUEST,
    ledgerId,
    successCallback,
    errorCallBack,
  };
}

export function deleteLedgerSuccess(successCallback) {
  return {
    type: actionTypes.LEDGER_DELETE_SUCCESS,
    successCallback,
  };
}

export function deleteLedgerFailure(error, errorCallback) {
  return {
    type: actionTypes.LEDGER_DELETE_FAILURE,
    error,
    errorCallback,
  };
}

export function switchDisplayNameField(ledgerIndex) {
  return {
    type: actionTypes.LEDGER_SWITCH_NAME_FIELD,
    ledgerIndex,
  };
}

export function switchToCreate() {
  return {
    type: actionTypes.LEDGER_SWITCH_CREATION,
  };
}

export function selectLedger(ledger) {
  return {
    type: actionTypes.LEDGER_SELECT,
    ledger,
  };
}
