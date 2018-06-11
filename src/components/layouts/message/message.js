import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  content: PropTypes.string,
};

const defaultProps = {
  type: 'infos',
  content: '',
};

const Message = (props) => {
  const { type, content } = props;

  const icons = {
    success: 'fa-check',
    warning: 'fa-exclamation-triangle',
    error: 'fa-times',
    info: 'fa-exclamation-circle',
  };

  return (
    <div className={`message ${type}`}>
      <i className={`fa ${icons[type]}`} />
      {content}
    </div>
  );
};

Message.defaultProps = defaultProps;
Message.propTypes = propTypes;

export default Message;
