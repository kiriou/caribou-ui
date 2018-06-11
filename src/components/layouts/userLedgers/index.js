import { connect } from 'react-redux';

import { selectLedger } from '../../../services/ledgerService/actions';
import { initForm } from '../../../services/ledgerFormService/actions';

import UserLedgers from './userLedgers';


function mapStateToProps(state) {
  return {
    ledgers: state.ledgerServiceReducer.all,
    errorCode: state.userServiceReducer.errorCode,
    selectedLedger: state.ledgerServiceReducer.selectedLedger,
  };
}

function dispatchToProps(dispatch) {
  return {
    selectLedger: (ledger) => dispatch(selectLedger(ledger)),
    initForm: (ledger) => dispatch(initForm(ledger)),
  };
}

export default connect(mapStateToProps, dispatchToProps)(UserLedgers);
