import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserInformations from '../../components/layouts/userInformations/index';
import UserLedgers from '../../components/layouts/userLedgers/index';
import LedgerForm from '../../components/forms/ledgerForm/index';

import './style.css';

class UserProfile extends Component {

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    selectedLedger: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    isLedgerCreation: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    selectedLedger: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getUserInfo();
  }

  render() {

    const {selectedLedger, isLedgerCreation} = this.props;

    return (
      <div className="userProfile">
        <UserInformations />
        <UserLedgers />
        {(isLedgerCreation || (selectedLedger !== null && selectedLedger._id !== '')) &&
          <LedgerForm />
        }
      </div>
    );
  }
}

export default UserProfile;
