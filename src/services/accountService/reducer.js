import * as actionTypes from './actionTypes';

export const initialState = () => ({
  all: {},
  selectedAccount: {},
  failure: false,
});

export default (state = initialState(), action) => {
  switch (action.type) {

    case actionTypes.ACCOUNT_LIST_SUCCESS:
      return {
        ...state,
        all: action.accounts,
        failure: false,
      };

    case actionTypes.ACCOUNT_LIST_FAILURE:
      return {
        ...state,
        all: {},
        failure: true,
      };

    case actionTypes.ACCOUNT_SELECT:
    case actionTypes.ACCOUNT_INIT_DONE:
      return {
        ...state,
        selectedAccount: action.account,
      };

    case actionTypes.ACCOUNT_UPDATE_SUCCESS:
      return {
        ...state,
        selectedAccount: action.savedAccount,
        failure: false,
      };

    case actionTypes.ACCOUNT_UPDATE_FAILURE:
    case actionTypes.ACCOUNT_DELETE_FAILURE:
      return {
        ...state,
        failure: true,
      };

    case actionTypes.ACCOUNT_DELETE_SUCCESS:
      return {
        ...state,
        failure: false,
      };

    default:
      return state;
  }
};
