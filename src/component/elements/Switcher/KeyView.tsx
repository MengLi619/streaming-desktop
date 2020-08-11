import './KeyView.scss';
import React from 'react';

export type KeyViewProps = {
  name: string;
  isPreview: boolean;
  isProgram: boolean;
  onButtonClicked: () => void;
};

export class KeyView extends React.Component<KeyViewProps> {

  public render() {
    const {name, isPreview, isProgram } = this.props;
    return (
      <div className={`KeyView  ${isPreview ? 'isPreview' : ''} ${isProgram ? 'isProgram' : ''}`}>
        <div className='button-container'>
          <div className='content'>
            <button className='button--key' onClick={() => this.props.onButtonClicked()}>
              {name}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
