import * as actionTypes from './actionTypes';

export const initialState = () => ({
  form: {
    lastname: '',
    firstname: '',
    email: '',
  },
  formErrors: {
    lastname: '',
    firstname: '',
    email: '',
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.ACCOUNT_FORM_INIT_FORM_DONE:
      return {
        ...state,
        form: action.form,
      };
    case actionTypes.ACCOUNT_FORM_UPDATE_DONE:
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
