import { reduxForm } from 'redux-form';

import { createAccountRequest, updateAccountRequest } from '../../../services/accountService/actions';
import AccountForm from './accountForm';

const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/** Fonction de validation du formulaire. */
function validate(values) {
  const errors = {};

  if (!values.lastname) {
    errors.lastname = 'Le nom est obligatoire';
  }
  if (!values.firstname) {
    errors.firstname = 'Le prénom est obligatoire';
  }
  if (!values.email) {
    errors.email = 'L\'e-mail est obligatoire';
  }
  if (values.email && !values.email.match(EMAIL_PATTERN)) {
    errors.email = 'L\'e-mail est invalide';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    initialValues: state.accountReducer.selectedAccount,
  };
}

export default reduxForm({
  form: 'CreateAccountForm',
  fields: ['_id', 'lastname', 'firstname', 'email'],
  validate,
}, mapStateToProps, { createAccountRequest, updateAccountRequest })(AccountForm);
