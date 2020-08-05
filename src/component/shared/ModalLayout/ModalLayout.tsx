import './ModalLayout.scss';
import React from 'react';
import { getOS, OS } from '../../../util/operating-systems';
import { THEME } from '../../../util/constants';
import { cancelDialog } from '../../../util/dialog';

type Props = {
  className?: string;
  onModalDone: () => void;
};

export class ModalLayout extends React.Component<Props> {

  public render() {
    return (
      <div id='mainWrapper' className={
        `this.props.className || '' modal-layout has-titlebar ${THEME} ${getOS() === OS.Mac ? 'modal-layout-mac' : ''}`
      }>
        <div className={'modal-layout-content'}>
          {this.props.children}
        </div>
        <div className="modal-layout-controls">
          <button className="button button--default" onClick={() => this.cancel()}>Cancel</button>
          <button className="button button--action" onClick={() => this.done()}>Done</button>
        </div>
      </div>
    );
  };

  private cancel() {
    cancelDialog();
  };

  private done() {
    this.props.onModalDone();
  };
}
