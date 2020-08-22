import './PGMKeyboard.scss';
import React from 'react';
import { KeyView } from './KeyView';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { Transition } from '../../../types/obs';

const keyNames = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10', 'CG', 'DDR', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6'
];

export class PGMKeyboardState {
  transition?: Transition;
}

export class PGMSKeyboard extends React.Component<{}, PGMKeyboardState> {
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      transition: this.sourceService.pgmTransition,
    };
  }

  public componentDidMount() {
    this.sourceService.pgmTransitionChanged.on(this, transition => {
      this.setState({
        transition: transition,
      });
    });
  }

  public componentWillUnmount() {
    this.sourceService.pgmTransitionChanged.off(this);
  }

  public render() {
    return (
      <div className='PGMKeyboard'>
        <h2 className='header'>PGM</h2>
        <div className='keyboard'>
          {
            keyNames.map((name, index) => {
              const source = this.sourceService.sources[index];
              return (
                <KeyView
                  key={name}
                  name={name}
                  isPreview={false}
                  isProgram={!!source && this.state.transition?.source?.id === source.id}
                  onButtonClicked={() => {}}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}
