import React from 'react';

import Menu from './menu';
import LedgerSelect from '../containers/ledgerSelect/index';

const Header = () => (
  <div className="header">
    <Menu />
    <div>
      <h2>CARIBOU</h2>
    </div>
    <div>
      <LedgerSelect />
    </div>
  </div>
    );

export default Header;
