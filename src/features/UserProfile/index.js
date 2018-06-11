import { connect } from 'react-redux';
import UserProfile from './userProfile';

import { getUser, getUserInfo } from '../../services/userService/actions';

export default connect(null, {
  getUser: () => getUser(),
  getUserInfo: () => getUserInfo(),
})(UserProfile);
