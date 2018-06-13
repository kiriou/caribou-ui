import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentAdd from 'material-ui/svg-icons/content/add';

import LedgerEdit from '../ledgerEdit/index';

const propTypes = {
  getLedgerListRequest: PropTypes.func.isRequired,
  ledgers: PropTypes.array.isRequired,
  deleteLedgerRequest: PropTypes.func.isRequired,
  currentEdited: PropTypes.number.isRequired,
  switchDisplayNameField: PropTypes.func.isRequired,
  switchToCreate: PropTypes.func,
  isCreation: PropTypes.bool.isRequired,
};

class LedgerList extends Component {
  constructor(props) {
    super(props);
    this.renderLedger = this.renderLedger.bind(this);
  }

  componentWillMount() {
    this.props.getLedgerListRequest();
  }

  renderLedger(ledger) {
    return (
      // eslint-disable-next-line no-underscore-dangle
      <TableRow key={ledger._id}>
        {this.props.ledgers.indexOf(ledger) === this.props.currentEdited &&
          <TableRowColumn><LedgerEdit isCreation={false} formKey={`LedgerEditForm${this.props.ledgers.indexOf(ledger)}`} /></TableRowColumn>
        }
        {this.props.ledgers.indexOf(ledger) !== this.props.currentEdited &&
          <TableRowColumn>{ledger.name}</TableRowColumn>
        }
        <TableRowColumn>
          <IconButton onClick={() => this.props.switchDisplayNameField(this.props.ledgers.indexOf(ledger))}>
            <ModeEdit />
          </IconButton>
          <IconButton onClick={() => this.props.deleteLedgerRequest(ledger._id, this.deleteSuccessCallback, this.deleteErrorCallback)}>
            <ActionDelete />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }

  render() {
    return (
      <div>
        <div className="row">
          <h3>Ledgers list</h3>
        </div>
        {!this.props.isCreation &&
          <div className="row">
          <IconButton onClick={() => this.props.switchToCreate()}>
            <ContentAdd />
          </IconButton>
          </div>
        }
        {this.props.isCreation &&
          <div className="row">
            <LedgerEdit formKey="LedgerCreateForm" isCreation />
          </div>
        }
        <div className="row">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.ledgers.map(this.renderLedger)}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

LedgerList.propTypes = propTypes;
export default LedgerList;
