import { connect } from 'react-redux';

import { getLedgerListRequest, selectLedger } from '../../services/ledgerService/actions';
import LedgerSelect from './ledgerSelect';

function mapStateToProps(state) {
  return {
    ledgers: state.ledgerServiceReducer.all,
  };
}

export default connect(mapStateToProps, { getLedgerListRequest, selectLedger })(LedgerSelect);

