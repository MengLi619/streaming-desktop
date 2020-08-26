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
  programTransition?: Transition;
}

export class PGMSKeyboard extends React.Component<{}, PGMKeyboardState> {
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      programTransition: this.sourceService.programTransition,
    };
  }

  public componentDidMount() {
    this.sourceService.programChanged.on(this, transition => {
      this.setState({
        programTransition: transition,
      });
    });
  }

  public componentWillUnmount() {
    this.sourceService.programChanged.off(this);
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
                  isProgram={!!source && this.state.programTransition?.source?.id === source.id}
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
