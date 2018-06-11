import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const propTypes = {
  getMovementListRequest: PropTypes.func.isRequired,
  movements: PropTypes.array.isRequired,
  selectMovement: PropTypes.func.isRequired,
  deleteMovementRequest: PropTypes.func.isRequired,
  initMovement: PropTypes.func.isRequired,
};

class MovementList extends Component {

  constructor(props) {
    super(props);
    this.renderMovement = this.renderMovement.bind(this);
  }

  /** Component init. */
  componentWillMount() {
    this.props.getMovementListRequest();
  }

  renderMovement(movement) {
    return (
      // eslint-disable-next-line no-underscore-dangle
      <tr key={movement._id}>
        <td>{movement.name}</td>
        <td>{movement.amount} {movement.currency}</td>
        <td>{movement.owner}</td>
        <td>{movement.recipients.join(', ')}</td>
        <td>
          <Link to="movements/edit">
            <button color="primary" onClick={() => this.props.selectMovement(movement)}><i className="fa fa-pencil" /></button>
          </Link>
          <button color="danger" onClick={() => this.props.deleteMovementRequest(movement._id, this.deleteSuccessCallback, this.deleteErrorCallback)}>
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    );
  }

  /** Affichage du composant. */
  render() {
    return (
      <div>
        <div className="row">
          <h3>Liste des mouvements</h3>
          <Link to={'movements/new'}>
            <button color="primary" className="pull-xs-right" onClick={() => this.props.initMovement()}><i className="fa fa-plus" /></button>
          </Link>
        </div>
        <div className="row">
          <table striped hover>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Montant</th>
                <th>Payeur</th>
                <th>Bénéficiaires</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.movements.map(this.renderMovement)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

MovementList.propTypes = propTypes;
export default MovementList;
