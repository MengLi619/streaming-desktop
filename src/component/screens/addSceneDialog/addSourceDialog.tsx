import React from 'react';
import { ModalLayout } from '../../shared/modalLayout';

type State = {
  name: string;
  url: string;
};

export class AddSourceDialog extends React.Component<{}, State> {
  render() {
    return (
      <ModalLayout>
        <div slot="content">
          <div className="row">
            <div className="column small-12">
              <h4>Add New Source</h4>
              <p className="NameSource-label">Name:</p>
              <input
                autoFocus
                type="text"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
              <p className="URLSource-label">URL:</p>
              <input
                autoFocus
                type="text"
                value={this.state.url}
                onChange={event => this.setState({ url: event.target.value })}
              />
            </div>
          </div>
        </div>
      </ModalLayout>
    )
  }
}
