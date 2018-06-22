import { connect } from 'react-redux';

import { selectAccount, addAccount } from '../../../services/accountService/actions';
import { initForm } from '../../../services/accountFormService/actions';

import AccountList from './accountList';

function dispatchToProps(dispatch) {
  return {
    selectAccount: (account) => dispatch(selectAccount(account)),
    addAccount: () => dispatch(addAccount()),
    initForm: (account) => dispatch(initForm(account)),
  };
}

export default connect(null, dispatchToProps)(AccountList);
