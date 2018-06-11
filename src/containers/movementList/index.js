import { connect } from 'react-redux';

import { getMovementListRequest, selectMovement, deleteMovementRequest, initMovement } from '../../services/movementService/actions';
import MovementList from './movementList';

function mapStateToProps(state) {
  return {
    movements: state.movementReducer.all,
  };
}


export default connect(mapStateToProps, { getMovementListRequest, selectMovement, deleteMovementRequest, initMovement })(MovementList);
