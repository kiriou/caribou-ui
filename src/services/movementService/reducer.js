import * as actionTypes from './actionTypes';

export const initialState = () => ({
  all: [],
  selectedMovement: {},
  failure: false,
});

export default (state = initialState(), action) => {
  switch (action.type) {

    case actionTypes.MOVEMENT_LIST_SUCCESS:
      return {
        ...state,
        all: action.movements,
        failure: false,
      };

    case actionTypes.MOVEMENT_LIST_FAILURE:
      return {
        ...state,
        all: [],
        failure: true,
      };

    case actionTypes.MOVEMENT_SELECT:
    case actionTypes.MOVEMENT_INIT_DONE:
      return {
        ...state,
        selectedMovement: action.movement,
      };

    case actionTypes.MOVEMENT_UPDATE_SUCCESS:
      return {
        ...state,
        selectedMovement: action.savedMovement,
        failure: false,
      };

    case actionTypes.MOVEMENT_UPDATE_FAILURE:
      return {
        ...state,
        failure: true,
      };

    case actionTypes.MOVEMENT_DELETE_SUCCESS:
      return {
        ...state,
        failure: false,
      };

    case actionTypes.MOVEMENT_DELETE_FAILURE:
      return {
        ...state,
        failure: true,
      };

    default:
      return state;
  }
};
