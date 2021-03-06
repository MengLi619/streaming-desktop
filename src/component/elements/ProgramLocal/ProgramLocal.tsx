import './ProgramLocal.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { Transition } from '../../../types/obs';

type ProgramLocalState = {
  programTransition?: Transition;
};

export class ProgramLocal extends React.Component<{}, ProgramLocalState> {
  private readonly sourceService: SourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.setState({
      programTransition: this.sourceService.programTransition,
    });
    this.sourceService.programChanged.on(this, transition => {
      this.setState({
        programTransition: transition,
      })
    });
    this.sourceService.sourceMuteChanged.on(this, source => {
      if (source.id === this.state.programTransition?.source?.id) {
        this.setState({
          programTransition: {
            ...this.state.programTransition,
            source: source,
          },
        });
      }
    });
  }

  public componentWillUnmount() {
    this.sourceService.programChanged.off(this);
  }

  public render() {
    return (
      <div className={`ProgramLocal ${this.state.programTransition ? 'isProgram': ''}`}>
        <div className='display-container'>
          <div className='content'>
            {
              this.state.programTransition &&
              <Display
                key={this.state.programTransition.id}
                sourceId={this.state.programTransition.id}
              />
            }
          </div>
        </div>
        <div className='toolbar'>
          <h2>PGM输出</h2>
          <i className={`${!this.state.programTransition?.source || this.state.programTransition.source.muted ? 'icon-mute' : 'icon-audio'} icon-button`}
             onClick={() => this.onMuteClicked()} />
        </div>
      </div>
    );
  }

  private onMuteClicked() {
    if (this.state.programTransition) {
      this.sourceService.muteSource(this.state.programTransition.source, !this.state.programTransition.source.muted);
    }
  }
}
