import * as actionTypes from './actionTypes';

export function getUser() {
  return {
    type: actionTypes.USER_GET_USER_REQUEST,
  };
}

export function getUserSuccess(user) {
  return {
    type: actionTypes.USER_GET_USER_SUCCESS,
    user,
  };
}

export function getUserFailure(errorCode) {
  return {
    type: actionTypes.USER_GET_USER_FAILURE,
    errorCode,
  };
}

export function getUserInfo() {
  return {
    type: actionTypes.USER_GET_USER_INFO_REQUEST,
  };
}

export function getUserInfoSuccess(userInfo) {
  return {
    type: actionTypes.USER_GET_USER_INFO_SUCCESS,
    userInfo,
  };
}

export function getUserInfoFailure(errorCode) {
  return {
    type: actionTypes.USER_GET_USER_INFO_FAILURE,
    errorCode,
  };
}

export function switchToEditionMode() {
  return {
    type: actionTypes.USER_SWITCH_TO_EDITION_MODE,
  };
}

export function switchToReadMode() {
  return {
    type: actionTypes.USER_SWITCH_TO_READ_MODE,
  };
}

export function updateUser(userForm){
  return {
    type: actionTypes.USER_UPDATE_USER_REQUEST,
    userForm,
  };
}