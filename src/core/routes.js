import React from 'react';
import { Route } from 'react-router';

import App from '../components/app';
import Home from '../containers/home';

import MovementList from '../containers/movementList/index';
import AccountNew from '../components/layouts/accountNew/index';
import AccountEdit from '../components/layouts/accountEdit/index';
import LedgerList from '../containers/ledgerList/index';
import MovementEdit from '../components/layouts/movementEdit/index';
import MovementNew from '../components/layouts/movementNew/index';

import Accounts from '../features/Accounts/index';
import UserProfile from '../features/UserProfile/index';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="accounts" component={Accounts} />
    <Route path="movements" component={MovementList} />
    <Route path="ledgers" component={LedgerList} />
    <Route path="accounts/new" component={AccountNew} />
    <Route path="accounts/edit" component={AccountEdit} />
    <Route path="movements/edit" component={MovementEdit} />
    <Route path="movements/new" component={MovementNew} />
    <Route path="userProfile" component={UserProfile} />
  </Route>
);
