import * as actionTypes from './actionTypes';


export const initialState = () => ({
  form: {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    firstLine: '',
    secondLine: '',
    thirdLine: '',
  },
  formErrors: {
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    firstLine: '',
    secondLine: '',
    thirdLine: '',
  },
});


export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.USER_FORM_INIT_FORM_DONE:
      return {
        ...state,
        form: action.form,
      };
    case actionTypes.USER_FORM_UPDATE_DONE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.fieldName]: action.fieldValue,
        },
        formErrors: action.formErrors,
      };
    default:
      return state;
  }
};
