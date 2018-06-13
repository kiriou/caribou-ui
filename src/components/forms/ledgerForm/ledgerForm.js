import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ContentSave from 'material-ui/svg-icons/content/save';

import './style.css';

const propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  formErrors: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,

  formUpdate: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

const LedgerForm = (props) => {
  const { form, formErrors, formUpdate, submitForm } = props;

  const { name } = form;

  const onChange = (event) => {
    formUpdate(event.target.name, event.target.value);
  };

  return (
    <div className="ledger-form">
      <TextField
        id="ledger-form__name"
        name="name"
        floatingLabelText="Name"
        value={name}
        onChange={onChange}
        errorText={formErrors.name}
      />

      <div className="ledger-form__button-group">
        <FlatButton label="Save" primary icon={<ContentSave />} onClick={() => submitForm(form)} />
      </div>
    </div>
  );
};

LedgerForm.propTypes = propTypes;

export default LedgerForm;
