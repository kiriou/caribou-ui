import { connect } from 'react-redux';

import { getLedgerListRequest, deleteLedgerRequest } from '../../services/ledgerService/actions';
import LedgerList from './ledgerList';

function mapStateToProps(state) {
  return {
    ledgers: state.ledgerServiceReducer.all,
    currentEdited: state.ledgerServiceReducer.currentEdited,
    isCreation: state.ledgerServiceReducer.isCreation,
  };
}


export default connect(mapStateToProps, { getLedgerListRequest, deleteLedgerRequest })(LedgerList);
