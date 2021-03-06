import { connect } from 'react-redux';

import { formUpdate, submitForm } from '../../../services/ledgerFormService/actions';
import { deleteLedgerRequest } from '../../../services/ledgerService/actions';

import LedgerForm from './ledgerForm';

function mapStateToProps(state) {
  return {
    form: state.ledgerFormServiceReducer.form,
    formErrors: state.ledgerFormServiceReducer.formErrors,
  };
}

function dispatchToProps(dispatch) {
  return {
    formUpdate: (fieldName, fieldValue) => dispatch(formUpdate(fieldName, fieldValue)),
    submitForm: (form) => dispatch(submitForm(form)),
    deleteLedger: () => dispatch(deleteLedgerRequest()),
  };
}

export default connect(mapStateToProps, dispatchToProps)(LedgerForm);