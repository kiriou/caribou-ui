import { connect } from 'react-redux';

import { getAccountListRequest, selectAccount, deleteAccountRequest, initAccount } from '../../services/accountService/actions';
import Accounts from './accounts';

function mapStateToProps(state) {
  return {
    accounts: state.accountReducer.all,
  };
}


export default connect(mapStateToProps, { getAccountListRequest, selectAccount, deleteAccountRequest, initAccount })(Accounts);
