import './SideNav.scss';
import React from 'react';
import { ipcRenderer } from 'electron';
import * as isDev from 'electron-is-dev';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/core';

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
            <Popover placement='right'>
              <PopoverTrigger>
                <div
                  title='External'
                  className='cell'
                >
                  <i className="fas fa-th-large" aria-hidden="true"/>
                </div>
              </PopoverTrigger>
              <PopoverContent zIndex={4} className='External-items'>
                <div className='External-item cell' onClick={() => this.onExternalClicked(12)}>
                  <i className="fas fa-th-large" aria-hidden="true"/>
                  <span>12</span>
                </div>
                <div className='External-item cell' onClick={() => this.onExternalClicked(4)}>
                  <i className="fas fa-th-large" aria-hidden="true"/>
                  <span>4</span>
                </div>
              </PopoverContent>
            </Popover>
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

  private onExternalClicked(layouts: number) {
    ipcRenderer.send('showExternalWindow', layouts);
  }

  private onExitClicked() {
    ipcRenderer.send('exit');
  }
}
