import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  fields: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  formMode: PropTypes.string.isRequired,

  createAccountRequest: PropTypes.func.isRequired,
  updateAccountRequest: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const AccountForm = (props) => {
  const { fields: { firstname, lastname, email }, handleSubmit, formMode } = props;

  const { createAccountRequest, updateAccountRequest } = props;

  /** Soumission du formulaire. */
  const onSubmit = (values) => {
    if (formMode === 'CREATE') {
      createAccountRequest(values);
    }
    if (formMode === 'UPDATE') {
      updateAccountRequest(values);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(() => onSubmit(props.values))} noValidate>
        <div className={`form-group ${lastname.touched && lastname.invalid ? 'has-danger' : ''}`}>
          <label htmlFor={lastname}>Nom</label>
          <input id="lastname" type="text" className="form-control" {...lastname} />
          <div className="text-help">{lastname.touched ? lastname.error : ''}</div>
        </div>
        <div className={`form-group ${firstname.touched && firstname.invalid ? 'has-danger' : ''}`}>
          <label htmlFor={firstname}>Prénom</label>
          <input id="firstname" type="text" className="form-control" {...firstname} />
          <div className="text-help">{firstname.touched ? firstname.error : ''}</div>
        </div>
        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label htmlFor={email}>E-mail</label>
          <input id="email" type="email" className="form-control" {...email} />
          <div className="text-help">{email.touched ? email.error : ''}</div>
        </div>
        <Link to="/accounts" className="btn btn-secondary">Cancel</Link>
        <button type="submit" className="pull-xs-right" color="primary">Submit</button>
      </form>
    </div>
  );
};

AccountForm.propTypes = propTypes;

export default AccountForm;
