import * as actionTypes from './actionTypes';

/**
 * Action creator to get movement list.
 * @return MOVEMENT_LIST_REQUEST action type
 */
export function getMovementListRequest() {
  return {
    type: actionTypes.MOVEMENT_LIST_REQUEST,
  };
}

/**
 * Action creator to get movement list success.
 * @param {array} movements movement list.
 * @return MOVEMENT_LIST_SUCCESS action type.
 */
export function getMovementListSuccess(movements) {
  return {
    type: actionTypes.MOVEMENT_LIST_SUCCESS,
    movements,
  };
}

/**
 * Action creator to get movement list failure.
 * @param {string} error error which occured.
 * @return MOVEMENT_LIST_FAILURE action type.
 */
export function getMovementListFailure(error) {
  return {
    type: actionTypes.MOVEMENT_LIST_FAILURE,
    error,
  };
}

/**
 * Action creator to create movement.
 * @param {object} newMovement movement to create.
 * @param {function} successCallback callback on success.
 * @param {function} errorCallback callback on failure.
 * @return MOVEMENT_CREATE_REQUEST action type
 */
export function createMovementRequest(newMovement, successCallback, errorCallBack) {
  return {
    type: actionTypes.MOVEMENT_CREATE_REQUEST,
    newMovement,
    successCallback,
    errorCallBack,
  };
}

/**
 * Action creator to create movement success.
 * @param {object} movement movement created.
 * @param {function} successCallback callback on success.
 * @return MOVEMENT_CREATE_SUCCESS action type
 */
export function createMovementSuccess(movement, successCallback) {
  return {
    type: actionTypes.MOVEMENT_CREATE_SUCCESS,
    movement,
    successCallback,
  };
}

/**
 * Action creator to create movement failure.
 * @param {string} error error which occured.
 * @param {function} errorCallback callback on failure.
 * @return MOVEMENT_CREATE_FAILURE action type
 */
export function createMovementFailure(error, errorCallback) {
  return {
    type: actionTypes.MOVEMENT_CREATE_FAILURE,
    error,
    errorCallback,
  };
}

/**
 * Action creator to update movement.
 * @param {object} updatedMovement movement to save.
 * @param {function} successCallback callback on success.
 * @param {function} errorCallback callback on failure.
 * @return MOVEMENT_UPDATE_REQUEST action type
 */
export function updateMovementRequest(updatedMovement, successCallback, errorCallBack) {
  return {
    type: actionTypes.MOVEMENT_UPDATE_REQUEST,
    updatedMovement,
    successCallback,
    errorCallBack,
  };
}

/**
 * Action creator to update movement success.
 * @param {object} savedMovement movement saved.
 * @param {function} successCallback callback on success.
 * @return MOVEMENT_UPDATE_SUCCESS action type
 */
export function updateMovementSuccess(savedMovement, successCallback) {
  return {
    type: actionTypes.MOVEMENT_UPDATE_SUCCESS,
    savedMovement,
    successCallback,
  };
}

/**
 * Action creator to update movement failure.
 * @param {string} error error which occured.
 * @param {function} errorCallback callback on failure.
 * @return MOVEMENT_UPDATE_FAILURE action type
 */
export function updateMovementFailure(error, errorCallback) {
  return {
    type: actionTypes.MOVEMENT_UPDATE_FAILURE,
    error,
    errorCallback,
  };
}

/**
 * Action creator to delete movement.
 * @param {string} movementId movement to delete id.
 * @param {function} successCallback callback on success.
 * @param {function} errorCallback callback on failure.
 * @return MOVEMENT_DELETE_REQUEST action type
 */
export function deleteMovementRequest(movementId, successCallback, errorCallBack) {
  return {
    type: actionTypes.MOVEMENT_DELETE_REQUEST,
    movementId,
    successCallback,
    errorCallBack,
  };
}

/**
 * Action creator to delete movement success.
 * @param {function} successCallback callback on success.
 * @return MOVEMENT_DELETE_SUCCESS action type
 */
export function deleteMovementSuccess(successCallback) {
  return {
    type: actionTypes.MOVEMENT_DELETE_SUCCESS,
    successCallback,
  };
}

/**
 * Action creator to delete movement failure.
 * @param {string} error error which occured.
 * @param {function} errorCallback callback on failure.
 * @return MOVEMENT_DELETE_FAILURE action type
 */
export function deleteMovementFailure(error, errorCallback) {
  return {
    type: actionTypes.MOVEMENT_DELETE_FAILURE,
    error,
    errorCallback,
  };
}

/**
 * Action creator to select an movement.
 * @param {object} movement selected movement.
 * @return MOVEMENT_SELECT action type
 */
export function selectMovement(movement) {
  return {
    type: actionTypes.MOVEMENT_SELECT,
    movement,
  };
}

/**
 * Action creator to init a movement.
 * @return MOVEMENT_INIT action type
 */
export function initMovement() {
  return {
    type: actionTypes.MOVEMENT_INIT,
  };
}

/**
 * Action creator to initialization done.
 * @param movement new movement.
 * @return MOVEMENT_INIT_DONE action type
 */
export function initMovementDone(movement) {
  return {
    type: actionTypes.MOVEMENT_INIT_DONE,
    movement,
  };
}
