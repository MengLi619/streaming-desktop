import './NavMenu.scss';
import React from 'react';

export class NavMenu extends React.Component {

  public render() {
    return (
      <ul className="nav-menu">
        {this.props.children}
      </ul>
    );
  }
}
