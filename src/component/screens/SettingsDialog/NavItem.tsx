import './NavItem.scss';
import React from 'react';

type Props = {
  active: boolean;
  onClicked: () => void;
}

export class NavItem extends React.Component<Props> {

  public render() {
    return (
      <li
        className={`nav-item ${this.props.active ? 'active' : ''}`}
        onClick={() => this.props.onClicked()}
      >
        <div className='nav-item__content'>
          { this.props.children }
        </div>
      </li>
    );
  }
}
