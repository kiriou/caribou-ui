import { connect } from 'react-redux';

import { selectLedger, addLedger } from '../../../services/ledgerService/actions';
import { initForm } from '../../../services/ledgerFormService/actions';

import UserLedgers from './userLedgers';


function mapStateToProps(state) {
  return {
    ledgers: state.ledgerServiceReducer.all,
    errorCode: state.userServiceReducer.errorCode,
  };
}

function dispatchToProps(dispatch) {
  return {
    selectLedger: (ledger) => dispatch(selectLedger(ledger)),
    addLedger: () => dispatch(addLedger()),
    initForm: (ledger) => dispatch(initForm(ledger)),
  };
}

export default connect(mapStateToProps, dispatchToProps)(UserLedgers);
