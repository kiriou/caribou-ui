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

export function createLedgerRequest() {
  return {
    type: actionTypes.LEDGER_CREATE_REQUEST,
  };
}

export function createLedgerSuccess() {
  return {
    type: actionTypes.LEDGER_CREATE_SUCCESS,
  };
}

export function createLedgerFailure(error) {
  return {
    type: actionTypes.LEDGER_CREATE_FAILURE,
    error,
  };
}

export function updateLedgerRequest() {
  return {
    type: actionTypes.LEDGER_UPDATE_REQUEST,
  };
}

export function updateLedgerSuccess(savedLedger) {
  return {
    type: actionTypes.LEDGER_UPDATE_SUCCESS,
    savedLedger,
  };
}

export function updateLedgerFailure(error) {
  return {
    type: actionTypes.LEDGER_UPDATE_FAILURE,
    error,
  };
}

export function deleteLedgerRequest() {
  return {
    type: actionTypes.LEDGER_DELETE_REQUEST,
  };
}

export function deleteLedgerSuccess(ledgerId) {
  return {
    type: actionTypes.LEDGER_DELETE_SUCCESS,
    ledgerId,
  };
}

export function deleteLedgerFailure(error) {
  return {
    type: actionTypes.LEDGER_DELETE_FAILURE,
    error,
  };
}

export function addLedger() {
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
