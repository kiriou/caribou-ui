import { fork } from 'redux-saga/effects';

import accountService from '../services/accountService/index';
import accountFormService from '../services/accountFormService/index';
import ledgerService from '../services/ledgerService/index';
import ledgerFormService from '../services/ledgerFormService/index';
import movementService from '../services/movementService/index';
import userService from '../services/userService/index';
import userFormService from '../services/userFormService/index';

export default function* root() {
  yield fork(accountService);
  yield fork(accountFormService);
  yield fork(ledgerService);
  yield fork(ledgerFormService);
  yield fork(movementService);
  yield fork(userService);
  yield fork(userFormService);
}
