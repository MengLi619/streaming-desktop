import './SideNav.scss';
import React from 'react';
import { ipcRenderer } from 'electron';

export class SideNav extends React.Component {

  public render() {
    return (
      <div className='side-nav'>
        <div className='container'>
          <div className='bottom-tools'>
            <div
              title='External'
              className='cell'
              onClick={() => this.onExternalClicked()}
            >
              <i className="fas fa-th-large" aria-hidden="true"/>
            </div>
            <div
              title='Logout'
              className='cell'
              onClick={() => this.onExitClicked()}
            >
              <i className='fas fa-sign-out-alt'/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onExternalClicked() {
    ipcRenderer.send('showExternalWindow');
  }

  private onExitClicked() {
    ipcRenderer.send('exit');
  }
}
