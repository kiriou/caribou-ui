import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ActionBook from 'material-ui/svg-icons/action/book';

import Message from '../../layouts/message/index';
import LedgerForm from '../../forms/ledgerForm/index';

import { GENERIC_ERROR } from '../../../core/messages';

import './style.css';

const propTypes = {
  ledgers: PropTypes.array.isRequired,
  errorCode: PropTypes.string,
  selectedLedger: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),

  selectLedger: PropTypes.func.isRequired,
  initForm: PropTypes.func.isRequired,
};

const defaultProps = {
  errorCode: '',
  selectedLedger: null,
};

const UserLedgers = (props) => {
  const { ledgers, errorCode, selectedLedger, selectLedger, initForm } = props;

  const editLedger = (ledger) => {
    selectLedger(ledger);
    initForm(ledger);
  };

  const ledgerButton = ledger => (
    <RaisedButton label={ledger.name} primary key={ledger._id} icon={<ActionBook />} onClick={() => editLedger(ledger)}/>
  );

  return (
    <div className="user-ledgers">
      {(errorCode === '') &&
        <div>
          <div>
            <h1>My ledgers</h1>
          </div>
          <div className="user-ledgers__button-list" >
            {ledgers.map(ledgerButton)}
          </div>
        </div>
      }
      {(errorCode !== '') &&
        <Message type="error" content={GENERIC_ERROR[errorCode]} />
      }
      {(selectedLedger !== null && selectedLedger._id !== '') &&
        <LedgerForm />
      }
    </div>
  );
};

UserLedgers.defaultProps = defaultProps;
UserLedgers.propTypes = propTypes;

export default UserLedgers;
