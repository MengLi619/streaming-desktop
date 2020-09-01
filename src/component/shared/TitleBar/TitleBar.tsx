import './TitleBar.scss';
import React from 'react';
import { isMac } from '../../../common/util';

type Props = {
  title: string;
  onCloseClicked: () => void;
}

export class TitleBar extends React.Component<Props> {

  public render() {
    return (
      <div className={`titlebar night-theme ${isMac() && 'titlebar-mac'}`}>
        <div className='titlebar-title'>{this.props.title}</div>
        <div className='titlebar-actions'>
          <i className={`icon-close titlebarAction`} onClick={() => this.props.onCloseClicked()} />
        </div>
      </div>
    );
  }
}
