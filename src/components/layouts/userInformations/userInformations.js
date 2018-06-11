import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import FaceHome from 'material-ui/svg-icons/action/face';
import { cyan500 } from 'material-ui/styles/colors';
import ContentCreate from 'material-ui/svg-icons/content/create';

import UserForm from '../../forms/userForm/index';
import Message from '../../layouts/message/index';

import { GENERIC_ERROR } from '../../../core/messages';

import './style.css';

const propTypes = {
  user: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
  }).isRequired,
  userInformations: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    postalAddress: PropTypes.shape({
      firstLine: PropTypes.string,
      secondLine: PropTypes.string,
      thirdLine: PropTypes.string,
    }),
  }).isRequired,
  errorCode: PropTypes.string,
  userEdition: PropTypes.bool.isRequired,

  switchToEditionMode: PropTypes.func.isRequired,
  initForm: PropTypes.func.isRequired,
};

const defaultProps = {
  errorCode: '',
};

const iconStyle = {
  width: 40,
  height: 40,
  marginTop: 15,
};

const UserInformations = (props) => {
  const { user, userInformations, errorCode, userEdition } = props;

  const { switchToEditionMode, initForm } = props;

  const { lastname, firstname } = user;
  const { email, phoneNumber, postalAddress } = userInformations;

  const openEditionMode = () => {
    initForm(user, userInformations);
    switchToEditionMode();
  };

  return (
    <div className="userInformations">
      {(errorCode === '' && !userEdition) &&
        <div>
          <div className="userInformations__title">
            <FaceHome color={cyan500} style={iconStyle} />
            <h1>{`${firstname} ${lastname}`}</h1>
          </div>

          <p>E-mail</p>
          <p><b>{email}</b></p>

          <p>Phone number</p>
          <p><b>{phoneNumber}</b></p>

          <p>Postal address</p>
          <p><b>{postalAddress.firstLine}</b></p>
          <p><b>{postalAddress.secondLine}</b></p>
          <p><b>{postalAddress.thirdLine}</b></p>

          <p>Password</p>
          <p><b>*********</b></p>

          <FlatButton label="Edit" primary icon={<ContentCreate />} onClick={openEditionMode} />
        </div>
      }
      {(errorCode === '' && userEdition) &&
        <div>
          <UserForm />
        </div>
      }
      {(errorCode !== '') &&
        <Message type="error" content={GENERIC_ERROR[errorCode]} />
      }
    </div>
  );
};

UserInformations.defaultProps = defaultProps;
UserInformations.propTypes = propTypes;

export default UserInformations;
