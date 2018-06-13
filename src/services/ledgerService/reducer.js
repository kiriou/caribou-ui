import * as actionTypes from './actionTypes';

export const initialState = () => ({
  all: [],
  currentEdited: -1,
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
      if (state.selectedLedger._id === '') {
        return {
          ...state,
          all: action.ledgers,
          failure: false,
        };
      }
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

    case actionTypes.LEDGER_SWITCH_NAME_FIELD:
      if (state.currentEdited === action.ledgerIndex) {
        return {
          ...state,
          currentEdited: -1,
          isCreation: false,
        };
      }
      return {
        ...state,
        currentEdited: action.ledgerIndex,
        isCreation: false,
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

    case actionTypes.LEDGER_CREATE_FAILURE:
      return {
        ...state,
        failure: true,
      };

    case actionTypes.LEDGER_UPDATE_SUCCESS:
      return {
        ...state,
        failure: false,
        currentEdited: -1,
      };

    case actionTypes.LEDGER_UPDATE_FAILURE:
      return {
        ...state,
        failure: true,
      };

    case actionTypes.LEDGER_DELETE_SUCCESS:
      return {
        ...state,
        failure: false,
      };

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
