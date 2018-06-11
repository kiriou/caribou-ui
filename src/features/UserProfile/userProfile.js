import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserInformations from '../../components/layouts/userInformations/index';
import UserLedgers from '../../components/layouts/userLedgers/index';

import './style.css';

class UserProfile extends Component {

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getUserInfo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getUserInfo();
  }

  render() {
    return (
      <div className="userProfile">
        <UserInformations />
        <UserLedgers />
      </div>
    );
  }
}

export default UserProfile;
