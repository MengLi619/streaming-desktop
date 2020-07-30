import React from 'react';
import './main.scss';
import { SideNav } from './sideNav';

export class Main extends React.Component {

  render() {
    return (
      <div className="main night-theme">
        <div className='main-contents main-contents--right'>
          <SideNav />
          <div className="main-middle" ref="mainMiddle">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
