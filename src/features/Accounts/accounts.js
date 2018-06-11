import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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

const propTypes = {
  getAccountListRequest: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  selectAccount: PropTypes.func.isRequired,
  deleteAccountRequest: PropTypes.func.isRequired,
  initAccount: PropTypes.func.isRequired,
};

class Accounts extends Component {

  constructor(props) {
    super(props);
    this.renderAccount = this.renderAccount.bind(this);
  }

  componentWillMount() {
    this.props.getAccountListRequest();
  }

  renderAccount(account) {
    return (
      // eslint-disable-next-line no-underscore-dangle
      <TableRow key={account._id}>
        <TableRowColumn>{account.lastname}</TableRowColumn>
        <TableRowColumn>{account.firstname}</TableRowColumn>
        <TableRowColumn>
          <IconButton onClick={() => this.props.selectAccount(account)} containerElement={<Link to="accounts/edit" />}>
            <ModeEdit />
          </IconButton>
          <IconButton onClick={() => this.props.deleteAccountRequest(account._id, this.deleteSuccessCallback, this.deleteErrorCallback)}>
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
          <h3>Accounts list</h3>
          <IconButton onClick={() => this.props.initAccount()} containerElement={<Link to="accounts/new" />}>
            <ContentAdd />
          </IconButton>
        </div>
        <div className="row">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Lastname</TableHeaderColumn>
                <TableHeaderColumn>Firstname</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.accounts.map(this.renderAccount)}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

Accounts.propTypes = propTypes;
export default Accounts;
