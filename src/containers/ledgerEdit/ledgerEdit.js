import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  updateLedgerRequest: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  values: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  isCreation: PropTypes.bool.isRequired,
  createLedgerRequest: PropTypes.func.isRequired,
};

const LedgerEdit = (props) => {
  const { fields: { name }, handleSubmit, isCreation } = props;

  const { updateLedgerRequest, createLedgerRequest } = props;

    /** Soumission du formulaire. */
  const onSubmit = () => {
    if (isCreation) {
      createLedgerRequest(props.values);
    } else {
      updateLedgerRequest(props.values);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row">
        <div className={`col-xs-10 form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <input id="name" type="text" className="form-control" {...name} />
          <div className="text-help">{name.touched ? name.error : ''}</div>
        </div>
        <div className="col-xs-2">
          <button type="submit" color="primary" className="closedToInput"><i className="fa fa-floppy-o" /></button>
        </div>
      </div>
    </form>
  );
};

LedgerEdit.propTypes = propTypes;

export default LedgerEdit;
