import { reduxForm } from 'redux-form';

import { updateMovementRequest, createMovementRequest } from '../../../services/movementService/actions';
import MovementForm from './movementForm';

/** Fonction de validation du formulaire. */
function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Le nom est obligatoire';
  }

  if (values.amount === null || values.amount === 0) {
    errors.amount = 'Le montant est obligatoire';
  }

  if (!values.currency) {
    errors.currency = 'La devise est obligatoire';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    initialValues: state.movementReducer.selectedMovement,
    accounts: state.accountReducer.all,
  };
}

export default reduxForm({
  form: 'MovementEditForm',
  fields: [
    '_id',
    'name',
    'description',
    'owner',
    'recipients',
    'amount',
    'way',
    'currency',
    'category',
    'frequencyType',
    'frequencyPattern',
    'startPeriod',
    'endPeriod'],
  validate,
}, mapStateToProps, { updateMovementRequest, createMovementRequest })(MovementForm);
