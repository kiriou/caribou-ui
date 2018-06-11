import React from 'react';

import MovementForm from '../../forms/movementForm/index';

const MovementNew = () => (
  <div>
    <h2>Ajouter un mouvement</h2>
    <MovementForm formMode="CREATE" />
  </div>
  );

export default MovementNew;
