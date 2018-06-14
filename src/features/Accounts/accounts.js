import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccountList from '../../components/layouts/accountList/index';

import './style.css';

const propTypes = {
  accounts: PropTypes.object.isRequired,
};

class Accounts extends Component {

  componentWillMount() {
    this.props.getAccountListRequest();
  }

  render() {
    return (
      <div>
        <div>
          <h3>Liste des comptes</h3>
        </div>
        <div className="accounts-content">
          <AccountList accounts={this.props.accounts}/>
        </div>
      </div>
    );
  }
}

Accounts.propTypes = propTypes;
export default Accounts;
