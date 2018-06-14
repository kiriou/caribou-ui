import remove from 'lodash/remove';
import * as actionTypes from './actionTypes';

export const initialState = () => ({
  all: [],
  selectedLedger: {
    _id: '',
    name: '',
  },
  failure: false,
  isCreation: false,
});

export default (state = initialState(), action) => {
  switch (action.type) {

    case actionTypes.LEDGER_LIST_SUCCESS:
      return {
        ...state,
        all: action.ledgers,
        failure: false,
      };

    case actionTypes.LEDGER_LIST_FAILURE:
      return {
        ...state,
        all: [],
        failure: true,
      };

    case actionTypes.LEDGER_SWITCH_CREATION:
      return {
        ...state,
        isCreation: true,
      };

    case actionTypes.LEDGER_CREATE_SUCCESS:
      return {
        ...state,
        failure: false,
        isCreation: false,
      };

    case actionTypes.LEDGER_UPDATE_SUCCESS:
      return {
        ...state,
        failure: false,
        selectedLedger: null,
      };

    case actionTypes.LEDGER_DELETE_SUCCESS:
      return {
        ...state,
        failure: false,
        selectedLedger: null,
        all: remove(state.all, (ledger) => ledger._id !== action.ledgerId),
      };


    case actionTypes.LEDGER_CREATE_FAILURE:
    case actionTypes.LEDGER_UPDATE_FAILURE:
    case actionTypes.LEDGER_DELETE_FAILURE:
      return {
        ...state,
        failure: true,
      };

    case actionTypes.LEDGER_SELECT:
      return {
        ...state,
        selectedLedger: action.ledger,
      };

    default:
      return state;
  }
};
