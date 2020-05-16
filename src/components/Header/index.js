import React from 'react';

import './Header.scss';

class Header extends React.Component {
  render() {
    const {
      status = 'super admin',
      name = 'super admin',
    } = this.props;

    return (
      <div className="header">
        <img className="img bell" src="bell.png" alt="bell" />
        <div className="avatar">
          <div className="status">{status}</div>
          <div className="name">{name}</div>
        </div>
        <img className="img avatar-icon" src="avatar-icon.png" alt="avatar icon" />
      </div>
    )
  } 
}

export default Header;
