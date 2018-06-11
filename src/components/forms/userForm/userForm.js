import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FaceHome from 'material-ui/svg-icons/action/face';
import ContentSave from 'material-ui/svg-icons/content/save';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { cyan500 } from 'material-ui/styles/colors';

import './style.css';

const propTypes = {
  form: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    thirdLine: PropTypes.string,
    oldPassword: PropTypes.string,
    newPassword: PropTypes.string,
    confirmNewPassword: PropTypes.string,
  }).isRequired,
  formErrors: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    thirdLine: PropTypes.string,
    oldPassword: PropTypes.string,
    newPassword: PropTypes.string,
    confirmNewPassword: PropTypes.string,
  }).isRequired,

  formUpdate: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  switchToReadMode: PropTypes.func.isRequired,
};

const iconStyle = {
  width: 40,
  height: 40,
  marginTop: 15,
};

const UserForm = (props) => {
  const { form, formErrors, formUpdate, submitForm, switchToReadMode } = props;
  const { lastname, firstname, email, phoneNumber, firstLine, secondLine, thirdLine, oldPassword, newPassword, confirmNewPassword } = form;

  const onChange = (event) => {
    formUpdate(event.target.name, event.target.value);
  };

  return (
    <div>
      <div className="userInformations__title">
        <FaceHome color={cyan500} style={iconStyle} />
        <TextField
        id="user-form__firstname"
        name="firstname"
        floatingLabelText=""
        value={firstname}
        onChange={onChange}
        errorText={formErrors.firstname}
      />
      <TextField
        id="user-form__lastname"
        name="lastname"
        floatingLabelText=""
        value={lastname}
        onChange={onChange}
        errorText={formErrors.lastname}
      />
      </div>
      <TextField
        id="user-form__email"
        name="email"
        floatingLabelText="E-mail"
        value={email}
        onChange={onChange}
        errorText={formErrors.email}
      />
      <TextField
        id="user-form__phoneNumber"
        name="phoneNumber"
        floatingLabelText="Phone number"
        value={phoneNumber}
        onChange={onChange}
        errorText={formErrors.phoneNumber}
      />
      <TextField
        id="user-form__address-first-line"
        name="firstLine"
        floatingLabelText="Address - first line"
        value={firstLine}
        onChange={onChange}
        errorText={formErrors.firstLine}
      />
      <TextField
        id="user-form__address-second-line"
        name="secondLine"
        floatingLabelText="Address - second line"
        value={secondLine}
        onChange={onChange}
        errorText={formErrors.secondLine}
      />
      <TextField
        id="user-form__address-third-line"
        name="thirdLine"
        floatingLabelText="Address - third line"
        value={thirdLine}
        onChange={onChange}
        errorText={formErrors.thirdLine}
      />
      <TextField
        id="user-form__oldPassword"
        name="oldPassword"
        floatingLabelText="Your old password"
        value={oldPassword}
        onChange={onChange}
        type="password"
        errorText={formErrors.oldPassword}
      />
      <TextField
        id="user-form__newPassword"
        name="newPassword"
        floatingLabelText="Your new password"
        value={newPassword}
        onChange={onChange}
        type="password"
        errorText={formErrors.newPassword}
      />
      <TextField
        id="user-form__confirmNewPassword"
        name="confirmNewPassword"
        floatingLabelText="Confirm your new password"
        value={confirmNewPassword}
        onChange={onChange}
        type="password"
        errorText={formErrors.confirmNewPassword}
      />
      <div className="user-form__button-group">
        <FlatButton label="Cancel" default icon={<ArrowBack />} onClick={() => switchToReadMode()} />
        <FlatButton label="Save" primary icon={<ContentSave />} onClick={() => submitForm(form)} />
      </div>
    </div>
  );
};

UserForm.propTypes = propTypes;
export default UserForm;
