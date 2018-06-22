import { connect } from 'react-redux';

import { addAccount } from '../../../services/accountService/actions';
import { initForm } from '../../../services/accountFormService/actions';

import AccountsHeader from './accountsHeader';


function mapStateToProps(state) {
  return {};
}

function dispatchToProps(dispatch) {
  return {
    addAccount: () => dispatch(addAccount()),
    initForm: () => dispatch(initForm()),
  };
}

export default connect(mapStateToProps, dispatchToProps)(AccountsHeader);
