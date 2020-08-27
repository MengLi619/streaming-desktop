import './SideNav.scss';
import React from 'react';
import { ipcRenderer } from 'electron';
import * as isDev from 'electron-is-dev';

export class SideNav extends React.Component {

  public render() {
    return (
      <div className='side-nav'>
        <div className='container'>
          <div className='bottom-tools'>
            {
              isDev && 
              <div 
                title='Dev Tools'
                className='cell' 
                onClick={() => this.onDevToolClicked()} 
              >
                <i className="icon-developer" />
              </div>
            }
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

  private onDevToolClicked() {
    ipcRenderer.send('openDevTools');
  }
  
  private onExternalClicked() {
    ipcRenderer.send('showExternalWindow');
  }

  private onExitClicked() {
    ipcRenderer.send('exit');
  }
}
