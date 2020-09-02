import './OutputSettingDialog.scss';
import React from 'react';
import { DialogProps } from '../../../types/dialog';
import { ModalLayout } from '../../shared/ModalLayout/ModalLayout';

export type OutputSetting = {
  url: string;
};

type OutputSettingDialogProps = DialogProps<OutputSetting>;

type OutputSettingDialogState = {
  url?: string;
};

export class OutputSettingDialog extends React.Component<OutputSettingDialogProps, OutputSettingDialogState> {
  constructor(props: OutputSettingDialogProps) {
    super(props);
    this.state = {
      url: this.props.defaultValue?.url,
    };
  }

  public render() {
    return (
      <ModalLayout
        className='modal-layout--w-side-menu'
        onDoneClicked={() => this.onModalDone()}
        onCancelClicked={() => this.props.onModalCancel()}
      >
        <div className='form-groups'>
          <div className='section'>
            <div className='.section-content'>
              <div className='input-label'>
                <p >Output URL:</p>
              </div>
              <div className='input-body'>
                <input
                  className='fill-width no-outline'
                  type="text"
                  value={this.state.url}
                  onChange={event => this.onUrlChanged(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </ModalLayout>
    );
  }

  private onUrlChanged(url: string) {
    this.setState({
      url: url,
    });
  }

  private onModalDone() {
    if (this.state.url) {
      this.props.onModalDone({ url: this.state.url });
    }
  }
}
