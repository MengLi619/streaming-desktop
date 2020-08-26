import './ProgramLive.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { Source } from '../../../types/obs';

type ProgramLiveState = {
  liveSource?: Source;
};

export class ProgramLive extends React.Component<{}, ProgramLiveState> {
  private readonly sourceService: SourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.setState({
      liveSource: this.sourceService.liveSource,
    });
    this.sourceService.liveChanged.on(this, source => {
      this.setState({
        liveSource: source,
      });
    });
  }

  public componentWillUnmount() {
    this.sourceService.liveChanged.off(this);
  }

  public render() {
    return (
      <div className='ProgramLocal'>
        <div className='display-container'>
          <div className='content'>
            {
              this.state.liveSource &&
              <Display
                key={this.state.liveSource.id}
                sourceId={this.state.liveSource.id}
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
