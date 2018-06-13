import { connect } from 'react-redux';
import UserProfile from './userProfile';

import { getUser, getUserInfo } from '../../services/userService/actions';

function mapStateToProps(state) {
  return {
    selectedLedger: state.ledgerServiceReducer.selectedLedger,
    isLedgerCreation: state.ledgerServiceReducer.isCreation,
  };
}

export default connect(mapStateToProps, {
  getUser: () => getUser(),
  getUserInfo: () => getUserInfo(),
})(UserProfile);
