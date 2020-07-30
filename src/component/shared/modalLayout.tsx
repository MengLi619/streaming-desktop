import React from 'react';
import { getOS, OS } from '../../util/operating-systems';
import { THEME } from '../../util/constants';

export class ModalLayout extends React.Component {

  cancel = () => {
  };

  done = () => {
  };

  render() {
    return (
      <div id='mainWrapper' className={
          `modal-layout has-titlebar ${THEME} ${getOS() === OS.Mac ? 'modal-layout-mac' : ''}`
        }>
        <div className={'modal-layout-content'}>
          {this.props.children}
        </div>
        <div className="modal-layout-controls">
          <button className="button button--default" onClick={this.cancel}>Cancel</button>
          <button className="button button--action" onClick={this.done}>Done</button>
        </div>
      </div>
    )
  };
}
