import { connect } from 'react-redux';

import { formUpdate, submitForm } from '../../../services/userFormService/actions';
import { switchToReadMode } from '../../../services/userService/actions';

import UserForm from './userForm';

function mapStateToProps(state) {
  return {
    form: state.userFormServiceReducer.form,
    formErrors: state.userFormServiceReducer.formErrors,
  };
}

export default connect(mapStateToProps, { formUpdate, submitForm, switchToReadMode })(UserForm);
