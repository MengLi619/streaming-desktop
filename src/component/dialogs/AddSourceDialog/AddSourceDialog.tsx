import React from 'react';
import { DialogProps } from '../../../types/dialog';
import { ModalLayout } from '../../shared/ModalLayout/ModalLayout';

export type AddSourceResult = {
  name: string;
  url: string;
  previewUrl: string;
};

type AddSourceDialogProps = DialogProps<AddSourceResult>;

type AddSourceDialogState = {
  name?: string;
  url?: string;
  previewUrl?: string;
};

export class AddSourceDialog extends React.Component<AddSourceDialogProps, AddSourceDialogState> {

  constructor(props: AddSourceDialogProps) {
    super(props);
    this.state = {
      name: this.props.defaultValue?.name,
      url: this.props.defaultValue?.url,
      previewUrl: this.props.defaultValue?.previewUrl,
    };
  }

  public render() {
    return (
      <ModalLayout
        onDoneClicked={() => this.onModalDone()}
        onCancelClicked={() => this.props.onModalCancel()}
      >
        <div>
          <div className="row">
            <div className="column small-12">
              <p className="NameSource-label">Source Name:</p>
              <input
                className='fill-width no-outline'
                autoFocus
                type="text"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
              <p className="URLSource-label">Source URL:</p>
              <input
                className='fill-width no-outline'
                type="text"
                value={this.state.url}
                onChange={event => this.setState({ url: event.target.value })}
              />
              <p className="URLSource-label">Preview URL:</p>
              <input
                className='fill-width no-outline'
                type="text"
                value={this.state.previewUrl}
                onChange={event => this.setState({ previewUrl: event.target.value })}
              />
            </div>
          </div>
        </div>
      </ModalLayout>
    )
  }

  private onModalDone() {
    if (this.state.name && this.state.url && this.state.previewUrl) {
      this.props.onModalDone({
        name: this.state.name,
        url: this.state.url,
        previewUrl: this.state.previewUrl,
      });
    }
  }
}
