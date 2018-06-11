import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  getLedgerListRequest: PropTypes.func.isRequired,
  selectLedger: PropTypes.func.isRequired,
  ledgers: PropTypes.array.isRequired,
};

class LedgerSelect extends Component {
  componentDidMount() {
    this.props.getLedgerListRequest();
  }

  render() {
    return (
      <div>
        {/* <FormGroup>
          <Label for="ledgerSelect" sm={6}>Livre de compte</Label>
          <Col sm={6}>
            <Input type="select" name="select" id="ledgerSelect" onChange={event => this.props.selectLedger(event.target.value)}>
              {this.props.ledgers.map(ledger => <option key={ledger._id} value={ledger._id}>{ledger.name}</option>)}
            </Input>
          </Col>
        </FormGroup> */}
      </div>
    );
  }
}

LedgerSelect.propTypes = propTypes;
export default LedgerSelect;
