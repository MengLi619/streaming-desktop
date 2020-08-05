import './TitleBar.scss';
import electron from 'electron';
import React from 'react';
import { THEME } from '../../../util/constants';
import { isMac } from '../../../util/operating-systems';

type Props = {
  title: string;
}

export class TitleBar extends React.Component<Props> {

  minimize() {
    electron.remote.getCurrentWindow().minimize();
  }

  get isMaximizable() {
    return electron.remote.getCurrentWindow().isMaximizable();
  }

  maximize() {
    const win = electron.remote.getCurrentWindow();
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }

  close() {
    electron.remote.getCurrentWindow().close();
  }

  get theme() {
    return THEME;
  }

  render() {
    return (
      <div className={`titlebar ${this.theme} ${isMac() && 'titlebar-mac'}`}>
        <div className='titlebar-title'>{this.props.title}</div>
        <div className='titlebar-actions'>
          <i className={`icon-close titlebarAction`} onClick={() => this.close()} />
        </div>
      </div>
    );
  }
}
