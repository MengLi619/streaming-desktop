import './PGMKeyboard.scss';
import React from 'react';
import { KeyView } from './KeyView';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { Source } from '../../../types/obs';

const keyNames = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10', 'CG', 'DDR', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6'
];

export class PGMKeyboardState {
  pgmSource?: Source;
}

export class PGMSKeyboard extends React.Component<{}, PGMKeyboardState> {
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      pgmSource: this.sourceService.pgmSource,
    };
  }

  public componentDidMount() {
    this.sourceService.pgmSourceChanged.on(this, source => {
      this.setState({
        pgmSource: source,
      });
    });
  }

  public componentWillUnmount() {
    this.sourceService.pgmSourceChanged.off(this);
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
                  isProgram={!!source && this.state.pgmSource?.id === source.id}
                  onButtonClicked={() => this.onKeyClicked(index)}
                />
              );
            })
          }
        </div>
      </div>
    );
  }

  private onKeyClicked(index: number) {
    const source = this.sourceService.sources[index];
    if (source) {
      this.sourceService.take(source);
    }
  }
}
