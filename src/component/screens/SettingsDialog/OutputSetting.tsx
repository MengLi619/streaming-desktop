import React from 'react';
import { SettingsState } from '../../../util/settings';

export type OutputState = {
  url: string;
};

type Props = {
  state: SettingsState;
  onStateChanged: (state: OutputState) => void;
};

export class OutputSetting extends React.Component<Props> {
  public render() {
    return (
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
                value={this.props.state.output?.url}
                onChange={event => this.props.onStateChanged({ url: event.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
