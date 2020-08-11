import './ModalLayout.scss';
import React from 'react';
import { isMac } from '../../../common/util';

type Props = {
  className?: string;
  onCancelClicked: () => void;
  onDoneClicked: () => void;
};

export class ModalLayout extends React.Component<Props> {

  public render() {
    return (
      <div
        id='mainWrapper'
        className={`modal-layout has-titlebar night-theme ${this.props.className} ${isMac() ? 'modal-layout-mac' : ''}`}>
        <div className='modal-layout-content'>
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
    this.props.onCancelClicked();
  };

  private done() {
    this.props.onDoneClicked();
  };
}
