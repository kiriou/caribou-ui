import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const propTypes = {
  children: PropTypes.object.isRequired,
};

const App = props => (
  <div>
    <Header />
    <div>{props.children}</div>
  </div>
);

App.propTypes = propTypes;
export default App;
