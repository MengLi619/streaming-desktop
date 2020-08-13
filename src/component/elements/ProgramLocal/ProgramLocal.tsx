import './ProgramLocal.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { Source } from '../../../types/obs';

type ProgramLocalState = {
  source?: Source;
};

export class ProgramLocal extends React.Component<{}, ProgramLocalState> {
  private readonly sourceService: SourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.setState({
      source: this.sourceService.pgmSource,
    });
    this.sourceService.pgmSourceChanged.on(this, source => {
      this.setState({
        source: source,
      })
    });
  }

  public componentWillUnmount() {
    this.sourceService.pgmSourceChanged.off(this);
  }

  public render() {
    return (
      <div className={`ProgramLocal ${this.state.source ? 'isProgram': ''}`}>
        <div className='display-container'>
          <div className='content'>
            {
              this.state.source &&
              <Display
                key={this.state.source.id}
                sourceId={this.state.source.id}
              />
            }
          </div>
        </div>
        <div className='toolbar'>
          <h2>PGM输出</h2>
        </div>
      </div>
    );
  }
}
