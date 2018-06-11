import { reduxForm } from 'redux-form';

import { updateLedgerRequest, createLedgerRequest } from '../../services/ledgerService/actions';
import LedgerEdit from './ledgerEdit';

/** Fonction de validation du formulaire. */
function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Le nom est obligatoire';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    initialValues: state.ledgerServiceReducer.selectedLedger,
  };
}

export default reduxForm({
  form: 'LedgerEditForm',
  fields: ['_id', 'name'],
  validate,
}, mapStateToProps, { updateLedgerRequest, createLedgerRequest })(LedgerEdit);
