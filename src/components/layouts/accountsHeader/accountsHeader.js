import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './style.css';

const propTypes = {
  addAccount: PropTypes.func.isRequired,
  initForm: PropTypes.func.isRequired,
};

const AccountsHeader = (props) => {
  const { addAccount, initForm } = props;

  const addNewAccount = () => {
    addAccount();
    initForm();
  };

  return (
    <div className="accounts-header">
      <div>
        <h3>Liste des comptes</h3>
      </div>
      <div className="accounts__button-add">
        <FloatingActionButton mini={true} onClick={addNewAccount}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  );
};

AccountsHeader.propTypes = propTypes;

export default AccountsHeader;
