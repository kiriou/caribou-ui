import React, { Component } from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Reorder from 'material-ui/svg-icons/action/reorder';
import Home from 'material-ui/svg-icons/action/home';
import FaceHome from 'material-ui/svg-icons/action/face';
import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import ActionBook from 'material-ui/svg-icons/action/book';
import ActionSwapHoriz from 'material-ui/svg-icons/action/swap-horiz';
import { Divider } from 'material-ui';


export default class MainMenu extends Component {
  render() {
    return (
      <div className="menu">
        <IconMenu
          iconButtonElement={<IconButton><Reorder /></IconButton>}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
          <MenuItem primaryText="Home" leftIcon={<Home />} containerElement={<Link to="/home" />} />
          <MenuItem primaryText="Accounts" leftIcon={<ActionSupervisorAccount />} containerElement={<Link to="/accounts" />} />
          <MenuItem primaryText="Movements" leftIcon={<ActionSwapHoriz />} containerElement={<Link to="/movements" />} />
          <MenuItem primaryText="Ledgers" leftIcon={<ActionBook />} containerElement={<Link to="/ledgers" />} />
          <Divider />
          <MenuItem primaryText="My account" leftIcon={<FaceHome />} containerElement={<Link to="/userProfile" />} />
        </IconMenu>
      </div>
    );
  }
}
