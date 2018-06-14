import { connect } from 'react-redux';

import { getAccountListRequest } from '../../services/accountService/actions';
import Accounts from './accounts';

function mapStateToProps(state) {
  return {
    accounts: state.accountReducer.all,
  };
}


export default connect(mapStateToProps, { getAccountListRequest })(Accounts);
