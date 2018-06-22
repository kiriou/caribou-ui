import React from 'react';
import PropTypes from 'prop-types';

import indexOf from 'lodash/indexOf';
import keys from 'lodash/keys';

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { cyan400, transparent } from 'material-ui/styles/colors';

import './style.css';

const propTypes = {
  accounts: PropTypes.object.isRequired,

  selectAccount: PropTypes.func.isRequired,
  initForm: PropTypes.func.isRequired,
};

const defaultProps = {};

const AccountList = (props) => {
  const { accounts } = props;
  const { selectAccount, initForm } = props;

  const editAccount = (account) => {
    selectAccount(account);
    initForm(account);
  };

  const renderAccountItem = (account, isFirst, letter) => {
    if (isFirst) {
      return (
        <ListItem
          key={account._id}
          primaryText={`${account.firstname} ${account.lastname}`}
          insetChildren={true}
          onClick={() => editAccount(account)}
          leftAvatar={
            <Avatar color={cyan400} backgroundColor={transparent}>{letter}</Avatar>}
        />
      );
    }
    return (
      <ListItem
        key={account._id}
        primaryText={`${account.firstname} ${account.lastname}`}
        insetChildren={true}
        onClick={() => editAccount(account)}
      />
    );
  };

  const renderAccountSubList = (accountsByLetter, letter) => {
    return (
      <List key={letter}>
        {accountsByLetter.map(((account) => renderAccountItem(account, indexOf(accountsByLetter, account) === 0, letter)))}
      </List>
    );
  };

  const letters = keys(accounts);

  return (
    <div className="account-list">
      {letters.map(letter => renderAccountSubList(accounts[letter], letter))}
    </div>
  );
};

AccountList.defaultProps = defaultProps;
AccountList.propTypes = propTypes;

export default AccountList;
