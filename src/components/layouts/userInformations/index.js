import { connect } from 'react-redux';
import { switchToEditionMode } from '../../../services/userService/actions';
import { initForm } from '../../../services/userFormService/actions';
import UserInformations from './userInformations';


function mapStateToProps(state) {
  return {
    user: state.userServiceReducer.user,
    userInformations: state.userServiceReducer.userInformations,
    errorCode: state.userServiceReducer.errorCode,
    userEdition: state.userServiceReducer.userEdition,
  };
}

export default connect(mapStateToProps, { switchToEditionMode, initForm })(UserInformations);
