import React from 'react';

import AccountForm from '../../forms/accountForm/index';

const AccountEdit = () => (
  <div>
    <h2>Modifier un compte</h2>
    <AccountForm formMode="UPDATE" />
  </div>
  );

export default AccountEdit;
