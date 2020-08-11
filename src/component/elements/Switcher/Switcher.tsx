import './Switcher.scss'
import React from 'react';
import { PVWKeyboard } from './PVWKeyboard';
import { PGMSKeyboard } from './PGMKeyboard';
import { TransitionView } from './TransitionView';

export class Switcher extends React.Component {

  public render() {
    return (
      <div className='Switcher'>
        <div className='switcher-header'>
          <h2>导播切换</h2>
          <button className='button--trans'>编辑场景</button>
        </div>
        <div className='switcher-content'>
          <div className='switcher-keyboard'>
            <PVWKeyboard />
            <PGMSKeyboard />
          </div>
          <div className='switcher-transition'>
            <TransitionView />
          </div>
        </div>
      </div>
    );
  }
}
