import './PVWKeyboard.scss';
import React from 'react';
import { KeyView } from './KeyView';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { Source } from '../../../types/obs';

const keyNames = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10', 'CG', 'DDR', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6'
];

type PVWKeyboardState = {
  pvwSource?: Source;
  pgmSource?: Source;
}

export class PVWKeyboard extends React.Component<{}, PVWKeyboardState> {
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      pvwSource: this.sourceService.pvwSource,
    };
  }

  public componentDidMount() {
    this.sourceService.pvwSourceChanged.on(this, source => {
      this.setState({
        pvwSource: source,
      });
    });
  }

  public componentWillUnmount() {
    this.sourceService.pvwSourceChanged.off(this);
  }

  public render() {
    return (
      <div className='PVWKeyboard'>
        <h2 className='header'>PVW</h2>
        <div className='keyboard'>
          {
            keyNames.map((name, index) => {
              const source = this.sourceService.sources[index];
              return (
                <KeyView
                  key={name}
                  name={name}
                  isPreview={!!source && this.state.pvwSource?.id === source.id}
                  isProgram={false}
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
    this.sourceService.setPvwSource(this.sourceService.sources[index]);
  }
}
