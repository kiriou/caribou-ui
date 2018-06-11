import * as actionTypes from './actionTypes';


export const initialState = () => ({
  user: {
    firstname: '',
    lastname: '',
  },
  userInformations: {
    email: '',
    phoneNumber: '',
    postalAddress: {
      firstLine: '',
      secondLine: '',
      thirdLine: '',
    },
  },
  errorCode: '',
  userEdition: false,
});


export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.USER_GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.USER_GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInformations: action.userInfo,
      };
    case actionTypes.USER_GET_USER_FAILURE:
    case actionTypes.USER_GET_USER_INFO_FAILURE:
      return {
        ...state,
        errorCode: action.errorCode,
      };
    case actionTypes.USER_SWITCH_TO_EDITION_MODE:
      return {
        ...state,
        userEdition: true,
      };
    case actionTypes.USER_SWITCH_TO_READ_MODE:
      return {
        ...state,
        userEdition: false,
      };
    default:
      return state;
  }
};
