import * as actionTypes from './actionTypes';

/**
 * Action creator to get account list.
 * @return ACCOUNT_LIST_REQUEST action type
 */
export function getAccountListRequest() {
  return {
    type: actionTypes.ACCOUNT_LIST_REQUEST,
  };
}

/**
 * Action creator to get account list success.
 * @param {array} accounts account list.
 * @return ACCOUNT_LIST_SUCCESS action type.
 */
export function getAccountListSuccess(accounts) {
  return {
    type: actionTypes.ACCOUNT_LIST_SUCCESS,
    accounts,
  };
}

/**
 * Action creator to get account list failure.
 * @param {string} error error which occured.
 * @return ACCOUNT_LIST_FAILURE action type.
 */
export function getAccountListFailure(error) {
  return {
    type: actionTypes.ACCOUNT_LIST_FAILURE,
    error,
  };
}

/**
 * Action creator to create account.
 * @param {object} newAccount account to create.
 * @param {function} successCallback callback on success.
 * @param {function} errorCallback callback on failure.
 * @return ACCOUNT_CREATE_REQUEST action type
 */
export function createAccountRequest(newAccount, successCallback, errorCallBack) {
  return {
    type: actionTypes.ACCOUNT_CREATE_REQUEST,
    newAccount,
    successCallback,
    errorCallBack,
  };
}

/**
 * Action creator to create account success.
 * @param {object} account account created.
 * @param {function} successCallback callback on success.
 * @return ACCOUNT_CREATE_SUCCESS action type
 */
export function createAccountSuccess(account, successCallback) {
  return {
    type: actionTypes.ACCOUNT_CREATE_SUCCESS,
    account,
    successCallback,
  };
}

/**
 * Action creator to create account failure.
 * @param {string} error error which occured.
 * @param {function} errorCallback callback on failure.
 * @return ACCOUNT_CREATE_FAILURE action type
 */
export function createAccountFailure(error, errorCallback) {
  return {
    type: actionTypes.ACCOUNT_CREATE_FAILURE,
    error,
    errorCallback,
  };
}

/**
 * Action creator to update account.
 * @param {object} updatedAccount account to save.
 * @param {function} successCallback callback on success.
 * @param {function} errorCallback callback on failure.
 * @return ACCOUNT_UPDATE_REQUEST action type
 */
export function updateAccountRequest(updatedAccount, successCallback, errorCallBack) {
  return {
    type: actionTypes.ACCOUNT_UPDATE_REQUEST,
    updatedAccount,
    successCallback,
    errorCallBack,
  };
}

/**
 * Action creator to update account success.
 * @param {object} savedAccount account saved.
 * @param {function} successCallback callback on success.
 * @return ACCOUNT_UPDATE_SUCCESS action type
 */
export function updateAccountSuccess(savedAccount, successCallback) {
  return {
    type: actionTypes.ACCOUNT_UPDATE_SUCCESS,
    savedAccount,
    successCallback,
  };
}

/**
 * Action creator to update account failure.
 * @param {string} error error which occured.
 * @param {function} errorCallback callback on failure.
 * @return ACCOUNT_UPDATE_FAILURE action type
 */
export function updateAccountFailure(error, errorCallback) {
  return {
    type: actionTypes.ACCOUNT_UPDATE_FAILURE,
    error,
    errorCallback,
  };
}

/**
 * Action creator to delete account.
 * @param {string} accountId account to delete id.
 * @param {function} successCallback callback on success.
 * @param {function} errorCallback callback on failure.
 * @return ACCOUNT_DELETE_REQUEST action type
 */
export function deleteAccountRequest(accountId, successCallback, errorCallBack) {
  return {
    type: actionTypes.ACCOUNT_DELETE_REQUEST,
    accountId,
    successCallback,
    errorCallBack,
  };
}

/**
 * Action creator to delete account success.
 * @param {function} successCallback callback on success.
 * @return ACCOUNT_DELETE_SUCCESS action type
 */
export function deleteAccountSuccess(successCallback) {
  return {
    type: actionTypes.ACCOUNT_DELETE_SUCCESS,
    successCallback,
  };
}

/**
 * Action creator to delete account failure.
 * @param {string} error error which occured.
 * @param {function} errorCallback callback on failure.
 * @return ACCOUNT_DELETE_FAILURE action type
 */
export function deleteAccountFailure(error, errorCallback) {
  return {
    type: actionTypes.ACCOUNT_DELETE_FAILURE,
    error,
    errorCallback,
  };
}

/**
 * Action creator to select an account.
 * @param {object} account selected account.
 * @return ACCOUNT_SELECT action type
 */
export function selectAccount(account) {
  return {
    type: actionTypes.ACCOUNT_SELECT,
    account,
  };
}

/**
 * Action creator to init an account.
 * @return ACCOUNT_INIT action type
 */
export function initAccount() {
  return {
    type: actionTypes.ACCOUNT_INIT,
  };
}

/**
 * Action creator to initialization done.
 * @param account new movement.
 * @return ACCOUNT_INIT_DONE action type
 */
export function initAccountDone(account) {
  return {
    type: actionTypes.ACCOUNT_INIT_DONE,
    account,
  };
}
