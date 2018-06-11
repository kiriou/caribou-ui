import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import { TYPE_FREQUENCY, TYPE_FREQUENCY_LIST, WAY } from '../../../core/constants';

const propTypes = {
  accounts: PropTypes.array.isRequired,
  fields: PropTypes.object.isRequired,
  formMode: PropTypes.string.isRequired,

  handleSubmit: PropTypes.func.isRequired,
  updateMovementRequest: PropTypes.func.isRequired,
  createMovementRequest: PropTypes.func.isRequired,
};

const MovementForm = (props) => {
  const { fields: { name, description, owner, recipients, amount, way, currency,
    category, frequencyType, frequencyPattern, startPeriod, endPeriod }, handleSubmit } = props;

  const { accounts, formMode } = props;

  const { updateMovementRequest, createMovementRequest } = props;

  const onFrequencyTypeChange = (event) => {
    if (event.target.value === TYPE_FREQUENCY.SINGLE) {
      frequencyPattern.onChange('');
      endPeriod.onChange(moment());
    }
    frequencyType.onChange(event.target.value);
  };

    /** Soumission du formulaire. */
  const onSubmit = (values) => {
    if (formMode === 'UPDATE') {
      updateMovementRequest(values);
    }
    if (formMode === 'CREATE') {
      createMovementRequest(values);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(() => onSubmit(props.values))} noValidate>
        <div>
          <div>
            <div className={name.touched && name.invalid ? 'has-danger' : ''} >
              <label htmlFor="name">Nom</label>
              <input id="name" type="text" className="form-control" {...name} />
              <p>{name.touched ? name.error : ''}</p>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="category">Catégorie</label>
              <input id="category" type="text" className="form-control" {...category} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="description">Description</label>
              <input id="description" type="textarea" className="form-control" {...description} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="owner">Payeur</label>
              <input id="owner" type="select" className="form-control" {...owner} >
                {accounts.map(account => <option key={account._id} value={account._id}>{account.firstname} {account.lastname}</option>)}
              </input>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="recipients">Destinataire(s)</label>
              <input id="recipients" type="text" className="form-control" {...recipients} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="way">Sens</label>
              <input id="way" type="select" className="form-control" {...way} >
                {WAY.map(wayItem => <option key={wayItem.code} value={wayItem.code}>{wayItem.label}</option>)}
              </input>
            </div>
          </div>
          <div>
            <div className={amount.touched && amount.invalid ? 'has-danger' : ''}>
              <label htmlFor="amount">Montant</label>
              <input id="amount" type="number" className="form-control" {...amount} />
              <p>{amount.touched ? amount.error : ''}</p>
            </div>
          </div>
          <div>
            <div className={currency.touched && currency.invalid ? 'has-danger' : ''}>
              <label htmlFor="currency">Devise</label>
              <input id="currency" type="text" className="form-control" {...currency} />
              <p>{currency.touched ? currency.error : ''}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="frequencyType">Type de fréquence</label>
              <input id="frequencyType" type="select" className="form-control" {...frequencyType} onChange={onFrequencyTypeChange}>
                {TYPE_FREQUENCY_LIST.map(type => <option key={type.code} value={type.code}>{type.label}</option>)}
              </input>
            </div>
          </div>
          {frequencyType.value === TYPE_FREQUENCY.RECURRENT &&
            <div>
              <div>
                <label htmlFor="frequencyPattern">Pattern de récurrence</label>
                <input id="frequencyPattern" type="text" className="form-control" {...frequencyPattern} />
              </div>
            </div>
          }
          <div>
            <div>
              {frequencyType.value === TYPE_FREQUENCY.SINGLE &&
                <label htmlFor="startPeriod">Date</label>
              }
              {frequencyType.value === TYPE_FREQUENCY.RECURRENT &&
                <label htmlFor="startPeriod">Date de début</label>
              }
              <DatePicker
                id-="startPeriod"
                {...startPeriod}
                selected={moment(startPeriod.value, 'DD/MM/YYYY')}
                onChange={date => startPeriod.onChange(moment(date))}
                locale="fr"
              />
            </div>
          </div>
          {frequencyType.value === TYPE_FREQUENCY.RECURRENT &&
            <div>
              <div>
                <label htmlFor="endPeriod">Date de fin</label>
                <DatePicker
                  id-="endPeriod"
                  {...endPeriod}
                  selected={moment(endPeriod.value, 'DD/MM/YYYY')}
                  onChange={date => endPeriod.onChange(moment(date))}
                  locale="fr"
                />
              </div>
            </div>
          }
        </div>
        <div>
          <button type="submit" color="primary" className="pull-right">Submit</button>
          <Link to="/movements" className="btn btn-secondary pull-right">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

MovementForm.propTypes = propTypes;

export default MovementForm;
