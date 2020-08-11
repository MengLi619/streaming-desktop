import './ProgramLive.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';

type ProgramLiveState = {
  sourceId?: string;
};

export class ProgramLive extends React.Component<{}, ProgramLiveState> {
  private readonly sourceService: SourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.setState({
      sourceId: this.sourceService.liveSource?.id,
    });
    this.sourceService.liveSourceChanged.on(this, source => {
      this.setState({
        sourceId: source?.id,
      });
    });
  }

  public componentWillUnmount() {
    this.sourceService.liveSourceChanged.off(this);
  }

  public render() {
    return (
      <div className='ProgramLocal'>
        <div className='display-container'>
          <div className='content'>
            {
              this.state.sourceId &&
              <Display
                key={this.state.sourceId}
                sourceId={this.state.sourceId}
              />
            }
          </div>
        </div>
        <div className='toolbar'>
          <h2>LIVE输出</h2>
        </div>
      </div>
    );
  }
}
