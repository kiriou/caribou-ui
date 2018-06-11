import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import accountReducer from '../services/accountService/reducer';
import ledgerServiceReducer from '../services/ledgerService/reducer';
import ledgerFormServiceReducer from '../services/ledgerFormService/reducer';
import movementReducer from '../services/movementService/reducer';
import userServiceReducer from '../services/userService/reducer';
import userFormServiceReducer from '../services/userFormService/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  accountReducer,
  ledgerServiceReducer,
  ledgerFormServiceReducer,
  movementReducer,
  userServiceReducer,
  userFormServiceReducer,
});

export default rootReducer;
