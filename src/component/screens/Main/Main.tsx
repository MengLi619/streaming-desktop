import './Main.scss';
import React from 'react';
import { SideNav } from './SideNav';
import { HeadNav } from './HeadNav';

export class Main extends React.Component {

  render() {
    return (
      <div className="main night-theme">
        <HeadNav />
        <div className='main-contents main-contents--right'>
          <div className="main-middle" ref="mainMiddle">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
