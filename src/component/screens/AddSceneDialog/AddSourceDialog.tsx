import React from 'react';
import { ModalLayout } from '../../shared/ModalLayout/ModalLayout';
import { ChildWindow } from '../../shared/ChildWindow/ChildWindow';
import { confirmDialog } from '../../../util/dialog';

type State = {
  name: string;
  url: string;
};

export class AddSourceDialog extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      url: '',
    };
  }

  onModalDone() {
    confirmDialog({ name: this.state.name, url: this.state.url });
  }

  render() {
    return (
      <ChildWindow title='Add Source'>
        <ModalLayout onModalDone={() => this.onModalDone()}>
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
              </div>
            </div>
          </div>
        </ModalLayout>
      </ChildWindow>
    )
  }
}
