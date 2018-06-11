import React from 'react';

import MovementForm from '../../forms/movementForm/index';

const MovementEdit = () => (
  <div>
    <h2>Modifier un compte</h2>
    <MovementForm formMode="UPDATE" />
  </div>
  );

export default MovementEdit;
