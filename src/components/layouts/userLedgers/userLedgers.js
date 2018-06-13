import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionBook from 'material-ui/svg-icons/action/book';

import Message from '../../layouts/message/index';

import { GENERIC_ERROR } from '../../../core/messages';

import './style.css';

const propTypes = {
  ledgers: PropTypes.array.isRequired,
  errorCode: PropTypes.string,

  selectLedger: PropTypes.func.isRequired,
  addLedger: PropTypes.func.isRequired,
  initForm: PropTypes.func.isRequired,
};

const defaultProps = {
  errorCode: '',
};

const UserLedgers = (props) => {
  const { ledgers, errorCode, selectLedger, addLedger, initForm } = props;

  const editLedger = (ledger) => {
    selectLedger(ledger);
    initForm(ledger);
  };

  const addNewLedger = () => {
    addLedger();
    initForm();
  };

  const ledgerButton = ledger => (
    <RaisedButton label={ledger.name} primary key={ledger._id} icon={<ActionBook />} onClick={() => editLedger(ledger)}/>
  );

  return (
    <div className="user-ledgers">
      {(errorCode === '') &&
        <div className="user-ledgers__content">
          <div>
            <h1>My ledgers</h1>
          </div>
          <div className="user-ledgers__button-add">
            <FloatingActionButton mini={true} onClick={addNewLedger}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <div className="user-ledgers__button-list" >
            {ledgers.map(ledgerButton)}
          </div>
        </div>
      }
      {(errorCode !== '') &&
        <Message type="error" content={GENERIC_ERROR[errorCode]} />
      }
    </div>
  );
};

UserLedgers.defaultProps = defaultProps;
UserLedgers.propTypes = propTypes;

export default UserLedgers;
