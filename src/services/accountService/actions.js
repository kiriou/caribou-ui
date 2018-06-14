import * as actionTypes from './actionTypes';

export function getAccountListRequest() {
  return {
    type: actionTypes.ACCOUNT_LIST_REQUEST,
  };
}

export function getAccountListSuccess(accounts) {
  return {
    type: actionTypes.ACCOUNT_LIST_SUCCESS,
    accounts,
  };
}

export function getAccountListFailure(error) {
  return {
    type: actionTypes.ACCOUNT_LIST_FAILURE,
    error,
  };
}

export function createAccountRequest(newAccount) {
  return {
    type: actionTypes.ACCOUNT_CREATE_REQUEST,
    newAccount,
  };
}

export function createAccountSuccess(account) {
  return {
    type: actionTypes.ACCOUNT_CREATE_SUCCESS,
    account,
  };
}

export function createAccountFailure(error) {
  return {
    type: actionTypes.ACCOUNT_CREATE_FAILURE,
    error,
  };
}

export function updateAccountRequest(updatedAccount) {
  return {
    type: actionTypes.ACCOUNT_UPDATE_REQUEST,
    updatedAccount,
  };
}

export function updateAccountSuccess(savedAccount) {
  return {
    type: actionTypes.ACCOUNT_UPDATE_SUCCESS,
    savedAccount,
  };
}

export function updateAccountFailure(error) {
  return {
    type: actionTypes.ACCOUNT_UPDATE_FAILURE,
    error,
  };
}

export function deleteAccountRequest(accountId) {
  return {
    type: actionTypes.ACCOUNT_DELETE_REQUEST,
    accountId,
  };
}

export function deleteAccountSuccess() {
  return {
    type: actionTypes.ACCOUNT_DELETE_SUCCESS,
  };
}

export function deleteAccountFailure(error) {
  return {
    type: actionTypes.ACCOUNT_DELETE_FAILURE,
    error,
  };
}

export function selectAccount(account) {
  return {
    type: actionTypes.ACCOUNT_SELECT,
    account,
  };
}

export function initAccount() {
  return {
    type: actionTypes.ACCOUNT_INIT,
  };
}

export function initAccountDone(account) {
  return {
    type: actionTypes.ACCOUNT_INIT_DONE,
    account,
  };
}
